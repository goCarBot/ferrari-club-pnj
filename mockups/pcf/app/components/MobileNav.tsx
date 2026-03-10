"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

export default function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="mobile-nav-wrapper">
      <button
        className="menu-toggle"
        onClick={toggle}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
      <nav>
        <ul className={`header-nav${open ? " open" : ""}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={close}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
