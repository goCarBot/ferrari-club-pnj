import type { Metadata } from "next";
import Link from "next/link";
import { sponsors } from "@/src/data/sponsors";

export const metadata: Metadata = {
  title: "About the Concorso",
  description:
    "Learn about the Pennsylvania Concorso Ferrari — event details, IAC/PFA judging standards, venue, schedule, organizers, and the Ferrari Club of America Penn-Jersey Region.",
};

export default function AboutPage() {
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
              "url('https://admin.unionleague.org/wp-content/uploads/2024/06/DSC08131-Enhanced-NR.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>About the Concorso</h1>
          <p className="hero-venue">
            Event details, standards, and what to expect on Sunday, May 17, 2026
          </p>
        </div>
      </section>

      {/* Tricolor Divider */}
      <div className="tricolor">
        <span className="green" />
        <span className="white" />
        <span className="red" />
      </div>

      {/* Presented By */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left" }}>
              <h2>Presented by FCA Penn-Jersey Region</h2>
              <span className="gold-rule gold-rule-left" />
            </div>
            <div className="presenter-brand">
              <img
                src="/img/branding/penn-jersey-region.jpg"
                alt="Ferrari Club of America Penn-Jersey Region logo"
                className="presenter-logo"
              />
              <div>
                <p>
                  The Pennsylvania Concorso Ferrari is proudly presented by the{" "}
                  <strong>
                    Penn-Jersey Region of the Ferrari Club of America
                  </strong>
                  .
                </p>
                <p>
                  Our region serves Ferrari owners and enthusiasts across
                  Pennsylvania, New Jersey, and Delaware, with an emphasis on
                  preserving Ferrari heritage while building a strong club
                  community through events, touring, and concours participation.
                </p>
              </div>
            </div>
            <p>
              The 2026 Pennsylvania Concorso Ferrari welcomes entrants and
              guests for a full day of judging, hospitality, and celebration at
              Union League - Liberty Hill on{" "}
              <strong>Sunday, May 17, 2026</strong>.
            </p>
            <p>
              We are planning for approximately{" "}
              <strong>100 Ferraris</strong> and more than{" "}
              <strong>250 attendees</strong>, with paved display parking,
              spectator and trailer parking support, and on-site accommodations
              for out-of-town travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Venue Spotlight */}
      <section className="section section-cream">
        <div className="container">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left" }}>
              <h2>Union League - Liberty Hill</h2>
              <span className="gold-rule gold-rule-left" />
            </div>
            <div className="venue-feature">
              <img
                src="https://admin.unionleague.org/wp-content/uploads/2024/06/DSC08131-Enhanced-NR.jpg"
                alt="Union League Liberty Hill clubhouse and grounds"
              />
              <div className="venue-details">
                <p>
                  Union League Liberty Hill is an expansive property with a
                  championship setting that complements the Concorso experience
                  for both entrants and spectators.
                </p>
                <p>
                  The club features an{" "}
                  <strong>18-hole Gary Player-designed course</strong> across
                  311 acres, with broad fairways, scenic water features, and
                  modern golf amenities including a two-tier Trackman-enabled
                  driving range.
                </p>
                <p>
                  For our event, Liberty Hill provides the scale and hospitality
                  required for showfield presentation, Mercato activity, judging
                  operations, and the awards luncheon in one destination venue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Highlights */}
      <section className="section section-cream">
        <div className="container">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left" }}>
              <h2>2026 Highlights</h2>
              <span className="gold-rule gold-rule-left" />
            </div>
            <div className="highlights-list" style={{ marginTop: 0 }}>
              <ul>
                <li>Mercato tent and continental breakfast</li>
                <li>Live smooth jazz in the tent</li>
                <li>
                  Bar area, Ferrari merchandise, and sponsor activations
                </li>
                <li>Catered luncheon by Liberty Hill chefs</li>
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
        </div>
      </section>

      {/* Event Day Schedule */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left" }}>
              <h2>2026 Event Day Schedule</h2>
              <span className="gold-rule gold-rule-left" />
            </div>
            <div className="schedule-grid">
              <article className="schedule-card">
                <h3>8:30 - 9:30 Registration</h3>
                <ul>
                  <li>Registration table check-in</li>
                  <li>Receive vehicle ID card for dashboard display</li>
                  <li>
                    Receive personalized Concorso lanyard (required on site)
                  </li>
                  <li>
                    Receive event bag and parking directions from volunteers
                  </li>
                </ul>
              </article>
              <article className="schedule-card">
                <h3>8:30 - 11:30 Continental Breakfast</h3>
                <ul>
                  <li>
                    Served in the Mercato Tent for entrants and guests
                  </li>
                </ul>
                <h3>9:00 - 9:30 Judges Meeting</h3>
                <ul>
                  <li>Washington A Conference Room</li>
                  <li>Breakfast provided for judges</li>
                </ul>
              </article>
              <article className="schedule-card">
                <h3>9:30 - 12:30 Concorso Judging</h3>
                <ul>
                  <li>
                    Presenter must remain with their Ferrari during judging
                  </li>
                </ul>
                <h3>9:30 - 12:30 Mercato Tent Program</h3>
                <ul>
                  <li>Santucci Jazz Trio</li>
                  <li>
                    Raffle ticket sales for sponsor baskets (benefiting Multiple
                    Sclerosis Society)
                  </li>
                  <li>
                    Cash bar, memorabilia, sponsor displays, and Ferrari
                    Philadelphia display
                  </li>
                </ul>
              </article>
              <article className="schedule-card">
                <h3>12:30 - 3:00 Awards Banquet Luncheon</h3>
                <ul>
                  <li>Lafayette Ballroom (cash bar available)</li>
                  <li>Specially prepared lunch by Liberty Hill</li>
                  <li>
                    Basket winners, Concorso and special awards presentation
                  </li>
                  <li>Award winner photos</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Standards */}
      <section className="section section-cream">
        <div className="container">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left" }}>
              <h2>Judging Standards</h2>
              <span className="gold-rule gold-rule-left" />
            </div>
            <p>
              The Pennsylvania Concorso Ferrari upholds the highest standards of
              automotive evaluation. Entrants may elect judged participation
              under <strong>IAC/PFA</strong> rules and receive Platino, Oro, or
              Argento keepsake trophies engraved with entrant and Ferrari
              details.
            </p>
            <p>Our experienced judges evaluate each entry based on:</p>

            <div
              className="highlights"
              style={{ marginTop: "var(--space-xl)" }}
            >
              <div className="highlight-card">
                <div
                  className="highlight-number"
                  style={{ fontSize: "2rem" }}
                >
                  Originality
                </div>
                <div className="highlight-desc">
                  Correctness of components, finishes, and materials to factory
                  specifications
                </div>
              </div>
              <div className="highlight-card">
                <div
                  className="highlight-number"
                  style={{ fontSize: "2rem" }}
                >
                  Authenticity
                </div>
                <div className="highlight-desc">
                  Verification that each vehicle remains true to its original
                  configuration and provenance
                </div>
              </div>
              <div className="highlight-card">
                <div
                  className="highlight-number"
                  style={{ fontSize: "2rem" }}
                >
                  Elegance
                </div>
                <div className="highlight-desc">
                  Overall presentation, condition, and the spirit of the marque
                  as Enzo intended
                </div>
              </div>
            </div>

            <p style={{ marginTop: "var(--space-2xl)" }}>
              These standards ensure winners represent the best in Ferrari
              preservation and restoration while maintaining consistency and
              fairness across judged classes.
            </p>
          </div>
        </div>
      </section>

      {/* Venue History */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left" }}>
              <h2>Venue</h2>
              <span className="gold-rule gold-rule-left" />
            </div>
            <p>
              The 2026 Concorso will be held at Union League - Liberty Hill,
              800 Ridge Pike, Lafayette Hill, PA 19444.
            </p>

            <div className="venues-grid">
              <div className="venue-card">
                <h4>Union League &mdash; Liberty Hill</h4>
                <div className="years">2026</div>
                <p>
                  Primary venue for 2026 featuring paved Ferrari parking and
                  hospitality amenities, including on-site lodging options for
                  distant travelers.
                </p>
              </div>
              <div className="venue-card">
                <h4>Aronimink Golf Club</h4>
                <div className="years">2023 &ndash; 2025</div>
                <p>
                  Recent host venue for prior Pennsylvania Concorso years and an
                  important part of the event&apos;s modern history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Team */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>Organizing Team</h2>
            <span className="gold-rule" />
            <p>
              The dedicated team behind Pennsylvania&apos;s premier Ferrari
              event.
            </p>
          </div>

          <div className="board-grid">
            <div className="board-member">
              <div className="board-member-initial">JC</div>
              <h4>John Camilleri</h4>
              <div className="role">
                Eastern PA Chapter President &amp; Concorso Organizer
              </div>
              <p>
                Primary event contact and lead organizer for planning,
                logistics, and entrant communication.
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-initial">RS</div>
              <h4>Rich Scheller</h4>
              <div className="role">Regional Director</div>
              <p>
                Rich provides regional leadership for the Penn-Jersey Region,
                supporting events across Pennsylvania and New Jersey.
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-initial">ND</div>
              <h4>Neil Dunchus</h4>
              <div className="role">Concorso Coordinator</div>
              <p>
                Neil manages on-site operations and ensures every detail of the
                event day runs seamlessly.
              </p>
            </div>
            <div className="board-member">
              <div className="board-member-initial">MK</div>
              <h4>Mike Kalliotzis</h4>
              <div className="role">Concorso Coordinator</div>
              <p>
                Mike handles participant communications and registration
                coordination, ensuring a smooth experience for every entrant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section section-cream">
        <div className="container">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: "left" }}>
              <h2>2026 Sponsors &amp; Partners</h2>
              <span className="gold-rule gold-rule-left" />
            </div>
            <p>
              Our showfield and hospitality experience are made possible by the
              sponsors and partners below.
            </p>
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
        </div>
      </section>

      {/* Parent Org Link */}
      <section className="section section-cream">
        <div className="container">
          <div className="about-content" style={{ textAlign: "center" }}>
            <h2>Ferrari Club of America</h2>
            <span className="gold-rule" />
            <p>
              The Pennsylvania Concorso Ferrari is organized by the{" "}
              <strong>
                Ferrari Club of America Penn-Jersey Region
              </strong>
              , one of the largest and most active FCA regions in the United
              States. The Penn-Jersey Region serves Ferrari owners and
              enthusiasts across Pennsylvania, New Jersey, and Delaware.
            </p>
            <p style={{ marginTop: "var(--space-xl)" }}>
              <a
                href="https://fca-pennjersey.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Visit fca-pennjersey.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Attend or Enter?</h2>
          <p>
            Register your Ferrari or purchase tickets on the official
            registration page.
          </p>
          <Link href="/register" className="btn btn-gold">
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
