import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Link from "next/link";
import MobileNav from "./components/MobileNav";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pennsylvania Concorso Ferrari — Penn-Jersey Region",
    template: "%s | Pennsylvania Concorso Ferrari",
  },
  description:
    "The 2026 Pennsylvania Concorso Ferrari — Pennsylvania's premier Ferrari-only Concours d'Elegance, presented by the Ferrari Club of America Penn-Jersey Region. Sunday, May 17, 2026 at Union League Liberty Hill.",
  keywords: [
    "Ferrari",
    "Concorso",
    "Concours d'Elegance",
    "FCA",
    "Penn-Jersey Region",
    "Pennsylvania",
    "car show",
    "Union League Liberty Hill",
  ],
  icons: {
    icon: "https://img1.wsimg.com/isteam/ip/f36cac53-dcea-4351-a950-68fd5f392826/favicon/281eaa05-84f8-46da-8792-7850359ed1ba.jpeg",
  },
  openGraph: {
    title: "Pennsylvania Concorso Ferrari 2026",
    description:
      "Pennsylvania's premier Ferrari-only Concours d'Elegance. Sunday, May 17, 2026 at Union League Liberty Hill, Lafayette Hill, PA.",
    type: "website",
    locale: "en_US",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/register", label: "Register" },
  { href: "/sponsors", label: "Sponsors" },
] as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${openSans.variable}`}>
      <body>
        {/* Italian Tricolor Stripe */}
        <div className="tricolor tricolor-thin">
          <span className="green" />
          <span className="white" />
          <span className="red" />
        </div>

        {/* Header */}
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="header-brand">
              <span className="header-wordmark">
                Pennsylvania Concorso Ferrari
                <small>Ferrari Club of America &middot; Penn-Jersey Region</small>
              </span>
            </Link>
            <nav className="desktop-nav">
              <ul className="header-nav">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <MobileNav links={NAV_LINKS} />
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Pre-footer Tricolor */}
        <div className="tricolor tricolor-thin">
          <span className="green" />
          <span className="white" />
          <span className="red" />
        </div>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-brand">
                <h3>Pennsylvania Concorso Ferrari</h3>
                <p>
                  A Ferrari Club of America Penn-Jersey Region Event.
                  Pennsylvania&apos;s premier Ferrari-only Concours
                  d&apos;Elegance, celebrating the art and heritage of Ferrari.
                </p>
              </div>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-links footer-contact">
                <h4>Contact</h4>
                <p>John Camilleri</p>
                <p>
                  <a href="mailto:jcamilleri@comcast.net">jcamilleri@comcast.net</a>
                </p>
                <p>
                  <a href="tel:+16103294444">610-329-4444</a>
                </p>
                <p style={{ marginTop: "var(--space-md)" }}>
                  <a
                    href="https://fca-pennjersey.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fca-pennjersey.org
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              <span>&copy; 2026 Pennsylvania Concorso Ferrari. All rights reserved.</span>
              <span>Ferrari Club of America &middot; Penn-Jersey Region</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
