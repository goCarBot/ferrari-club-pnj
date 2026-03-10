import Link from "next/link";
import { sponsors } from "@/src/data/sponsors";

export default function HomePage() {
  const sortedSponsors = [...sponsors].sort(
    (a, b) => a.priorityOrder - b.priorityOrder,
  );

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('https://a.mpcdn.io/ferrari/2025/05/IMG_2243.jpeg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-subtitle">
            The Penn-Jersey Region proudly presents
          </p>
          <h1>Pennsylvania Concorso Ferrari</h1>
          <p className="hero-date">Sunday, May 17, 2026</p>
          <p className="hero-venue">
            Union League &mdash; Liberty Hill &middot; 800 Ridge Pike, Lafayette
            Hill, PA 19444
          </p>
          <Link href="/register" className="btn btn-gold">
            Register Your Ferrari / Purchase Tickets
          </Link>
        </div>
      </section>

      {/* Tricolor Divider */}
      <div className="tricolor">
        <span className="green" />
        <span className="white" />
        <span className="red" />
      </div>

      {/* Event Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Event Overview</h2>
            <span className="gold-rule" />
          </div>
          <div className="about-brief">
            <p>
              The 2026 Pennsylvania Concorso Ferrari returns as one of the
              region&apos;s signature Ferrari gatherings, featuring approximately
              100 Ferraris and 250+ attendees for a full day of concours judging,
              hospitality, and club camaraderie.
            </p>
            <p>
              This year we are parking all Ferraris on pavement, and an on-site
              hotel is available for distant travelers. The event is rain or
              shine.
            </p>
            <p style={{ marginTop: "var(--space-xl)" }}>
              <Link href="/about" className="btn btn-outline">
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Concorso Highlights */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <h2>Concorso Highlights</h2>
            <span className="gold-rule" />
          </div>
          <div className="highlights">
            <div className="highlight-card">
              <div className="highlight-number">100+</div>
              <div className="highlight-label">Ferraris</div>
              <div className="highlight-desc">
                From vintage classics to modern supercars, displayed on a
                prestigious showfield
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">250+</div>
              <div className="highlight-label">Attendees</div>
              <div className="highlight-desc">
                FCA members, collectors, and enthusiasts gather from across the
                region
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">IAC/PFA</div>
              <div className="highlight-label">Judging Standards</div>
              <div className="highlight-desc">
                International Advisory Council standards ensuring authenticity
                and originality
              </div>
            </div>
          </div>
          <div className="highlights-list">
            <ul>
              <li>Mercato tent experience</li>
              <li>Continental breakfast</li>
              <li>Live smooth jazz band</li>
              <li>Camaraderie with club members</li>
              <li>Bar area and Ferrari merchandise</li>
              <li>Catered lunch by Liberty Hill chefs</li>
              <li>Judged class awards and special awards presentation</li>
              <li>Raffles for tailored gift packages</li>
            </ul>
            <p>
              <strong>
                All raffle sales benefit the Multiple Sclerosis Society.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Venue */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Venue</h2>
            <span className="gold-rule" />
          </div>
          <div className="venue-feature">
            <div className="venue-image">
              <img
                src="https://a.mpcdn.io/ferrari/2023/05/8n0tU4rG-IMG_4929-Large.jpeg"
                alt="Showfield at the golf club"
              />
            </div>
            <div className="venue-info">
              <h3>Union League &mdash; Liberty Hill</h3>
              <p>
                Set in Lafayette Hill, Pennsylvania, Union League Liberty Hill
                provides a premium concours setting with elegant hospitality,
                paved display parking, and an ideal spectator experience for
                members and guests.
              </p>
              <div className="venue-meta">
                <span>
                  <strong>Address:</strong> 800 Ridge Pike, Lafayette Hill, PA
                  19444
                </span>
                <span>
                  <strong>Date:</strong> Sunday, May 17, 2026
                </span>
                <span>
                  <strong>Hours:</strong> 8:30 AM &ndash; 3:00 PM
                </span>
                <span>
                  <strong>Travel:</strong> On-site hotel available for distant
                  travelers
                </span>
              </div>
              <Link href="/register" className="btn btn-outline">
                Register for 2026
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Callout */}
      <section className="section section-linen">
        <div className="container">
          <div className="section-header">
            <h2>Secure Your Spot</h2>
            <span className="gold-rule" />
            <p>
              All entries may elect to be judged according to IAC/PFA rules and
              receive a Platino, Oro, or Argento keepsake trophy engraved with
              your name and Ferrari details.
            </p>
          </div>
          <div className="alert-card">
            <p className="alert-title">
              Register your Ferrari / Purchase Tickets
            </p>
            <p className="alert-copy">
              Use the official registration page to complete your entry and
              attendee purchase.
            </p>
            <p>
              <Link href="/register" className="alert-link">
                Open Official Registration (RegFox)
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Photo Strip */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>Scenes from Past Concorsi</h2>
            <span className="gold-rule" />
            <p>
              A tradition of elegance, excellence, and the incomparable Ferrari
              experience.
            </p>
          </div>
          <div className="photo-strip">
            <figure className="photo-strip-item">
              <img
                src="https://a.mpcdn.io/ferrari/2025/05/IMG_2243.jpeg"
                alt="Concorso 2025"
              />
              <figcaption>Concorso 2025</figcaption>
            </figure>
            <figure className="photo-strip-item">
              <img
                src="https://a.mpcdn.io/ferrari/2024/05/vms6fTeT-IMG_9138-scaled.jpeg"
                alt="Concorso 2024"
              />
              <figcaption>Concorso 2024</figcaption>
            </figure>
            <figure className="photo-strip-item">
              <img
                src="https://a.mpcdn.io/ferrari/2023/05/OmqHrTLn-IMG_4966-Large.jpeg"
                alt="Concorso 2023"
              />
              <figcaption>Concorso 2023</figcaption>
            </figure>
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "var(--space-2xl)",
            }}
          >
            <Link href="/gallery" className="btn btn-outline-light">
              View Full Gallery
            </Link>
          </p>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <h2>Our Sponsors</h2>
            <span className="gold-rule" />
            <p>
              We gratefully acknowledge the generous support of our sponsors.
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
          <h2>Join Us Sunday, May 17, 2026</h2>
          <p>
            Experience Pennsylvania&apos;s premier Ferrari Concorso at Union
            League Liberty Hill in Lafayette Hill.
          </p>
          <Link href="/register" className="btn btn-gold">
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
