import type { Metadata } from "next";
import Link from "next/link";
import { event2026 } from "@/src/data/event";
import { sponsors } from "@/src/data/sponsors";

export const metadata: Metadata = {
  title: "Registration",
  description:
    "Register your Ferrari or purchase spectator tickets for the 2026 Pennsylvania Concorso Ferrari at Union League Liberty Hill on Sunday, May 17, 2026.",
};

export default function RegisterPage() {
  const sortedSponsors = [...sponsors].sort(
    (a, b) => a.priorityOrder - b.priorityOrder,
  );

  return (
    <>
      {/* Sub-hero */}
      <section className="hero hero-sub">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://a.mpcdn.io/ferrari/2024/05/vms6fTeT-IMG_9138-scaled.jpeg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="date-badge">Sunday, May 17, 2026</span>
          <h1>Registration</h1>
          <p className="hero-venue">
            Official entry and ticketing for the 2026 Pennsylvania Concorso
            Ferrari
          </p>
        </div>
      </section>

      {/* Tricolor Divider */}
      <div className="tricolor">
        <span className="green" />
        <span className="white" />
        <span className="red" />
      </div>

      {/* Event Details */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Event Details</h2>
            <span className="gold-rule" />
          </div>

          <div className="event-details-card">
            <h3>2026 Concorso Information</h3>
            <div className="detail-row">
              <span className="detail-label">Date</span>
              <span className="detail-value">Sunday, May 17, 2026</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Time</span>
              <span className="detail-value">8:30 AM &ndash; 3:00 PM</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Venue</span>
              <span className="detail-value">
                Union League &mdash; Liberty Hill
                <br />
                {event2026.address}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Organizer</span>
              <span className="detail-value">
                {event2026.contact.name} &middot;{" "}
                <a href={`mailto:${event2026.contact.email}`}>
                  {event2026.contact.email}
                </a>
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-value">
                <a href={`tel:+1${event2026.contact.phone?.replace(/-/g, "")}`}>
                  {event2026.contact.phone}
                </a>
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Note</span>
              <span className="detail-value">
                Rain or shine event. Paved Ferrari parking and on-site hotel
                availability for distant travelers.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <h2>Register Your Ferrari</h2>
            <span className="gold-rule" />
            <p>
              Use the official registration page to enter your Ferrari and
              purchase tickets.
            </p>
          </div>

          <div className="reg-form">
            <h3>Official Registration Link</h3>
            <p>
              Click below to complete registration and ticket purchase through
              RegFox:
            </p>
            <p>
              {/* TODO: Replace href with actual RegFox URL when provided */}
              <a
                className="alert-link"
                href="#"
                aria-label="Registration link — coming soon"
              >
                Register your Ferrari / Purchase Tickets
              </a>
            </p>
            <p style={{ marginTop: "var(--space-lg)" }}>
              Need help with registration? Contact {event2026.contact.name} at{" "}
              <a href={`mailto:${event2026.contact.email}`}>
                {event2026.contact.email}
              </a>{" "}
              or{" "}
              <a href={`tel:+1${event2026.contact.phone?.replace(/-/g, "")}`}>
                {event2026.contact.phone}
              </a>
              .
            </p>
            <div className="form-submit">
              {/* TODO: Replace href with actual RegFox URL when provided */}
              <a
                href="#"
                className="btn btn-gold"
                aria-label="Open registration — coming soon"
              >
                Open Registration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Schedule of Day&apos;s Events</h2>
            <span className="gold-rule" />
            <p>Program timing from the official event schedule.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-time">8:30 AM</span>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Registration Check-In</h4>
                <p>
                  Receive vehicle ID card, personalized Concorso lanyard, and
                  event bag. Follow volunteers to show, spectator, and trailer
                  parking.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-time">
                8:30 &ndash; 11:30 AM
              </span>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Continental Breakfast / Mercato Opens</h4>
                <p>Breakfast service and Mercato tent activities begin.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-time">
                9:00 &ndash; 9:30 AM
              </span>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Judges Meeting</h4>
                <p>
                  Washington A Conference Room. Breakfast provided for judges.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-time">
                9:30 AM &ndash; 12:30 PM
              </span>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Concorso Judging / Mercato Program</h4>
                <p>
                  Judging in progress (presenter must be with Ferrari), Santucci
                  Jazz Trio, raffle ticket sales, cash bar, sponsor displays,
                  and Ferrari accessories.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-time">
                12:30 &ndash; 3:00 PM
              </span>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h4>Awards Banquet Luncheon</h4>
                <p>
                  Lafayette Ballroom luncheon, raffle basket winners, Concorso
                  and special award presentations, and winner photos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Event Notes */}
      <section className="section section-cream">
        <div className="container">
          <div className="info-box">
            <h3>Important Event Notes</h3>
            <p>
              Don&rsquo;t miss this fabulous, fun day. All entries can elect to
              be judged according to IAC/PFA rules and receive a Platino, Oro,
              or Argento keepsake trophy engraved with your name and Ferrari
              details.
            </p>
            <p>
              Raffle ticket sales in the Mercato tent benefit the Multiple
              Sclerosis Society.
            </p>
          </div>
        </div>
      </section>

      {/* Event Resources */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Event Resources</h2>
            <span className="gold-rule" />
          </div>
          <div className="resource-links">
            <a
              href="/26 Concorso Save the Date flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Save the Date Flyer (PDF)
            </a>
            <a
              href="/Event Schedule PDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Event Schedule (PDF)
            </a>
            <a
              href="/FCA PJR sponsorship presentation for Comcast Spectacor.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsorship Presentation (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <h2>2026 Sponsors &amp; Partners</h2>
            <span className="gold-rule" />
            <p>
              Presented with support from our 2026 sponsor and partner
              community.
            </p>
          </div>
          <div className="sponsor-order-grid">
            {sortedSponsors.map((sponsor) => {
              const inner = (
                <>
                  <img src={sponsor.logoUrl} alt={sponsor.name} />
                  <span>{sponsor.name}</span>
                </>
              );

              return sponsor.websiteUrl ? (
                <a
                  key={sponsor.name}
                  className="sponsor-tile"
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={sponsor.name} className="sponsor-tile">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Questions About Registration?</h2>
          <p>
            Contact our Concorso Organizer, {event2026.contact.name}, for more
            information.
          </p>
          <a
            href={`mailto:${event2026.contact.email}`}
            className="btn btn-gold"
          >
            Contact Organizer
          </a>
        </div>
      </section>
    </>
  );
}
