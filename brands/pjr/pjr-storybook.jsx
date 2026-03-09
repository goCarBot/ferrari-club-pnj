// ============================================================================
// FCA PENN-JERSEY REGION — DESIGN SYSTEM STORYBOOK
// Based on brands/pjr/tokens.json
// ============================================================================
//
// CANONICAL SOURCE: ferrari-club-pnj/brands/pjr/pjr-storybook.jsx
//
// Version History:
// - 2026-03-04: Initial creation — 12 sections, full brand reference
//
// ============================================================================

const { useState, useEffect, useRef } = React;

// ============================================================================
// DESIGN TOKENS
// ============================================================================
const T = {
  color: {
    ferrariRed:      '#FF2800',
    ferrariRedLight:  '#FF5333',
    ferrariRedLighter:'#FF7E66',
    ferrariRedDark:   '#CC2000',
    ferrariRedDarker: '#991800',
    fcaNavy:         '#041E42',
    fcaCrimson:      '#862633',
    fcaGold:         '#EAAA00',
    richBlack:       '#0F0F0F',
    charcoal:        '#151515',
    darkGray:        '#2F2F2F',
    midGray:         '#484848',
    steel:           '#6C757D',
    silver:          '#BDC3D0',
    mist:            '#DBDEE5',
    cloud:           '#EEEFF3',
    snow:            '#F7F5F5',
    white:           '#FFFFFF',
    warmOrange:      '#FAA05A',
    alertPink:       '#F0506E',
    successGreen:    '#32D296',
    italianGreen:    '#009246',
    italianRed:      '#CE2B37',
    gialloModena:    '#FCDF03',
  },
  font: {
    heading: "'Archivo', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    body:    "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    nav:     "'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  size: {
    xs:  '0.75rem',
    sm:  '0.875rem',
    base:'1rem',
    lg:  '1.125rem',
    xl:  '1.25rem',
    '2xl':'1.5rem',
    '3xl':'1.875rem',
    '4xl':'2.25rem',
    '5xl':'3rem',
    '6xl':'3.75rem',
  },
  radius: { none:'0', sm:'0.25rem', md:'0.5rem', lg:'1rem', full:'9999px' },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.15)',
  },
};

const ASSETS = {
  logoPrimary:    'https://fca-pennjersey.org/wp-content/themes/ferrari/assets/images/logo.svg',
  logoIntro:      'https://fca-pennjersey.org/assets/images/logo-intro.svg',
  italianStripe:  'https://fca-pennjersey.org/assets/images/italian-stripes.svg',
  favicon:        'https://a.mpcdn.io/ferrari/2022/04/cropped-favicon.png',
  heroMain:       'https://a.mpcdn.io/ferrari/2025/07/IMG_2790-edited.jpeg',
  heroBridge:     'https://a.mpcdn.io/ferrari/2025/06/308-Cali-going-into-Bridge.jpg',
  heroConcorso:   'https://a.mpcdn.io/ferrari/2025/05/IMG_2243.jpeg',
};

