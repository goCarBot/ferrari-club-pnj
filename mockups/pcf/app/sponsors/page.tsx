import type { Metadata } from "next";
import Link from "next/link";
import { sponsors } from "@/src/data/sponsors";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description:
    "Meet the sponsors and partners who make the Pennsylvania Concorso Ferrari possible — from Ferrari Philadelphia to our valued community supporters.",
};

const featured = sponsors.find((s) => s.priorityOrder === 1)!;
const remaining = sponsors
  .filter((s) => s.priorityOrder !== 1)
  .sort((a, b) => a.priorityOrder - b.priorityOrder);

export default function SponsorsPage() {
  return (
    <>
      {/* Sub-hero */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://a.mpcdn.io/ferrari/2023/05/Nice-Field-Pic-scaled.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">
            Presenting the partners who make the Pennsylvania Concorso Ferrari
            possible
          </p>
          <h1>Our Sponsors &amp; Partners</h1>
        </div>
      </section>

      <div className="tricolor">
        <span className="green" />
        <span className="white" />
        <span className="red" />
      </div>

      {/* Gratitude intro */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>With Gratitude</h2>
            <span className="gold-rule" />
            <p>
              The Pennsylvania Concorso Ferrari is made possible by the generous
              support of our sponsors and partners. Their commitment to
              excellence mirrors the spirit of Ferrari itself, and we are proud
              to showcase each of them here.
            </p>
          </div>

          {/* Featured Sponsor */}
          <div className="sponsor-featured">
            <div className="sponsor-featured-logo">
              <img src={featured.logoUrl} alt={`${featured.name} logo`} />
            </div>
            <div className="sponsor-featured-info">
              <span className="date-badge">Presenting Sponsor</span>
              <h3>{featured.name}</h3>
              <p>{featured.description}</p>
              <div className="sponsor-featured-links">
                {featured.websiteUrl && (
                  <a
                    href={featured.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website &rarr;
                  </a>
                )}
                {featured.contactInfo?.phone && (
                  <a href={`tel:${featured.contactInfo.phone.replace(/[^\d+]/g, "")}`}>
                    {featured.contactInfo.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Grid */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <h2>Our Sponsors</h2>
            <span className="gold-rule" />
          </div>

          <div className="sponsor-card-grid">
            {remaining.map((sponsor) => (
              <div key={sponsor.name} className="sponsor-card">
                <div className="sponsor-card-logo">
                  <img
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} logo`}
                    loading="lazy"
                  />
                </div>
                <h3>{sponsor.name}</h3>
                <p>{sponsor.description}</p>
                <div className="sponsor-card-links">
                  {sponsor.websiteUrl && (
                    <a
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  )}
                  {sponsor.contactInfo?.phone && (
                    <a
                      href={`tel:${sponsor.contactInfo.phone.replace(/[^\d+]/g, "")}`}
                    >
                      {sponsor.contactInfo.phone}
                    </a>
                  )}
                  {sponsor.contactInfo?.email && (
                    <a href={`mailto:${sponsor.contactInfo.email}`}>
                      {sponsor.contactInfo.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Interested in Sponsoring?</h2>
        <p>
          Join our roster of distinguished sponsors and partners. For
          sponsorship inquiries, contact John Camilleri.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-lg)",
            flexWrap: "wrap",
          }}
        >
          <a href="mailto:jcamilleri@comcast.net" className="btn btn-gold">
            Email John Camilleri
          </a>
          <a href="tel:+16103294444" className="btn btn-outline-light">
            610-329-4444
          </a>
        </div>
      </section>
    </>
  );
}
