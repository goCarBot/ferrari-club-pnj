import type { Metadata } from "next";
import Link from "next/link";
import { galleryEvents } from "@/src/data/gallery";

export const metadata: Metadata = {
  title: "Event Gallery",
  description:
    "Three years of Pennsylvania Concorso Ferrari photography — browse 44 images from the 2025, 2024, and 2023 events at Aronimink Golf Club.",
};

const YEAR_META: Record<string, string> = {
  "2025": "Aronimink Golf Club",
  "2024": "Aronimink Golf Club",
  "2023": "Aronimink Golf Club",
};

function getYear(dateStr: string) {
  return dateStr.slice(0, 4);
}

export default function GalleryPage() {
  const years = galleryEvents.map((e) => getYear(e.date));

  return (
    <>
      {/* Sub-hero */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://a.mpcdn.io/ferrari/2023/05/8n0tU4rG-IMG_4929-Large.jpeg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">
            Three years of Pennsylvania Concorso Ferrari photography
          </p>
          <h1>Event Gallery</h1>
        </div>
      </section>

      <div className="tricolor">
        <span className="green" />
        <span className="white" />
        <span className="red" />
      </div>

      {/* Year filter tabs */}
      <section className="section-cream" style={{ padding: "var(--space-lg) 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "var(--space-md)" }}>
          {years.map((year) => (
            <a
              key={year}
              href={`#year-${year}`}
              className="btn btn-outline"
              style={{ padding: "0.6rem 1.8rem", fontSize: "0.85rem" }}
            >
              {year}
            </a>
          ))}
        </div>
      </section>

      {/* Year sections */}
      {galleryEvents.map((event) => {
        const year = getYear(event.date);
        const venue = YEAR_META[year] ?? "";

        return (
          <section key={event.slug} id={`year-${year}`} className="section">
            <div className="container">
              <div className="section-header">
                <h2>
                  {year} &mdash; {venue}
                </h2>
                <span className="gold-rule" />
                <p>
                  {event.images.length} photographs from the{" "}
                  <a
                    href={event.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.title}
                  </a>
                </p>
              </div>

              <div className="gallery-grid">
                {event.images.map((img, idx) => (
                  <figure
                    key={img.filename}
                    className={`gallery-item${idx === 0 ? " wide" : ""}`}
                  >
                    <img
                      src={img.sourceUrl}
                      alt={img.alt}
                      loading={idx < 4 ? "eager" : "lazy"}
                    />
                    <figcaption className="gallery-caption">
                      {img.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Be Part of Our Next Chapter</h2>
        <p>
          Join us at the 2026 Pennsylvania Concorso Ferrari &mdash; Sunday, May 17
          at Union League Liberty Hill.
        </p>
        <Link href="/register" className="btn btn-gold">
          Register Now
        </Link>
      </section>
    </>
  );
}