// ============================================================================
// BASE CSS
// ============================================================================
const baseCSS = `
  :root {
    --ferrari-red: ${T.color.ferrariRed};
    --ferrari-red-light: ${T.color.ferrariRedLight};
    --ferrari-red-dark: ${T.color.ferrariRedDark};
    --fca-navy: ${T.color.fcaNavy};
    --fca-crimson: ${T.color.fcaCrimson};
    --fca-gold: ${T.color.fcaGold};
    --charcoal: ${T.color.charcoal};
    --snow: ${T.color.snow};
    --white: ${T.color.white};
    --steel: ${T.color.steel};
    --cloud: ${T.color.cloud};
    --mist: ${T.color.mist};
    --mid-gray: ${T.color.midGray};
    --dark-gray: ${T.color.darkGray};
    --italian-green: ${T.color.italianGreen};
    --italian-red: ${T.color.italianRed};
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: ${T.font.body};
    color: ${T.color.darkGray};
    background: ${T.color.cloud};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: ${T.color.ferrariRed};
    color: white;
  }

  img { max-width: 100%; height: auto; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

// ============================================================================
// ITALIAN TRICOLOR STRIPE
// ============================================================================
const ItalianStripe = ({ height = 4, style = {} }) => (
  <div style={{
    display: 'flex', width: '100%', height, flexShrink: 0, ...style,
  }}>
    <div style={{ flex: 1, background: T.color.italianGreen }} />
    <div style={{ flex: 1, background: T.color.white }} />
    <div style={{ flex: 1, background: T.color.italianRed }} />
  </div>
);

// ============================================================================
// SECTION WRAPPER
// ============================================================================
const SectionTitle = ({ title, subtitle }) => (
  <div style={{ marginBottom: 32 }}>
    <h2 style={{
      fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['4xl'],
      color: T.color.fcaNavy, margin: 0, letterSpacing: '-0.02em',
    }}>{title}</h2>
    {subtitle && (
      <p style={{
        fontFamily: T.font.body, fontSize: T.size.lg, color: T.color.steel,
        marginTop: 8, maxWidth: 640, lineHeight: 1.6,
      }}>{subtitle}</p>
    )}
    <ItalianStripe style={{ marginTop: 16, borderRadius: 2, overflow: 'hidden' }} />
  </div>
);

const SubSection = ({ title, children, style = {} }) => (
  <div style={{ marginBottom: 40, ...style }}>
    {title && (
      <h3 style={{
        fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size['2xl'],
        color: T.color.darkGray, marginBottom: 16,
      }}>{title}</h3>
    )}
    {children}
  </div>
);

// ============================================================================
// 1. BRAND OVERVIEW
// ============================================================================
const BrandOverview = () => (
  <div>
    <SectionTitle title="Brand Overview" subtitle="The foundational identity for the Ferrari Club of America, Penn-Jersey Region." />

    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40,
    }}>
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 32,
        boxShadow: T.shadow.md,
      }}>
        <div style={{ fontSize: T.size.sm, fontWeight: 600, color: T.color.ferrariRed, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Brand Name</div>
        <div style={{ fontFamily: T.font.heading, fontSize: T.size['3xl'], fontWeight: 700, color: T.color.fcaNavy }}>Ferrari Club of America</div>
        <div style={{ fontFamily: T.font.heading, fontSize: T.size.xl, fontWeight: 400, color: T.color.steel, marginTop: 4 }}>Penn-Jersey Region</div>
      </div>
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 32,
        boxShadow: T.shadow.md,
      }}>
        <div style={{ fontSize: T.size.sm, fontWeight: 600, color: T.color.ferrariRed, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Tagline</div>
        <div style={{ fontFamily: T.font.heading, fontSize: T.size['3xl'], fontWeight: 700, color: T.color.fcaNavy, fontStyle: 'italic' }}>
          "Cars, Culture, &amp; Community"
        </div>
      </div>
    </div>

    <SubSection title="Brand Description">
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 32,
        boxShadow: T.shadow.sm, fontSize: T.size.lg, lineHeight: 1.8, color: T.color.midGray,
      }}>
        <p style={{ marginBottom: 16 }}>
          The Ferrari Club of America, Penn-Jersey Region (PJR) is the premier regional chapter serving Ferrari enthusiasts across Eastern Pennsylvania, Western Pennsylvania, and New Jersey. Founded on a shared passion for the Prancing Horse, PJR brings together owners, collectors, and admirers through rallies, concours events, social gatherings, and community-driven experiences.
        </p>
        <p>
          Our brand identity reflects the intersection of Italian automotive heritage and American community spirit — prestigious yet approachable, classic yet forward-looking.
        </p>
      </div>
    </SubSection>

    <SubSection title="Tone of Voice">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {['Prestigious', 'Inclusive', 'Passionate', 'Heritage-rooted'].map((trait) => (
          <div key={trait} style={{
            background: T.color.white, borderRadius: T.radius.md, padding: 24,
            boxShadow: T.shadow.sm, textAlign: 'center',
            borderTop: `3px solid ${T.color.ferrariRed}`,
          }}>
            <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.xl, color: T.color.fcaNavy }}>{trait}</div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 24, background: T.color.fcaNavy, borderRadius: T.radius.lg, padding: 32,
        color: T.color.white,
      }}>
        <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.lg, marginBottom: 12, color: T.color.fcaGold }}>Voice Guidelines</div>
        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { do: true, text: 'Use warm, welcoming language for events' },
            { do: true, text: 'Reference heritage and tradition with pride' },
            { do: true, text: 'Be informative without being pretentious' },
            { do: true, text: 'Celebrate the community, not just the cars' },
            { do: false, text: 'Don\'t use overly casual or slang language' },
            { do: false, text: 'Don\'t gatekeep — all Ferrari enthusiasts welcome' },
            { do: false, text: 'Don\'t prioritize exclusivity over inclusivity' },
            { do: false, text: 'Don\'t use generic automotive clichés' },
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 20, height: 20, borderRadius: T.radius.full, flexShrink: 0, marginTop: 2,
                background: item.do ? T.color.successGreen : T.color.alertPink,
                color: 'white', fontSize: 12, fontWeight: 700,
              }}>{item.do ? '✓' : '✕'}</span>
              <span style={{ fontSize: T.size.sm, lineHeight: 1.5 }}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </SubSection>
  </div>
);

// ============================================================================
// 2. LOGO GALLERY
// ============================================================================
const LogoGallery = () => {
  const logos = [
    { label: 'Primary Logo', url: ASSETS.logoPrimary, desc: 'Full club logo with Prancing Horse crest and regional text. Use on headers, official documents, and merchandise.' },
    { label: 'Intro / Splash Logo', url: ASSETS.logoIntro, desc: 'Simplified version for loading screens, intro animations, and large format displays.' },
    { label: 'Favicon', url: ASSETS.favicon, desc: 'Browser tab icon. 32×32 PNG. Prancing Horse silhouette only.', small: true },
  ];

  return (
    <div>
      <SectionTitle title="Logo Gallery" subtitle="Official logo variants for the Penn-Jersey Region. Maintain clear space and minimum sizes." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
        {logos.map((logo) => (
          <div key={logo.label} style={{
            background: T.color.white, borderRadius: T.radius.lg, overflow: 'hidden',
            boxShadow: T.shadow.md,
          }}>
            <div style={{
              padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 180, background: T.color.white,
            }}>
              <img src={logo.url} alt={logo.label} style={{
                maxHeight: logo.small ? 48 : 120, maxWidth: '80%', objectFit: 'contain',
              }} />
            </div>
            <ItalianStripe height={3} />
            <div style={{ padding: 20 }}>
              <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.base, color: T.color.fcaNavy }}>{logo.label}</div>
              <div style={{ fontSize: T.size.sm, color: T.color.steel, marginTop: 4, lineHeight: 1.5 }}>{logo.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <SubSection title="Dark Background">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {logos.map((logo) => (
            <div key={logo.label + '-dark'} style={{
              background: T.color.fcaNavy, borderRadius: T.radius.lg, overflow: 'hidden',
              boxShadow: T.shadow.md,
            }}>
              <div style={{
                padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: 180,
              }}>
                <img src={logo.url} alt={logo.label} style={{
                  maxHeight: logo.small ? 48 : 120, maxWidth: '80%', objectFit: 'contain',
                  filter: logo.small ? 'brightness(0) invert(1)' : 'none',
                }} />
              </div>
              <ItalianStripe height={3} />
              <div style={{ padding: 20 }}>
                <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.base, color: T.color.white }}>{logo.label}</div>
                <div style={{ fontSize: T.size.sm, color: T.color.silver, marginTop: 4 }}>On navy background</div>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Clear Space & Usage Guidelines">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{
            background: T.color.white, borderRadius: T.radius.lg, padding: 32, boxShadow: T.shadow.sm,
          }}>
            <div style={{ fontFamily: T.font.heading, fontWeight: 600, color: T.color.successGreen, marginBottom: 12 }}>✓ Do</div>
            <ul style={{ paddingLeft: 20, color: T.color.midGray, fontSize: T.size.sm, lineHeight: 2 }}>
              <li>Maintain a minimum clear space equal to the height of the "F" in "Ferrari" on all sides</li>
              <li>Use on solid backgrounds (white, navy, or charcoal)</li>
              <li>Scale proportionally — never stretch or distort</li>
              <li>Minimum width: 120px for digital, 1" for print</li>
            </ul>
          </div>
          <div style={{
            background: T.color.white, borderRadius: T.radius.lg, padding: 32, boxShadow: T.shadow.sm,
          }}>
            <div style={{ fontFamily: T.font.heading, fontWeight: 600, color: T.color.alertPink, marginBottom: 12 }}>✕ Don't</div>
            <ul style={{ paddingLeft: 20, color: T.color.midGray, fontSize: T.size.sm, lineHeight: 2 }}>
              <li>Place on busy photographic backgrounds without a solid container</li>
              <li>Alter the colors of the Prancing Horse or crest elements</li>
              <li>Add drop shadows, glows, or 3D effects</li>
              <li>Rotate, crop, or rearrange logo elements</li>
            </ul>
          </div>
        </div>
      </SubSection>

      <SubSection title="Italian Tricolor Stripe">
        <div style={{
          background: T.color.white, borderRadius: T.radius.lg, padding: 32, boxShadow: T.shadow.sm,
        }}>
          <p style={{ color: T.color.midGray, fontSize: T.size.sm, marginBottom: 16 }}>
            The Italian tricolor stripe is a signature decorative element. Use as a thin horizontal rule beneath headers, above footers, or as a separator between major sections.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ fontSize: T.size.xs, color: T.color.steel, marginBottom: 6 }}>4px (default)</div>
              <ItalianStripe height={4} />
            </div>
            <div>
              <div style={{ fontSize: T.size.xs, color: T.color.steel, marginBottom: 6 }}>2px (subtle)</div>
              <ItalianStripe height={2} />
            </div>
            <div>
              <div style={{ fontSize: T.size.xs, color: T.color.steel, marginBottom: 6 }}>8px (bold)</div>
              <ItalianStripe height={8} />
            </div>
          </div>
        </div>
      </SubSection>
    </div>
  );
};

// ============================================================================
// 3. COLOR PALETTE
// ============================================================================
const ColorSwatch = ({ name, hex, large, textDark }) => {
  const [copied, setCopied] = useState(false);
  const isLight = textDark || ['#FFFFFF','#F7F5F5','#EEEFF3','#DBDEE5','#BDC3D0','#FCDF03'].includes(hex);
  return (
    <div
      onClick={() => { navigator.clipboard?.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      style={{
        background: hex, borderRadius: T.radius.md, cursor: 'pointer',
        padding: large ? '32px 24px' : '20px 16px',
        color: isLight ? T.color.darkGray : T.color.white,
        border: isLight ? `1px solid ${T.color.mist}` : 'none',
        transition: 'transform 0.15s, box-shadow 0.15s',
        boxShadow: T.shadow.sm,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = T.shadow.md; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = T.shadow.sm; }}
    >
      <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: large ? T.size.lg : T.size.sm }}>{name}</div>
      <div style={{ fontSize: T.size.xs, opacity: 0.85, marginTop: 4, fontFamily: 'monospace' }}>
        {copied ? 'Copied!' : hex}
      </div>
    </div>
  );
};

const ColorPalette = () => (
  <div>
    <SectionTitle title="Color Palette" subtitle="Click any swatch to copy its hex value. Colors are organized by purpose and hierarchy." />

    <SubSection title="Primary — Ferrari Red">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
        <ColorSwatch name="Red Darker" hex="#991800" large />
        <ColorSwatch name="Red Dark" hex="#CC2000" large />
        <ColorSwatch name="Ferrari Red" hex="#FF2800" large />
        <ColorSwatch name="Red Light" hex="#FF5333" large />
        <ColorSwatch name="Red Lighter" hex="#FF7E66" large />
      </div>
    </SubSection>

    <SubSection title="Secondary">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        <ColorSwatch name="FCA Navy" hex="#041E42" large />
        <ColorSwatch name="FCA Crimson" hex="#862633" large />
        <ColorSwatch name="FCA Gold" hex="#EAAA00" large />
      </div>
    </SubSection>

    <SubSection title="Neutrals">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
        <ColorSwatch name="Rich Black" hex="#0F0F0F" />
        <ColorSwatch name="Charcoal" hex="#151515" />
        <ColorSwatch name="Dark Gray" hex="#2F2F2F" />
        <ColorSwatch name="Mid Gray" hex="#484848" />
        <ColorSwatch name="Steel" hex="#6C757D" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 12 }}>
        <ColorSwatch name="Silver" hex="#BDC3D0" textDark />
        <ColorSwatch name="Mist" hex="#DBDEE5" textDark />
        <ColorSwatch name="Cloud" hex="#EEEFF3" textDark />
        <ColorSwatch name="Snow" hex="#F7F5F5" textDark />
        <ColorSwatch name="White" hex="#FFFFFF" textDark />
      </div>
    </SubSection>

    <SubSection title="Accents">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        <ColorSwatch name="Warm Orange" hex="#FAA05A" large />
        <ColorSwatch name="Alert Pink" hex="#F0506E" large />
        <ColorSwatch name="Success Green" hex="#32D296" large />
      </div>
    </SubSection>

    <SubSection title="Italian Heritage">
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 32, boxShadow: T.shadow.sm,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 24 }}>
          <ColorSwatch name="Italian Green" hex="#009246" large />
          <ColorSwatch name="Italian White" hex="#FFFFFF" large textDark />
          <ColorSwatch name="Italian Red" hex="#CE2B37" large />
          <ColorSwatch name="Rosso Corsa" hex="#FF2800" large />
          <ColorSwatch name="Giallo Modena" hex="#FCDF03" large textDark />
        </div>
        <div style={{ fontSize: T.size.sm, color: T.color.steel, marginBottom: 16 }}>Tricolor Stripe — use as decorative separator</div>
        <ItalianStripe height={12} style={{ borderRadius: 4, overflow: 'hidden' }} />
      </div>
    </SubSection>
  </div>
);

// ============================================================================
// 4. TYPOGRAPHY
// ============================================================================
const Typography = () => {
  const scaleEntries = [
    ['6xl', '3.75rem', 60],
    ['5xl', '3rem', 48],
    ['4xl', '2.25rem', 36],
    ['3xl', '1.875rem', 30],
    ['2xl', '1.5rem', 24],
    ['xl', '1.25rem', 20],
    ['lg', '1.125rem', 18],
    ['base', '1rem', 16],
    ['sm', '0.875rem', 14],
    ['xs', '0.75rem', 12],
  ];

  return (
    <div>
      <SectionTitle title="Typography" subtitle="Three typeface families serve distinct roles: Archivo for headings, Roboto for body, Poppins for navigation." />

      <SubSection title="Font Families">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { name: 'Archivo', role: 'Headings', family: T.font.heading, weights: [400, 600, 700], sample: 'Cars, Culture, & Community' },
            { name: 'Roboto', role: 'Body Text', family: T.font.body, weights: [400, 500, 600], sample: 'The Penn-Jersey Region brings together Ferrari enthusiasts across three states.' },
            { name: 'Poppins', role: 'Navigation', family: T.font.nav, weights: [500, 600], sample: 'Events  About  Gallery  Contact' },
          ].map((f) => (
            <div key={f.name} style={{
              background: T.color.white, borderRadius: T.radius.lg, padding: 28,
              boxShadow: T.shadow.sm, borderTop: `3px solid ${T.color.ferrariRed}`,
            }}>
              <div style={{ fontSize: T.size.xs, fontWeight: 600, color: T.color.ferrariRed, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{f.role}</div>
              <div style={{ fontFamily: f.family, fontWeight: 700, fontSize: T.size['2xl'], color: T.color.fcaNavy, marginBottom: 16 }}>{f.name}</div>
              {f.weights.map((w) => (
                <div key={w} style={{ fontFamily: f.family, fontWeight: w, fontSize: T.size.lg, marginBottom: 8, color: T.color.midGray }}>
                  {w === 400 ? 'Regular' : w === 500 ? 'Medium' : w === 600 ? 'Semibold' : 'Bold'} ({w}) — {f.sample}
                </div>
              ))}
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Type Scale">
        <div style={{
          background: T.color.white, borderRadius: T.radius.lg, padding: 32,
          boxShadow: T.shadow.sm, overflow: 'hidden',
        }}>
          {scaleEntries.map(([label, rem, px]) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'baseline', gap: 16, padding: '12px 0',
              borderBottom: `1px solid ${T.color.cloud}`,
            }}>
              <div style={{ width: 50, fontFamily: 'monospace', fontSize: T.size.xs, color: T.color.steel, flexShrink: 0 }}>{label}</div>
              <div style={{ width: 80, fontFamily: 'monospace', fontSize: T.size.xs, color: T.color.silver, flexShrink: 0 }}>{rem} / {px}px</div>
              <div style={{
                fontFamily: T.font.heading, fontWeight: 600, fontSize: rem, color: T.color.fcaNavy,
                lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                Penn-Jersey Region
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Heading & Body Pairing">
        <div style={{
          background: T.color.white, borderRadius: T.radius.lg, padding: 40, boxShadow: T.shadow.sm,
        }}>
          <h1 style={{ fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['4xl'], color: T.color.fcaNavy, marginBottom: 8, letterSpacing: '-0.02em' }}>
            Annual Concorso d'Eleganza
          </h1>
          <ItalianStripe height={3} style={{ marginBottom: 16, maxWidth: 200, borderRadius: 2, overflow: 'hidden' }} />
          <p style={{ fontFamily: T.font.body, fontSize: T.size.lg, color: T.color.midGray, lineHeight: 1.8, maxWidth: 640 }}>
            Join us for the region's premier judged concours event, showcasing the finest examples of Ferrari craftsmanship spanning seven decades. From vintage 250 GTs to modern hypercars, every era of Maranello's excellence will be on display.
          </p>
          <div style={{ marginTop: 20 }}>
            <span style={{ fontFamily: T.font.nav, fontWeight: 600, fontSize: T.size.sm, color: T.color.ferrariRed, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Learn More →
            </span>
          </div>
        </div>
      </SubSection>
    </div>
  );
};

// ============================================================================
// 5. BUTTONS
// ============================================================================
const Button = ({ variant = 'primary', size = 'md', disabled = false, children }) => {
  const [hovered, setHovered] = useState(false);

  const sizes = {
    sm: { padding: '8px 18px', fontSize: T.size.sm },
    md: { padding: '12px 28px', fontSize: T.size.base },
    lg: { padding: '16px 36px', fontSize: T.size.lg },
  };

  const variants = {
    primary: {
      background: hovered && !disabled ? T.color.ferrariRedDark : T.color.ferrariRed,
      color: T.color.white, border: 'none',
    },
    secondary: {
      background: hovered && !disabled ? '#062A5A' : T.color.fcaNavy,
      color: T.color.white, border: 'none',
    },
    outline: {
      background: hovered && !disabled ? T.color.ferrariRed : 'transparent',
      color: hovered && !disabled ? T.color.white : T.color.ferrariRed,
      border: `2px solid ${T.color.ferrariRed}`,
    },
    ghost: {
      background: hovered && !disabled ? T.color.cloud : 'transparent',
      color: T.color.ferrariRed, border: '2px solid transparent',
    },
    danger: {
      background: hovered && !disabled ? '#D23B5E' : T.color.alertPink,
      color: T.color.white, border: 'none',
    },
  };

  const s = { ...sizes[size], ...variants[variant] };

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...s,
        fontFamily: T.font.nav, fontWeight: 600,
        borderRadius: T.radius.md, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'all 0.2s ease',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        letterSpacing: '0.02em', lineHeight: 1,
      }}
    >
      {children}
    </button>
  );
};

const Buttons = () => (
  <div>
    <SectionTitle title="Buttons" subtitle="Interactive button components with variant, size, and state options." />

    <SubSection title="Variants">
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 32,
        boxShadow: T.shadow.sm, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center',
      }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </SubSection>

    <SubSection title="Sizes">
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 32,
        boxShadow: T.shadow.sm, display: 'flex', gap: 16, alignItems: 'center',
      }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
    </SubSection>

    <SubSection title="States">
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 32,
        boxShadow: T.shadow.sm, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center',
      }}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </div>
      <p style={{ fontSize: T.size.sm, color: T.color.steel, marginTop: 12 }}>
        Hover over buttons to see interactive state changes. Disabled buttons show reduced opacity and a not-allowed cursor.
      </p>
    </SubSection>

    <SubSection title="On Dark Background">
      <div style={{
        background: T.color.fcaNavy, borderRadius: T.radius.lg, padding: 32,
        display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center',
      }}>
        <Button variant="primary">Register Now</Button>
        <Button variant="outline">Learn More</Button>
        <Button variant="ghost">View Gallery</Button>
      </div>
    </SubSection>
  </div>
);

// ============================================================================
// 6. CARDS
// ============================================================================
const Cards = () => {
  const EventCard = ({ date, month, title, desc, image }) => (
    <div style={{
      background: T.color.white, borderRadius: T.radius.lg, overflow: 'hidden',
      boxShadow: T.shadow.md, transition: 'transform 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = T.shadow.xl; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = T.shadow.md; }}
    >
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', top: 16, left: 16, background: T.color.ferrariRed,
          color: T.color.white, borderRadius: T.radius.md, padding: '8px 14px', textAlign: 'center',
          boxShadow: T.shadow.md,
        }}>
          <div style={{ fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['2xl'], lineHeight: 1 }}>{date}</div>
          <div style={{ fontFamily: T.font.nav, fontWeight: 500, fontSize: T.size.xs, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{month}</div>
        </div>
      </div>
      <ItalianStripe height={3} />
      <div style={{ padding: 24 }}>
        <h3 style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.xl, color: T.color.fcaNavy, marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: T.size.sm, color: T.color.steel, lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  );

  const MemberCard = ({ name, role }) => (
    <div style={{
      background: T.color.white, borderRadius: T.radius.lg, padding: 28,
      boxShadow: T.shadow.sm, textAlign: 'center',
      borderBottom: `3px solid ${T.color.ferrariRed}`,
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: T.radius.full, background: T.color.fcaNavy,
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
        color: T.color.fcaGold, fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['2xl'],
      }}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.lg, color: T.color.fcaNavy }}>{name}</div>
      <div style={{ fontSize: T.size.sm, color: T.color.steel, marginTop: 4 }}>{role}</div>
    </div>
  );

  const GalleryCard = ({ image, title }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div style={{
        borderRadius: T.radius.lg, overflow: 'hidden', position: 'relative', cursor: 'pointer',
        boxShadow: T.shadow.md,
      }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={image} alt={title} style={{
          width: '100%', height: 220, objectFit: 'cover',
          transition: 'transform 0.3s', transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered ? 'rgba(4,30,66,0.7)' : 'rgba(4,30,66,0)',
          transition: 'background 0.3s',
          display: 'flex', alignItems: 'flex-end', padding: 20,
        }}>
          <div style={{
            color: T.color.white, fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.lg,
            opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s',
          }}>{title}</div>
        </div>
      </div>
    );
  };

  const SponsorCard = ({ name, tier }) => {
    const tierColors = { gold: T.color.fcaGold, silver: T.color.silver, bronze: '#CD7F32' };
    return (
      <div style={{
        background: T.color.white, borderRadius: T.radius.lg, padding: 24,
        boxShadow: T.shadow.sm, textAlign: 'center',
        borderTop: `4px solid ${tierColors[tier] || T.color.steel}`,
      }}>
        <div style={{
          width: 100, height: 60, background: T.color.cloud, borderRadius: T.radius.md,
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
          fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size.sm, color: T.color.steel,
        }}>LOGO</div>
        <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.base, color: T.color.fcaNavy }}>{name}</div>
        <div style={{
          display: 'inline-block', marginTop: 8, padding: '4px 12px', borderRadius: T.radius.full,
          background: tierColors[tier] + '22', color: tierColors[tier] === T.color.silver ? T.color.midGray : tierColors[tier],
          fontSize: T.size.xs, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>{tier} Sponsor</div>
      </div>
    );
  };

  return (
    <div>
      <SectionTitle title="Cards" subtitle="Reusable card components for events, members, gallery, and sponsors." />

      <SubSection title="Event Card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <EventCard date="15" month="Jun" title="Annual Concorso d'Eleganza" desc="Our signature judged show featuring the finest Ferraris in the region. All marques and eras welcome." image={ASSETS.heroConcorso} />
          <EventCard date="22" month="Jul" title="Covered Bridge Rally" desc="A scenic drive through Pennsylvania's covered bridges. Approximately 120 miles of beautiful back roads." image={ASSETS.heroBridge} />
          <EventCard date="08" month="Sep" title="Summer Social & BBQ" desc="An informal gathering for members and families. Great food, great cars, great company." image={ASSETS.heroMain} />
        </div>
      </SubSection>

      <SubSection title="Member Card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          <MemberCard name="Rich Scheller" role="Regional Director" />
          <MemberCard name="Don Deieso" role="NJ Chapter President" />
          <MemberCard name="John Camilleri" role="Eastern PA President" />
          <MemberCard name="Marc Buzzelli" role="Western PA President" />
        </div>
      </SubSection>

      <SubSection title="Gallery Card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <GalleryCard image={ASSETS.heroMain} title="Summer Concorso 2025" />
          <GalleryCard image={ASSETS.heroBridge} title="Covered Bridge Rally" />
          <GalleryCard image={ASSETS.heroConcorso} title="Annual Show & Shine" />
        </div>
      </SubSection>

      <SubSection title="Sponsor Card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          <SponsorCard name="Ferrari of Philadelphia" tier="gold" />
          <SponsorCard name="Maserati Cherry Hill" tier="gold" />
          <SponsorCard name="Autohaus Detail" tier="silver" />
          <SponsorCard name="Italian Motors" tier="bronze" />
        </div>
      </SubSection>
    </div>
  );
};

// ============================================================================
// 7. NAVIGATION
// ============================================================================
const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ['Events', 'About', 'Gallery', 'Board', 'Contact', 'Join'];

  const DesktopHeader = () => (
    <div style={{ background: T.color.fcaNavy, borderRadius: T.radius.lg, overflow: 'hidden', boxShadow: T.shadow.lg }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src={ASSETS.logoPrimary} alt="FCA PJR" style={{ height: 48 }} />
        </div>
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link} href="#" style={{
              fontFamily: T.font.nav, fontWeight: 500, fontSize: T.size.sm,
              color: T.color.white, textDecoration: 'none', letterSpacing: '0.04em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => e.target.style.color = T.color.ferrariRed}
              onMouseLeave={(e) => e.target.style.color = T.color.white}
            >{link}</a>
          ))}
          <button style={{
            background: T.color.ferrariRed, color: T.color.white, border: 'none',
            padding: '10px 22px', borderRadius: T.radius.md, fontFamily: T.font.nav,
            fontWeight: 600, fontSize: T.size.sm, cursor: 'pointer',
          }}>Members Area</button>
        </nav>
      </div>
      <ItalianStripe height={3} />
    </div>
  );

  const MobileHeader = () => (
    <div style={{ background: T.color.fcaNavy, borderRadius: T.radius.lg, overflow: 'hidden', boxShadow: T.shadow.lg, maxWidth: 400 }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 20px',
      }}>
        <img src={ASSETS.logoPrimary} alt="FCA PJR" style={{ height: 40 }} />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none', border: 'none', color: T.color.white, cursor: 'pointer',
            fontSize: 24, padding: 4, lineHeight: 1,
          }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      <ItalianStripe height={3} />
      {mobileOpen && (
        <div style={{ padding: '8px 0' }}>
          {navLinks.map((link) => (
            <a key={link} href="#" style={{
              display: 'block', padding: '14px 24px',
              fontFamily: T.font.nav, fontWeight: 500, fontSize: T.size.base,
              color: T.color.white, textDecoration: 'none',
              borderBottom: `1px solid rgba(255,255,255,0.08)`,
            }}>{link}</a>
          ))}
          <div style={{ padding: '14px 24px' }}>
            <button style={{
              width: '100%', background: T.color.ferrariRed, color: T.color.white, border: 'none',
              padding: '12px 0', borderRadius: T.radius.md, fontFamily: T.font.nav,
              fontWeight: 600, fontSize: T.size.base, cursor: 'pointer',
            }}>Members Area</button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <SectionTitle title="Navigation" subtitle="Header navigation with desktop and mobile responsive variants." />

      <SubSection title="Desktop Header">
        <DesktopHeader />
      </SubSection>

      <SubSection title="Mobile Header (tap hamburger)">
        <MobileHeader />
      </SubSection>

      <SubSection title="Usage Notes">
        <div style={{
          background: T.color.white, borderRadius: T.radius.lg, padding: 24, boxShadow: T.shadow.sm,
          fontSize: T.size.sm, color: T.color.midGray, lineHeight: 1.8,
        }}>
          <ul style={{ paddingLeft: 20 }}>
            <li>The Italian tricolor stripe sits directly below the navigation bar as a brand signature</li>
            <li>Navigation uses Poppins 500 for link text, Poppins 600 for the CTA button</li>
            <li>Primary CTA ("Members Area") uses Ferrari Red background</li>
            <li>Hover state on nav links transitions to Ferrari Red</li>
            <li>Mobile breakpoint: 768px — switches to hamburger menu</li>
          </ul>
        </div>
      </SubSection>
    </div>
  );
};

// ============================================================================
// 8. HERO SECTIONS
// ============================================================================
const HeroSections = () => (
  <div>
    <SectionTitle title="Hero Sections" subtitle="Full-width hero banners for landing pages and major section intros." />

    <SubSection title="Primary Hero">
      <div style={{
        position: 'relative', borderRadius: T.radius.lg, overflow: 'hidden',
        minHeight: 420, boxShadow: T.shadow.xl,
      }}>
        <img src={ASSETS.heroMain} alt="Ferrari event" style={{
          width: '100%', height: 420, objectFit: 'cover',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(4,30,66,0.85) 0%, rgba(4,30,66,0.5) 60%, transparent 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '48px 56px',
        }}>
          <ItalianStripe height={4} style={{ maxWidth: 120, borderRadius: 2, overflow: 'hidden', marginBottom: 24 }} />
          <h1 style={{
            fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['5xl'],
            color: T.color.white, lineHeight: 1.1, maxWidth: 600, marginBottom: 16,
            letterSpacing: '-0.02em',
          }}>
            Cars, Culture,<br />&amp; Community
          </h1>
          <p style={{
            fontFamily: T.font.body, fontSize: T.size.lg, color: T.color.silver,
            maxWidth: 480, lineHeight: 1.7, marginBottom: 28,
          }}>
            The Ferrari Club of America, Penn-Jersey Region — uniting enthusiasts across Eastern PA, Western PA, and New Jersey since 1962.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Button variant="primary" size="lg">Upcoming Events</Button>
            <Button variant="outline" size="lg">Join the Club</Button>
          </div>
        </div>
      </div>
    </SubSection>

    <SubSection title="Secondary Hero (Darker Overlay)">
      <div style={{
        position: 'relative', borderRadius: T.radius.lg, overflow: 'hidden',
        minHeight: 320, boxShadow: T.shadow.xl,
      }}>
        <img src={ASSETS.heroBridge} alt="Covered bridge rally" style={{
          width: '100%', height: 320, objectFit: 'cover',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(15,15,15,0.9) 0%, rgba(15,15,15,0.6) 60%, rgba(15,15,15,0.3) 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '40px 56px',
        }}>
          <div style={{
            fontFamily: T.font.nav, fontWeight: 600, fontSize: T.size.xs, color: T.color.ferrariRed,
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12,
          }}>Featured Event</div>
          <h2 style={{
            fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['4xl'],
            color: T.color.white, marginBottom: 12, letterSpacing: '-0.02em',
          }}>
            Covered Bridge Rally
          </h2>
          <p style={{
            fontFamily: T.font.body, fontSize: T.size.base, color: T.color.silver,
            maxWidth: 420, lineHeight: 1.7, marginBottom: 24,
          }}>
            120 miles of scenic back roads through Pennsylvania's covered bridges.
          </p>
          <Button variant="primary" size="md">Register Now</Button>
        </div>
      </div>
    </SubSection>
  </div>
);

// ============================================================================
// 9. EVENT LIST
// ============================================================================
const EventList = () => {
  const events = [
    { date: '15', month: 'Jun', day: 'Sunday', title: 'Annual Concorso d\'Eleganza', venue: 'Longwood Gardens, Kennett Square, PA', desc: 'Our flagship judged concours event. Featuring vintage, classic, and modern Ferrari classes. Awards for Best in Show, People\'s Choice, and Best Preservation.' },
    { date: '22', month: 'Jul', day: 'Saturday', title: 'Covered Bridge Rally', venue: 'Start: New Hope, PA → Finish: Lahaska, PA', desc: 'A spirited but unhurried drive through Bucks County\'s covered bridges. Approximately 120 miles. Lunch stop at historic inn.' },
    { date: '08', month: 'Sep', day: 'Saturday', title: 'Summer Social & BBQ', venue: 'Member\'s Private Estate, Princeton, NJ', desc: 'An informal gathering for members and their families. Italian-American BBQ, car display, and live music. All marques welcome.' },
    { date: '19', month: 'Oct', day: 'Saturday', title: 'Fall Foliage Drive', venue: 'Hawk Mountain, Kempton, PA', desc: 'A scenic autumn drive through the Reading Prong mountains. Peak foliage expected. Ends with dinner at a local trattoria.' },
    { date: '07', month: 'Dec', day: 'Saturday', title: 'Holiday Gala & Awards', venue: 'The Merion, Cinnaminson, NJ', desc: 'Annual holiday celebration with awards ceremony, cocktail hour, and seated dinner. Black tie optional. Annual achievement awards presented.' },
  ];

  return (
    <div>
      <SectionTitle title="Event List" subtitle="Chronological event listing pattern with date badges and venue details." />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {events.map((ev, i) => (
          <div key={i} style={{
            display: 'flex', gap: 24, padding: '28px 0',
            borderBottom: i < events.length - 1 ? `1px solid ${T.color.mist}` : 'none',
          }}>
            <div style={{
              width: 72, height: 72, background: T.color.ferrariRed, borderRadius: T.radius.md,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: T.shadow.sm,
            }}>
              <div style={{ fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['2xl'], color: T.color.white, lineHeight: 1 }}>{ev.date}</div>
              <div style={{ fontFamily: T.font.nav, fontWeight: 500, fontSize: T.size.xs, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{ev.month}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
                <h3 style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.xl, color: T.color.fcaNavy }}>{ev.title}</h3>
                <span style={{ fontFamily: T.font.nav, fontSize: T.size.xs, color: T.color.steel }}>{ev.day}</span>
              </div>
              <div style={{ fontFamily: T.font.nav, fontSize: T.size.sm, color: T.color.ferrariRed, fontWeight: 500, marginBottom: 6 }}>{ev.venue}</div>
              <p style={{ fontSize: T.size.sm, color: T.color.steel, lineHeight: 1.6 }}>{ev.desc}</p>
              <a href="#" style={{
                display: 'inline-block', marginTop: 10, fontFamily: T.font.nav, fontWeight: 600,
                fontSize: T.size.sm, color: T.color.ferrariRed, textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >More Info →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// 10. GALLERY GRID
// ============================================================================
const GalleryGrid = () => {
  const images = [
    { url: ASSETS.heroMain, title: 'Concorso 2025' },
    { url: ASSETS.heroBridge, title: 'Covered Bridge Rally' },
    { url: ASSETS.heroConcorso, title: 'Spring Show & Shine' },
    { url: 'https://a.mpcdn.io/ferrari/2025/07/IMG_2790-edited.jpeg', title: 'Summer Gathering' },
    { url: 'https://a.mpcdn.io/ferrari/2025/06/308-Cali-going-into-Bridge.jpg', title: '308 & California' },
    { url: 'https://a.mpcdn.io/ferrari/2025/05/IMG_2243.jpeg', title: 'Paddock Scene' },
  ];

  const GalleryItem = ({ image, span }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        style={{
          borderRadius: T.radius.lg, overflow: 'hidden', position: 'relative',
          cursor: 'pointer', boxShadow: T.shadow.md,
          gridColumn: span ? 'span 2' : 'span 1',
          height: span ? 360 : 240,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={image.url} alt={image.title} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered ? 'linear-gradient(to top, rgba(4,30,66,0.8) 0%, transparent 50%)' : 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)',
          transition: 'background 0.3s',
          display: 'flex', alignItems: 'flex-end', padding: 24,
        }}>
          <div style={{
            color: T.color.white, fontFamily: T.font.heading, fontWeight: 600,
            fontSize: hovered ? T.size.xl : T.size.lg,
            transition: 'all 0.3s',
          }}>{image.title}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SectionTitle title="Gallery Grid" subtitle="Responsive image grid with hover overlay effects. Uses a masonry-inspired layout." />

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      }}>
        <GalleryItem image={images[0]} span />
        <GalleryItem image={images[1]} />
        <GalleryItem image={images[2]} />
        <GalleryItem image={images[3]} />
        <GalleryItem image={images[4]} span />
      </div>

      <div style={{
        marginTop: 24, padding: 20, background: T.color.white, borderRadius: T.radius.md,
        boxShadow: T.shadow.sm, fontSize: T.size.sm, color: T.color.steel, lineHeight: 1.7,
      }}>
        <strong style={{ color: T.color.fcaNavy }}>Usage:</strong> Gallery images should be cropped to a consistent aspect ratio where possible. The grid supports spanning cells for featured images. Hover reveals the image title with a navy gradient overlay.
      </div>
    </div>
  );
};

// ============================================================================
// 11. FOOTER
// ============================================================================
const FooterSection = () => (
  <div>
    <SectionTitle title="Footer" subtitle="Full-width footer with branding, navigation, contact information, and social links." />

    <div style={{
      background: T.color.fcaNavy, borderRadius: T.radius.lg, overflow: 'hidden',
      boxShadow: T.shadow.xl,
    }}>
      <ItalianStripe height={4} />
      <div style={{ padding: '48px 48px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
          {/* Brand */}
          <div>
            <img src={ASSETS.logoPrimary} alt="FCA Penn-Jersey" style={{ height: 56, marginBottom: 20 }} />
            <p style={{ fontSize: T.size.sm, color: T.color.silver, lineHeight: 1.7, maxWidth: 280 }}>
              The Ferrari Club of America, Penn-Jersey Region unites enthusiasts across Eastern PA, Western PA, and New Jersey.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              {['Facebook', 'Instagram', 'YouTube'].map((s) => (
                <a key={s} href="#" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: T.radius.full,
                  background: 'rgba(255,255,255,0.08)', color: T.color.white,
                  fontSize: T.size.xs, textDecoration: 'none', fontWeight: 600,
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = T.color.ferrariRed}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >{s[0]}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.sm, color: T.color.fcaGold, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Quick Links</div>
            {['Events Calendar', 'Photo Gallery', 'Board of Directors', 'Membership', 'Contact Us'].map((link) => (
              <a key={link} href="#" style={{
                display: 'block', color: T.color.silver, textDecoration: 'none',
                fontSize: T.size.sm, padding: '6px 0', transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => e.target.style.color = T.color.white}
                onMouseLeave={(e) => e.target.style.color = T.color.silver}
              >{link}</a>
            ))}
          </div>

          {/* Chapters */}
          <div>
            <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.sm, color: T.color.fcaGold, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Chapters</div>
            {['Eastern PA Chapter', 'Western PA Chapter', 'New Jersey Chapter'].map((ch) => (
              <a key={ch} href="#" style={{
                display: 'block', color: T.color.silver, textDecoration: 'none',
                fontSize: T.size.sm, padding: '6px 0', transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => e.target.style.color = T.color.white}
                onMouseLeave={(e) => e.target.style.color = T.color.silver}
              >{ch}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.sm, color: T.color.fcaGold, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Contact</div>
            <div style={{ fontSize: T.size.sm, color: T.color.silver, lineHeight: 2 }}>
              <div>FCA Penn-Jersey Region</div>
              <div>P.O. Box 1000</div>
              <div>Philadelphia, PA 19103</div>
              <a href="mailto:info@fca-pennjersey.org" style={{ color: T.color.ferrariRedLight, textDecoration: 'none' }}>info@fca-pennjersey.org</a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: `1px solid rgba(255,255,255,0.1)`, marginTop: 40, paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ fontSize: T.size.xs, color: T.color.steel }}>
            © 2026 Ferrari Club of America, Penn-Jersey Region. All rights reserved.
          </div>
          <div style={{ fontSize: T.size.xs, color: T.color.steel }}>
            Ferrari and the Prancing Horse are registered trademarks of Ferrari S.p.A.
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// 12. BOARD MEMBER GRID
// ============================================================================
const BoardMemberGrid = () => {
  const board = [
    { name: 'Rich Scheller', role: 'Regional Director', scope: 'Penn-Jersey Region' },
    { name: 'Don Deieso', role: 'NJ Chapter President', scope: 'New Jersey' },
    { name: 'John Camilleri', role: 'Eastern PA Chapter President', scope: 'Eastern Pennsylvania' },
    { name: 'Marc Buzzelli', role: 'Western PA Chapter President', scope: 'Western Pennsylvania' },
    { name: 'Walter Sliwa', role: 'Regional Treasurer', scope: 'Finance' },
    { name: 'Gary Cohen', role: 'Regional Secretary', scope: 'Administration' },
    { name: 'Ed Narewski', role: 'Regional Chief Judge', scope: 'Concours Events' },
    { name: 'Chris Sondesky', role: 'Communications Chair', scope: 'Media & Outreach' },
    { name: 'Matt Taylor', role: 'Membership Chair', scope: 'Member Relations' },
  ];

  const initials = (name) => name.split(' ').map(n => n[0]).join('');

  const roleColor = (role) => {
    if (role.includes('Director')) return T.color.ferrariRed;
    if (role.includes('President')) return T.color.fcaNavy;
    return T.color.fcaCrimson;
  };

  return (
    <div>
      <SectionTitle title="Board of Directors" subtitle="Leadership of the Penn-Jersey Region, serving the Ferrari community across three states." />

      {/* Director featured card */}
      <div style={{
        background: `linear-gradient(135deg, ${T.color.fcaNavy} 0%, #062A5A 100%)`,
        borderRadius: T.radius.lg, padding: 40, marginBottom: 32,
        display: 'flex', alignItems: 'center', gap: 32, boxShadow: T.shadow.xl,
      }}>
        <div style={{
          width: 100, height: 100, borderRadius: T.radius.full,
          background: T.color.ferrariRed, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: T.color.white, fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['3xl'],
          border: `3px solid ${T.color.fcaGold}`, flexShrink: 0,
        }}>RS</div>
        <div>
          <div style={{ fontFamily: T.font.nav, fontWeight: 600, fontSize: T.size.xs, color: T.color.fcaGold, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Regional Director</div>
          <div style={{ fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size['3xl'], color: T.color.white, marginBottom: 8 }}>Rich Scheller</div>
          <p style={{ fontSize: T.size.base, color: T.color.silver, lineHeight: 1.6 }}>
            Leading the Penn-Jersey Region across Eastern PA, Western PA, and New Jersey. Overseeing regional events, concours judging, and chapter coordination.
          </p>
        </div>
      </div>

      {/* Board grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {board.slice(1).map((member) => (
          <div key={member.name} style={{
            background: T.color.white, borderRadius: T.radius.lg, padding: 28,
            boxShadow: T.shadow.sm, textAlign: 'center',
            borderTop: `3px solid ${roleColor(member.role)}`,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = T.shadow.lg; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = T.shadow.sm; }}
          >
            <div style={{
              width: 64, height: 64, borderRadius: T.radius.full,
              background: roleColor(member.role),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: T.color.white, fontFamily: T.font.heading, fontWeight: 700,
              fontSize: T.size.xl, margin: '0 auto 16px',
            }}>{initials(member.name)}</div>
            <div style={{ fontFamily: T.font.heading, fontWeight: 600, fontSize: T.size.base, color: T.color.fcaNavy, marginBottom: 4 }}>{member.name}</div>
            <div style={{ fontFamily: T.font.nav, fontWeight: 500, fontSize: T.size.sm, color: T.color.ferrariRed, marginBottom: 4 }}>{member.role}</div>
            <div style={{ fontSize: T.size.xs, color: T.color.steel }}>{member.scope}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// SIDEBAR NAVIGATION
// ============================================================================
const SECTIONS = [
  { id: 'brand-overview', label: 'Brand Overview', icon: '◆' },
  { id: 'logo-gallery', label: 'Logo Gallery', icon: '◈' },
  { id: 'color-palette', label: 'Color Palette', icon: '◉' },
  { id: 'typography', label: 'Typography', icon: 'Aa' },
  { id: 'buttons', label: 'Buttons', icon: '▣' },
  { id: 'cards', label: 'Cards', icon: '▤' },
  { id: 'navigation', label: 'Navigation', icon: '☰' },
  { id: 'hero-sections', label: 'Hero Sections', icon: '▬' },
  { id: 'event-list', label: 'Event List', icon: '▸' },
  { id: 'gallery-grid', label: 'Gallery Grid', icon: '▦' },
  { id: 'footer', label: 'Footer', icon: '▭' },
  { id: 'board-members', label: 'Board Members', icon: '●' },
];

const SECTION_COMPONENTS = {
  'brand-overview': BrandOverview,
  'logo-gallery': LogoGallery,
  'color-palette': ColorPalette,
  'typography': Typography,
  'buttons': Buttons,
  'cards': Cards,
  'navigation': Navigation,
  'hero-sections': HeroSections,
  'event-list': EventList,
  'gallery-grid': GalleryGrid,
  'footer': FooterSection,
  'board-members': BoardMemberGrid,
};

// ============================================================================
// MAIN STORYBOOK COMPONENT
// ============================================================================
const PJRStorybook = () => {
  const [activeSection, setActiveSection] = useState('brand-overview');

  const ActiveComponent = SECTION_COMPONENTS[activeSection];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: baseCSS }} />

      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <aside style={{
          width: 260, background: T.color.charcoal, position: 'fixed', top: 0, left: 0,
          height: '100vh', display: 'flex', flexDirection: 'column', zIndex: 100,
          boxShadow: '2px 0 12px rgba(0,0,0,0.3)',
        }}>
          {/* Sidebar Header */}
          <div style={{ padding: '24px 20px 16px', borderBottom: `1px solid ${T.color.darkGray}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <img src={ASSETS.favicon} alt="FCA" style={{ width: 28, height: 28 }} />
              <div>
                <div style={{ fontFamily: T.font.heading, fontWeight: 700, fontSize: T.size.sm, color: T.color.white, lineHeight: 1.2 }}>Penn-Jersey Region</div>
                <div style={{ fontFamily: T.font.nav, fontSize: T.size.xs, color: T.color.steel }}>Design System v1.0</div>
              </div>
            </div>
            <ItalianStripe height={3} style={{ borderRadius: 2, overflow: 'hidden' }} />
          </div>

          {/* Sidebar Nav */}
          <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
            {SECTIONS.map((section) => {
              const isActive = section.id === activeSection;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, width: '100%',
                    padding: '12px 20px', border: 'none', cursor: 'pointer',
                    background: isActive ? T.color.ferrariRed : 'transparent',
                    color: isActive ? T.color.white : T.color.silver,
                    fontFamily: T.font.nav, fontWeight: isActive ? 600 : 500,
                    fontSize: T.size.sm, textAlign: 'left',
                    transition: 'all 0.15s ease',
                    borderLeft: isActive ? `3px solid ${T.color.fcaGold}` : '3px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = T.color.darkGray;
                      e.currentTarget.style.color = T.color.white;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = T.color.silver;
                    }
                  }}
                >
                  <span style={{
                    width: 24, textAlign: 'center', fontSize: section.icon.length > 1 ? T.size.xs : T.size.sm,
                    opacity: isActive ? 1 : 0.6,
                  }}>{section.icon}</span>
                  {section.label}
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div style={{
            padding: '16px 20px', borderTop: `1px solid ${T.color.darkGray}`,
            fontSize: T.size.xs, color: T.color.steel, lineHeight: 1.6,
          }}>
            <div>FCA Penn-Jersey Region</div>
            <div style={{ color: T.color.midGray }}>Cars, Culture, &amp; Community</div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{
          flex: 1, marginLeft: 260, padding: '40px 48px',
          maxWidth: 'calc(100vw - 260px)',
          background: T.color.snow,
          minHeight: '100vh',
        }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <div key={activeSection} style={{ animation: 'fadeIn 0.3s ease' }}>
              {ActiveComponent && <ActiveComponent />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
