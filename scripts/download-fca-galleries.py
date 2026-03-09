#!/usr/bin/env python3
"""
Download and catalog FCA Penn-Jersey gallery images from the public galleries index.

Outputs:
- assets/archive/fca-pnj/<event-slug>/*.{jpg,jpeg,png,webp}
- data/fca-pnj-gallery-download-catalog.json
- data/fca-pnj-gallery-download-catalog.md
"""

from __future__ import annotations

import hashlib
import html
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple
from urllib.parse import urlparse

import requests

INDEX_URL = "https://fca-pennjersey.org/galleries/"
ROOT = Path("/Users/cws_mbam18g/code/ferrari-club-pnj")
ARCHIVE_ROOT = ROOT / "assets" / "archive" / "fca-pnj"
DATA_ROOT = ROOT / "data"

EVENT_PATTERN = re.compile(
    r"<a[^>]+href=[\"']([^\"']+)[\"'][^>]*>(.*?)</a>",
    re.IGNORECASE | re.DOTALL,
)
IMG_PATTERN = re.compile(
    r"https://[^\"'\s>]+?\.(?:jpg|jpeg|png|webp)(?:\?[^\"'\s>]*)?",
    re.IGNORECASE,
)


def fetch(url: str) -> str:
    return requests.get(url, timeout=30).text


def clean_text(text: str) -> str:
    return " ".join(html.unescape(re.sub(r"<[^<]+?>", " ", text)).split())


def score_url(u: str) -> int:
    # Prefer highest-quality variants over fit/size derivatives.
    q = (urlparse(u).query or "").lower()
    score = 0
    if "fit=scale" not in q and "w=" not in q and "h=" not in q:
        score += 3
    elif "fit=scale" not in q:
        score += 2
    else:
        score += 1
    if "fm=pjpg" in q or "fm=png" in q or "fm=webp" in q:
        score += 1
    return score


def extract_event_links(index_html: str) -> List[Tuple[str, str]]:
    links: List[Tuple[str, str]] = []
    for href, inner in EVENT_PATTERN.findall(index_html):
        text = clean_text(inner)
        if any(y in text for y in ("2025", "2024", "2023")) and any(
            k in text for k in ("Concorso", "Festival", "Tour", "Rally")
        ):
            links.append((text, href))
    return links


def extract_best_images(page_html: str) -> Dict[str, str]:
    # map image path => best source URL
    best: Dict[str, str] = {}
    best_score: Dict[str, int] = {}

    for raw in IMG_PATTERN.findall(page_html):
        u = html.unescape(raw)
        if "a.mpcdn.io/ferrari/" not in u:
            continue
        if "cropped-favicon" in u:
            continue
        parsed = urlparse(u)
        path = parsed.path
        if not path:
            continue

        s = score_url(u)
        if path not in best or s > best_score[path]:
            best[path] = u
            best_score[path] = s

    return best


def safe_file_name(path: str) -> str:
    name = Path(path).name
    if not name:
        digest = hashlib.sha1(path.encode("utf-8")).hexdigest()[:10]
        return f"image-{digest}.jpg"
    return name


def download_file(url: str, destination: Path) -> bool:
    try:
        resp = requests.get(url, timeout=45)
        if resp.status_code != 200:
            return False
        destination.write_bytes(resp.content)
        return True
    except requests.RequestException:
        return False


def main() -> None:
    ARCHIVE_ROOT.mkdir(parents=True, exist_ok=True)
    DATA_ROOT.mkdir(parents=True, exist_ok=True)

    index_html = fetch(INDEX_URL)
    events = extract_event_links(index_html)

    catalog = {
        "sourceIndexUrl": INDEX_URL,
        "events": [],
    }

    md_lines: List[str] = [
        "# FCA PNJ Download Catalog",
        "",
        f"Source: {INDEX_URL}",
        "",
    ]

    for title, event_url in events:
        slug = Path(urlparse(event_url).path.rstrip("/")).name
        event_dir = ARCHIVE_ROOT / slug
        event_dir.mkdir(parents=True, exist_ok=True)

        page_html = fetch(event_url)
        best_images = extract_best_images(page_html)

        downloaded = []
        name_counts: Dict[str, int] = {}

        for _, src in sorted(best_images.items()):
            base_name = safe_file_name(urlparse(src).path)
            count = name_counts.get(base_name, 0)
            name_counts[base_name] = count + 1
            if count > 0:
                stem = Path(base_name).stem
                suffix = Path(base_name).suffix
                base_name = f"{stem}-{count+1}{suffix}"

            local_path = event_dir / base_name
            ok = download_file(src, local_path)
            if not ok:
                # Fallback to base path only.
                base_url = f"{urlparse(src).scheme}://{urlparse(src).netloc}{urlparse(src).path}"
                ok = download_file(base_url, local_path)
                if not ok:
                    continue

            downloaded.append(
                {
                    "sourceUrl": src,
                    "localPath": str(local_path.relative_to(ROOT)),
                }
            )

        catalog["events"].append(
            {
                "title": title,
                "eventUrl": event_url,
                "slug": slug,
                "imageCount": len(downloaded),
                "images": downloaded,
            }
        )

        md_lines.append(f"## {title}")
        md_lines.append(f"- Event URL: {event_url}")
        md_lines.append(f"- Local folder: `assets/archive/fca-pnj/{slug}`")
        md_lines.append(f"- Downloaded images: {len(downloaded)}")
        md_lines.append("")

    (DATA_ROOT / "fca-pnj-gallery-download-catalog.json").write_text(
        json.dumps(catalog, indent=2),
        encoding="utf-8",
    )
    (DATA_ROOT / "fca-pnj-gallery-download-catalog.md").write_text(
        "\n".join(md_lines) + "\n",
        encoding="utf-8",
    )

    print("Wrote:")
    print(f"- {DATA_ROOT / 'fca-pnj-gallery-download-catalog.json'}")
    print(f"- {DATA_ROOT / 'fca-pnj-gallery-download-catalog.md'}")
    print(f"- {ARCHIVE_ROOT}")


if __name__ == "__main__":
    main()
