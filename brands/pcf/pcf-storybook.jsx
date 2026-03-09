// ============================================================================
// PENNSYLVANIA CONCORSO FERRARI — DESIGN SYSTEM STORYBOOK
// Based on brands/pcf/tokens.json
// ============================================================================
//
// CANONICAL SOURCE: ferrari-club-pnj/brands/pcf/pcf-storybook.jsx
//
// Sub-brand of FCA Penn-Jersey Region. Annual concours d'elegance.
// Open pcf-storybook.html in any browser to view.
//
// Version History:
// - 2026-03-04: Initial creation — 12 sections, full token coverage
//
// ============================================================================

const { useState, useEffect, useRef } = React;

// ============================================================================
// DESIGN TOKENS
// ============================================================================
const tokens = {
  colors: {
    concorsoGold: '#EAAA00',
    concorsoGoldLight: '#F5CC4D',
    concorsoGoldDark: '#C48E00',
    concorsoGoldMuted: '#F9E5A0',
    ferrariRed: '#FF2800',
    fcaCrimson: '#862633',
    deepNavy: '#041E42',
    richBlack: '#0A0A0A',
    charcoal: '#1A1A1A',
    darkGray: '#333333',
    midGray: '#555555',
    warmGray: '#8B8680',
    silver: '#B8B3AC',
    linen: '#EDE8E0',
    cream: '#F5F2ED',
    ivory: '#FAFAF7',
    white: '#FFFFFF',
    emeraldGreen: '#1B5E20',
    champagne: '#F7E7CE',
    burgundy: '#6B1D30',
    italianGreen: '#009246',
    italianRed: '#CE2B37',
    gialloModena: '#FCDF03',
  },
  fonts: {
    display: "'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
    black: 900,
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 4px 12px rgba(0,0,0,0.12)',
    lg: '0 12px 24px rgba(0,0,0,0.15)',
    xl: '0 24px 48px rgba(0,0,0,0.2)',
    glow: '0 0 30px rgba(234,170,0,0.15)',
  },
  radii: {
    sm: 2,
    md: 4,
    lg: 8,
  },
};

const assets = {
  fcaLogo: 'https://img1.wsimg.com/isteam/ip/f36cac53-dcea-4351-a950-68fd5f392826/fcalogo.png',
  heroImage: 'https://a.mpcdn.io/ferrari/2025/05/IMG_2243.jpeg',
  showfield: 'https://a.mpcdn.io/ferrari/2023/05/8n0tU4rG-IMG_4929-Large.jpeg',
  gallery: [
    'https://a.mpcdn.io/ferrari/2024/05/vms6fTeT-IMG_9138-scaled.jpeg',
    'https://a.mpcdn.io/ferrari/2023/05/OmqHrTLn-IMG_4966-Large.jpeg',
    'https://a.mpcdn.io/ferrari/2023/05/8n0tU4rG-IMG_4929-Large.jpeg',
  ],
  sponsorLogos: [
    'https://img1.wsimg.com/isteam/ip/f36cac53-dcea-4351-a950-68fd5f392826/Karosserie Logo from Website.png',
    'https://img1.wsimg.com/isteam/ip/f36cac53-dcea-4351-a950-68fd5f392826/HUB International Transparent.png',
    'https://img1.wsimg.com/isteam/ip/f36cac53-dcea-4351-a950-68fd5f392826/Pocono Sportscar Logo 2023.png',
  ],
};

const event = {
  name: 'Pennsylvania Concorso Ferrari',
  year: 2026,
  date: 'May 17, 2026',
  venue: 'Union League — Liberty Hill Golf Club',
  address: '800 Ridge Pike, Lafayette Hill, PA 19444',
  time: '8:00 AM – 3:00 PM',
  organizer: 'John Camilleri',
};

// ============================================================================
// BASE STYLES
// ============================================================================
const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Open+Sans:wght@300;400;700&display=swap');

  :root {
    --gold: #EAAA00;
    --gold-light: #F5CC4D;
    --gold-dark: #C48E00;
    --gold-muted: #F9E5A0;
    --ferrari-red: #FF2800;
    --fca-crimson: #862633;
    --deep-navy: #041E42;
    --rich-black: #0A0A0A;
    --charcoal: #1A1A1A;
    --dark-gray: #333;
    --mid-gray: #555;
    --warm-gray: #8B8680;
    --silver: #B8B3AC;
    --linen: #EDE8E0;
    --cream: #F5F2ED;
    --ivory: #FAFAF7;
    --champagne: #F7E7CE;
    --italian-green: #009246;
    --italian-red: #CE2B37;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Open Sans', sans-serif;
    color: #333;
    background: #FAFAF7;
    line-height: 1.5;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(24px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes goldPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(234,170,0,0.3); }
    50% { box-shadow: 0 0 20px 4px rgba(234,170,0,0.15); }
  }

  ::selection {
    background: rgba(234,170,0,0.25);
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(234,170,0,0.3); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(234,170,0,0.5); }
`;

// ============================================================================
// COMPONENT: ItalianStripe — Tricolor decorative accent
// ============================================================================
const ItalianStripe = ({ height = 3, style: extraStyle }) => (
  <div style={{
    display: 'flex',
    height,
    width: '100%',
    ...extraStyle,
  }}>
    <div style={{ flex: 1, background: tokens.colors.italianGreen }} />
    <div style={{ flex: 1, background: tokens.colors.white }} />
    <div style={{ flex: 1, background: tokens.colors.italianRed }} />
  </div>
);

// ============================================================================
// COMPONENT: GoldDivider
// ============================================================================
const GoldDivider = ({ width = 60, style: extraStyle }) => (
  <div style={{
    width,
    height: 2,
    background: `linear-gradient(90deg, transparent, ${tokens.colors.concorsoGold}, transparent)`,
    margin: '16px 0',
    ...extraStyle,
  }} />
);

// ============================================================================
// COMPONENT: NavButton
// ============================================================================
const NavButton = ({ isActive, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'block',
        width: '100%',
        padding: '9px 14px',
        marginBottom: 2,
        background: isActive
          ? 'rgba(234,170,0,0.12)'
          : isHovered ? 'rgba(255,255,255,0.04)' : 'transparent',
        border: 'none',
        borderLeft: isActive ? `2px solid ${tokens.colors.concorsoGold}` : '2px solid transparent',
        borderRadius: '0 6px 6px 0',
        color: isActive
          ? tokens.colors.concorsoGold
          : isHovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.6)',
        fontFamily: tokens.fonts.body,
        fontSize: 12,
        fontWeight: isActive ? 700 : 400,
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        letterSpacing: isActive ? 0.3 : 0,
      }}
    >{children}</button>
  );
};

// ============================================================================
// COMPONENT: SectionHeader
// ============================================================================
const SectionHeader = ({ children, subtitle }) => (
  <div style={{ marginBottom: 24 }}>
    <h2 style={{
      fontFamily: tokens.fonts.display,
      fontWeight: 700,
      fontSize: 28,
      color: tokens.colors.deepNavy,
      lineHeight: 1.2,
    }}>{children}</h2>
    {subtitle && (
      <p style={{
        fontFamily: tokens.fonts.body,
        fontSize: 14,
        color: tokens.colors.midGray,
        marginTop: 6,
      }}>{subtitle}</p>
    )}
    <div style={{
      width: 48,
      height: 3,
      background: tokens.colors.concorsoGold,
      marginTop: 12,
      borderRadius: 2,
    }} />
  </div>
);

// ============================================================================
// COMPONENT: SubHeader
// ============================================================================
const SubHeader = ({ children }) => (
  <h3 style={{
    fontFamily: tokens.fonts.display,
    fontWeight: 700,
    fontSize: 18,
    color: tokens.colors.darkGray,
    marginBottom: 12,
    marginTop: 28,
  }}>{children}</h3>
);

// ============================================================================
// COMPONENT: Card
// ============================================================================
const Card = ({ children, title, style: extraStyle, padding = 24 }) => (
  <div style={{
    background: tokens.colors.white,
    borderRadius: tokens.radii.lg,
    border: `1px solid ${tokens.colors.linen}`,
    padding,
    boxShadow: tokens.shadows.sm,
    ...extraStyle,
  }}>
    {title && (
      <h4 style={{
        fontFamily: tokens.fonts.display,
        fontWeight: 700,
        fontSize: 16,
        color: tokens.colors.deepNavy,
        marginBottom: 16,
      }}>{title}</h4>
    )}
    {children}
  </div>
);

// ============================================================================
// COMPONENT: ColorSwatch
// ============================================================================
const ColorSwatch = ({ name, hex, large }) => {
  const [copied, setCopied] = useState(false);
  const isDark = (hex) => {
    const c = hex.replace('#', '');
    const r = parseInt(c.substr(0,2),16), g = parseInt(c.substr(2,2),16), b = parseInt(c.substr(4,2),16);
    return (r * 299 + g * 587 + b * 114) / 1000 < 128;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      onClick={handleCopy}
      style={{
        cursor: 'pointer',
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        border: hex === '#FFFFFF' ? `1px solid ${tokens.colors.linen}` : '1px solid transparent',
        boxShadow: tokens.shadows.sm,
        transition: 'transform 0.2s, box-shadow 0.2s',
        minWidth: large ? 140 : 100,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = tokens.shadows.md; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = tokens.shadows.sm; }}
    >
      <div style={{
        height: large ? 80 : 56,
        background: hex,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {copied && (
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            color: isDark(hex) ? '#fff' : '#333',
            background: isDark(hex) ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.7)',
            padding: '2px 8px',
            borderRadius: 3,
          }}>Copied!</span>
        )}
      </div>
      <div style={{
        padding: '8px 10px',
        background: tokens.colors.white,
      }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontWeight: 700,
          fontSize: 11,
          color: tokens.colors.darkGray,
          marginBottom: 2,
        }}>{name}</div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 10,
          color: tokens.colors.warmGray,
          textTransform: 'uppercase',
        }}>{hex}</div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT: PCFButton
// ============================================================================
const PCFButton = ({ children, variant = 'primary', size = 'md', disabled, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const variants = {
    primary: {
      bg: tokens.colors.concorsoGold,
      hoverBg: tokens.colors.concorsoGoldDark,
      color: tokens.colors.richBlack,
      border: 'none',
    },
    secondary: {
      bg: tokens.colors.deepNavy,
      hoverBg: '#062B56',
      color: tokens.colors.white,
      border: 'none',
    },
    outline: {
      bg: 'transparent',
      hoverBg: 'rgba(234,170,0,0.08)',
      color: tokens.colors.concorsoGold,
      border: `2px solid ${tokens.colors.concorsoGold}`,
    },
    ghost: {
      bg: 'transparent',
      hoverBg: 'rgba(4,30,66,0.05)',
      color: tokens.colors.deepNavy,
      border: 'none',
    },
  };

  const sizes = {
    sm: { padding: '8px 18px', fontSize: 12 },
    md: { padding: '12px 28px', fontSize: 14 },
    lg: { padding: '16px 40px', fontSize: 16 },
  };

  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: s.padding,
        fontSize: s.fontSize,
        fontFamily: tokens.fonts.body,
        fontWeight: 700,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        background: disabled ? tokens.colors.silver : (hovered ? v.hoverBg : v.bg),
        color: disabled ? tokens.colors.warmGray : v.color,
        border: v.border,
        borderRadius: tokens.radii.md,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.25s ease',
        opacity: disabled ? 0.6 : 1,
      }}
    >{children}</button>
  );
};

// ============================================================================
// COMPONENT: FormInput
// ============================================================================
const FormInput = ({ label, type = 'text', placeholder, required }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'block',
        fontFamily: tokens.fonts.body,
        fontWeight: 700,
        fontSize: 12,
        color: tokens.colors.darkGray,
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
      }}>
        {label} {required && <span style={{ color: tokens.colors.ferrariRed }}>*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontFamily: tokens.fonts.body,
            fontSize: 14,
            color: tokens.colors.darkGray,
            background: tokens.colors.ivory,
            border: `1px solid ${focused ? tokens.colors.concorsoGold : tokens.colors.linen}`,
            borderRadius: tokens.radii.md,
            outline: 'none',
            transition: 'border-color 0.2s',
            resize: 'vertical',
          }}
        />
      ) : type === 'select' ? (
        <select
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontFamily: tokens.fonts.body,
            fontSize: 14,
            color: tokens.colors.darkGray,
            background: tokens.colors.ivory,
            border: `1px solid ${focused ? tokens.colors.concorsoGold : tokens.colors.linen}`,
            borderRadius: tokens.radii.md,
            outline: 'none',
            transition: 'border-color 0.2s',
            appearance: 'none',
          }}
        >
          <option value="">{placeholder}</option>
          <option value="concours">Concours (Judged)</option>
          <option value="display">Display Only</option>
          <option value="spectator">Spectator</option>
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontFamily: tokens.fonts.body,
            fontSize: 14,
            color: tokens.colors.darkGray,
            background: tokens.colors.ivory,
            border: `1px solid ${focused ? tokens.colors.concorsoGold : tokens.colors.linen}`,
            borderRadius: tokens.radii.md,
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
        />
      )}
    </div>
  );
};

// ============================================================================
// COMPONENT: GalleryImage
// ============================================================================
const GalleryImage = ({ src, caption }) => {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered ? tokens.shadows.lg : tokens.shadows.sm,
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {!loaded && (
        <div style={{
          position: 'absolute', inset: 0,
          background: tokens.colors.linen,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ color: tokens.colors.warmGray, fontSize: 12 }}>Loading…</span>
        </div>
      )}
      <img
        src={src}
        alt={caption || 'Concorso Ferrari'}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: 280,
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.6s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '32px 16px 12px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}>
        <span style={{
          fontFamily: tokens.fonts.body,
          fontSize: 12,
          fontWeight: 700,
          color: tokens.colors.white,
          letterSpacing: 0.5,
        }}>{caption}</span>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT: ScheduleItem
// ============================================================================
const ScheduleItem = ({ time, title, description, highlight }) => (
  <div style={{
    display: 'flex',
    gap: 20,
    padding: '16px 0',
    borderBottom: `1px solid ${tokens.colors.linen}`,
  }}>
    <div style={{
      minWidth: 90,
      fontFamily: tokens.fonts.body,
      fontWeight: 700,
      fontSize: 13,
      color: highlight ? tokens.colors.concorsoGold : tokens.colors.deepNavy,
    }}>{time}</div>
    <div>
      <div style={{
        fontFamily: tokens.fonts.display,
        fontWeight: 700,
        fontSize: 15,
        color: tokens.colors.darkGray,
        marginBottom: 2,
      }}>{title}</div>
      {description && (
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 13,
          color: tokens.colors.midGray,
        }}>{description}</div>
      )}
    </div>
  </div>
);

// ============================================================================
// COMPONENT: SponsorCard
// ============================================================================
const SponsorCard = ({ name, logo, tier }) => {
  const [hovered, setHovered] = useState(false);
  const tierColors = {
    Gold: tokens.colors.concorsoGold,
    Silver: tokens.colors.silver,
    Bronze: '#CD7F32',
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: tokens.colors.white,
        border: `1px solid ${tokens.colors.linen}`,
        borderRadius: tokens.radii.lg,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        transition: 'all 0.3s ease',
        boxShadow: hovered ? tokens.shadows.md : tokens.shadows.sm,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{
        width: '100%',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={logo}
          alt={name}
          style={{ maxWidth: '80%', maxHeight: 70, objectFit: 'contain' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>
      <div style={{
        fontFamily: tokens.fonts.body,
        fontWeight: 700,
        fontSize: 11,
        color: tokens.colors.darkGray,
        textAlign: 'center',
      }}>{name}</div>
      <span style={{
        fontFamily: tokens.fonts.body,
        fontWeight: 700,
        fontSize: 9,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        color: tierColors[tier] || tokens.colors.warmGray,
        borderTop: `1px solid ${tokens.colors.linen}`,
        paddingTop: 8,
        width: '100%',
        textAlign: 'center',
      }}>{tier} Sponsor</span>
    </div>
  );
};


// ============================================================================
// SECTION: Brand Overview
// ============================================================================
const BrandOverviewSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Pennsylvania's Premier Ferrari Concours d'Elegance">Brand Overview</SectionHeader>

    <div style={{
      background: `linear-gradient(135deg, ${tokens.colors.deepNavy} 0%, ${tokens.colors.richBlack} 100%)`,
      borderRadius: tokens.radii.lg,
      padding: 48,
      marginBottom: 32,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${tokens.colors.italianGreen}, ${tokens.colors.white} 33%, ${tokens.colors.white} 66%, ${tokens.colors.italianRed})`,
      }} />
      <div style={{
        position: 'absolute', top: 20, right: 30, opacity: 0.04, fontSize: 180,
        fontFamily: tokens.fonts.display, fontWeight: 900, color: tokens.colors.concorsoGold,
        lineHeight: 1,
      }}>PCF</div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: tokens.colors.concorsoGold,
          marginBottom: 12,
        }}>Est. FCA Penn-Jersey Region</div>
        <h1 style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 900,
          fontSize: 48,
          color: tokens.colors.white,
          lineHeight: 1.1,
          marginBottom: 16,
        }}>Pennsylvania<br />Concorso Ferrari</h1>
        <GoldDivider width={80} style={{ margin: '20px 0' }} />
        <p style={{
          fontFamily: tokens.fonts.display,
          fontStyle: 'italic',
          fontSize: 18,
          color: tokens.colors.concorsoGoldLight,
          maxWidth: 500,
          lineHeight: 1.6,
        }}>Pennsylvania's Premier Ferrari Concours d'Elegance</p>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
      <Card title="Brand Relationship">
        <p style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: tokens.colors.midGray, lineHeight: 1.7 }}>
          The <strong>Pennsylvania Concorso Ferrari</strong> is an annual event sub-brand of the
          <strong> FCA Penn-Jersey Region</strong>. While the parent brand centers on Ferrari Red and club identity,
          the Concorso uses <span style={{ color: tokens.colors.concorsoGold, fontWeight: 700 }}>Concorso Gold</span> as
          its primary color — evoking the prestige and elegance of a classic concours d'elegance.
        </p>
      </Card>
      <Card title="Tone of Voice">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {['Prestigious', 'Elegant', 'Classic', 'Celebratory'].map(trait => (
            <span key={trait} style={{
              padding: '6px 14px',
              borderRadius: 20,
              background: tokens.colors.champagne,
              fontFamily: tokens.fonts.body,
              fontSize: 12,
              fontWeight: 700,
              color: tokens.colors.deepNavy,
              letterSpacing: 0.3,
            }}>{trait}</span>
          ))}
        </div>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: tokens.colors.midGray, lineHeight: 1.7 }}>
          Classic concours refinement with Italian automotive passion. Communications should feel like
          a luxury event invitation — refined, exclusive, yet warmly welcoming to the Ferrari community.
        </p>
      </Card>
    </div>

    <Card title="Quick Start — Design Tokens">
      <pre style={{
        background: tokens.colors.charcoal,
        color: tokens.colors.concorsoGoldLight,
        padding: 20,
        borderRadius: tokens.radii.md,
        fontFamily: "'Courier New', monospace",
        fontSize: 12,
        lineHeight: 1.6,
        overflowX: 'auto',
      }}>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Open+Sans:wght@300;400;700&display=swap');

:root {
  --concorso-gold: #EAAA00;   /* Primary brand color */
  --deep-navy:     #041E42;   /* Secondary / headings */
  --ferrari-red:   #FF2800;   /* Accent / heritage */
  --cream:         #F5F2ED;   /* Content backgrounds */
  --ivory:         #FAFAF7;   /* Page background */
}`}</pre>
    </Card>
  </div>
);


// ============================================================================
// SECTION: Logo Gallery
// ============================================================================
const LogoGallerySection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="FCA logo lockups and event wordmark compositions">Logo Gallery</SectionHeader>

    <SubHeader>FCA Logo — Light Background</SubHeader>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
      {[
        { bg: tokens.colors.white, border: `1px solid ${tokens.colors.linen}`, label: 'White' },
        { bg: tokens.colors.cream, border: 'none', label: 'Cream' },
        { bg: tokens.colors.ivory, border: 'none', label: 'Ivory' },
      ].map((item, i) => (
        <div key={i} style={{
          background: item.bg,
          border: item.border,
          borderRadius: tokens.radii.lg,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          boxShadow: tokens.shadows.sm,
        }}>
          <img src={assets.fcaLogo} alt="FCA Logo" style={{ maxHeight: 100, width: 'auto' }} />
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: 10,
            color: tokens.colors.warmGray,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}>On {item.label}</span>
        </div>
      ))}
    </div>

    <SubHeader>FCA Logo — Dark Background</SubHeader>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
      {[
        { bg: tokens.colors.deepNavy, label: 'Deep Navy' },
        { bg: tokens.colors.richBlack, label: 'Rich Black' },
        { bg: tokens.colors.charcoal, label: 'Charcoal' },
      ].map((item, i) => (
        <div key={i} style={{
          background: item.bg,
          borderRadius: tokens.radii.lg,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          boxShadow: tokens.shadows.md,
        }}>
          <img src={assets.fcaLogo} alt="FCA Logo" style={{ maxHeight: 100, width: 'auto' }} />
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: 10,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}>On {item.label}</span>
        </div>
      ))}
    </div>

    <SubHeader>Event Wordmark</SubHeader>
    <div style={{
      background: `linear-gradient(135deg, ${tokens.colors.deepNavy}, ${tokens.colors.richBlack})`,
      borderRadius: tokens.radii.lg,
      padding: 48,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: 24,
    }}>
      <ItalianStripe height={2} style={{ position: 'absolute', top: 0, left: 0 }} />
      <div style={{
        fontFamily: tokens.fonts.body,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 5,
        textTransform: 'uppercase',
        color: tokens.colors.concorsoGold,
        marginBottom: 8,
      }}>FCA Penn-Jersey Region Presents</div>
      <div style={{
        fontFamily: tokens.fonts.display,
        fontWeight: 900,
        fontSize: 42,
        color: tokens.colors.white,
        marginBottom: 8,
      }}>Pennsylvania Concorso Ferrari</div>
      <div style={{
        width: 60,
        height: 2,
        background: tokens.colors.concorsoGold,
        margin: '16px auto',
      }} />
      <div style={{
        fontFamily: tokens.fonts.display,
        fontStyle: 'italic',
        fontSize: 16,
        color: tokens.colors.concorsoGoldLight,
      }}>Concours d'Elegance — Est. Penn-Jersey Region</div>
    </div>

    <SubHeader>Suggested Logo Compositions</SubHeader>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <Card title="Horizontal Lockup" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '16px 0' }}>
          <img src={assets.fcaLogo} alt="FCA" style={{ height: 60, width: 'auto' }} />
          <div style={{ width: 1, height: 50, background: tokens.colors.linen }} />
          <div>
            <div style={{ fontFamily: tokens.fonts.display, fontWeight: 900, fontSize: 16, color: tokens.colors.deepNavy }}>
              Pennsylvania Concorso Ferrari
            </div>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 10, color: tokens.colors.warmGray, letterSpacing: 2, textTransform: 'uppercase', marginTop: 2 }}>
              Concours d'Elegance
            </div>
          </div>
        </div>
      </Card>
      <Card title="Stacked Lockup" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '16px 0' }}>
          <img src={assets.fcaLogo} alt="FCA" style={{ height: 60, width: 'auto' }} />
          <div style={{ width: 40, height: 1, background: tokens.colors.concorsoGold }} />
          <div>
            <div style={{ fontFamily: tokens.fonts.display, fontWeight: 900, fontSize: 15, color: tokens.colors.deepNavy }}>
              Pennsylvania Concorso Ferrari
            </div>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 10, color: tokens.colors.warmGray, letterSpacing: 2, textTransform: 'uppercase', marginTop: 2 }}>
              May 17, 2026
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);


// ============================================================================
// SECTION: Color Palette
// ============================================================================
const ColorPaletteSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Complete brand color system organized by role and hierarchy">Color Palette</SectionHeader>

    <SubHeader>Primary — Concorso Gold</SubHeader>
    <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray, marginBottom: 16 }}>
      Gold is the <strong>primary</strong> brand color for the Concorso — distinguishing it from the red-dominant parent FCA brand.
      Use it for CTAs, accents, and brand moments.
    </p>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
      <ColorSwatch name="Concorso Gold" hex="#EAAA00" large />
      <ColorSwatch name="Gold Light" hex="#F5CC4D" large />
      <ColorSwatch name="Gold Dark" hex="#C48E00" large />
      <ColorSwatch name="Gold Muted" hex="#F9E5A0" large />
    </div>

    <SubHeader>Secondary</SubHeader>
    <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray, marginBottom: 16 }}>
      Ferrari heritage and structural colors for depth and contrast.
    </p>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
      <ColorSwatch name="Ferrari Red" hex="#FF2800" />
      <ColorSwatch name="FCA Crimson" hex="#862633" />
      <ColorSwatch name="Deep Navy" hex="#041E42" />
    </div>

    <SubHeader>Neutrals</SubHeader>
    <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray, marginBottom: 16 }}>
      Warm, refined neutrals from rich black to ivory — reflecting the concours tradition of understatement.
    </p>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
      <ColorSwatch name="Rich Black" hex="#0A0A0A" />
      <ColorSwatch name="Charcoal" hex="#1A1A1A" />
      <ColorSwatch name="Dark Gray" hex="#333333" />
      <ColorSwatch name="Mid Gray" hex="#555555" />
      <ColorSwatch name="Warm Gray" hex="#8B8680" />
      <ColorSwatch name="Silver" hex="#B8B3AC" />
      <ColorSwatch name="Linen" hex="#EDE8E0" />
      <ColorSwatch name="Cream" hex="#F5F2ED" />
      <ColorSwatch name="Ivory" hex="#FAFAF7" />
      <ColorSwatch name="White" hex="#FFFFFF" />
    </div>

    <SubHeader>Accents</SubHeader>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
      <ColorSwatch name="Emerald Green" hex="#1B5E20" />
      <ColorSwatch name="Champagne" hex="#F7E7CE" />
      <ColorSwatch name="Burgundy" hex="#6B1D30" />
    </div>

    <SubHeader>Italian Heritage</SubHeader>
    <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray, marginBottom: 16 }}>
      The Italian tricolor and Giallo Modena for decorative heritage accents.
    </p>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
      <ColorSwatch name="Italian Green" hex="#009246" />
      <ColorSwatch name="Italian Red" hex="#CE2B37" />
      <ColorSwatch name="Giallo Modena" hex="#FCDF03" />
    </div>
    <ItalianStripe height={4} style={{ borderRadius: 2, maxWidth: 300, marginTop: 8 }} />
  </div>
);


// ============================================================================
// SECTION: Typography
// ============================================================================
const TypographySection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Elegant serif headings paired with clean sans-serif body text">Typography</SectionHeader>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
      <Card title="Playfair Display — Display / Headings">
        <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray, marginBottom: 20 }}>
          A refined serif typeface for event titles and section headings. Its elegant contrast
          between thick and thin strokes conveys classic sophistication.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { weight: 400, label: 'Regular (400)', size: 28 },
            { weight: 700, label: 'Bold (700)', size: 28 },
            { weight: 900, label: 'Black (900)', size: 28 },
          ].map((item, i) => (
            <div key={i}>
              <div style={{
                fontFamily: tokens.fonts.display,
                fontWeight: item.weight,
                fontSize: item.size,
                color: tokens.colors.deepNavy,
                lineHeight: 1.2,
              }}>Concorso Ferrari</div>
              <div style={{
                fontFamily: tokens.fonts.body,
                fontSize: 10,
                color: tokens.colors.warmGray,
                marginTop: 2,
              }}>{item.label}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Open Sans — Body Text">
        <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray, marginBottom: 20 }}>
          A clean, humanist sans-serif for body copy and UI text. Provides excellent readability
          at all sizes and a modern contrast to the serif headings.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { weight: 300, label: 'Light (300)' },
            { weight: 400, label: 'Regular (400)' },
            { weight: 700, label: 'Bold (700)' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{
                fontFamily: tokens.fonts.body,
                fontWeight: item.weight,
                fontSize: 18,
                color: tokens.colors.darkGray,
                lineHeight: 1.4,
              }}>The art of the automobile, elegantly displayed.</div>
              <div style={{
                fontFamily: tokens.fonts.body,
                fontSize: 10,
                color: tokens.colors.warmGray,
                marginTop: 2,
              }}>{item.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>

    <SubHeader>Type Scale</SubHeader>
    <Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { size: '5rem', label: '7XL — 5rem / 80px', font: 'display', weight: 900 },
          { size: '4rem', label: '6XL — 4rem / 64px', font: 'display', weight: 900 },
          { size: '3rem', label: '5XL — 3rem / 48px', font: 'display', weight: 700 },
          { size: '2.25rem', label: '4XL — 2.25rem / 36px', font: 'display', weight: 700 },
          { size: '1.875rem', label: '3XL — 1.875rem / 30px', font: 'display', weight: 700 },
          { size: '1.5rem', label: '2XL — 1.5rem / 24px', font: 'display', weight: 700 },
          { size: '1.25rem', label: 'XL — 1.25rem / 20px', font: 'body', weight: 400 },
          { size: '1rem', label: 'Base — 1rem / 16px', font: 'body', weight: 400 },
          { size: '0.875rem', label: 'SM — 0.875rem / 14px', font: 'body', weight: 400 },
          { size: '0.75rem', label: 'XS — 0.75rem / 12px', font: 'body', weight: 400 },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 20,
            paddingBottom: 12,
            borderBottom: `1px solid ${tokens.colors.linen}`,
          }}>
            <span style={{
              fontFamily: item.font === 'display' ? tokens.fonts.display : tokens.fonts.body,
              fontWeight: item.weight,
              fontSize: item.size,
              color: tokens.colors.deepNavy,
              lineHeight: 1.2,
              minWidth: 280,
            }}>Concorso</span>
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: 11,
              color: tokens.colors.warmGray,
              whiteSpace: 'nowrap',
            }}>{item.label}</span>
          </div>
        ))}
      </div>
    </Card>

    <SubHeader>Pairing Example</SubHeader>
    <div style={{
      background: tokens.colors.cream,
      borderRadius: tokens.radii.lg,
      padding: 40,
      marginTop: 12,
    }}>
      <h2 style={{
        fontFamily: tokens.fonts.display,
        fontWeight: 900,
        fontSize: 36,
        color: tokens.colors.deepNavy,
        marginBottom: 8,
        lineHeight: 1.15,
      }}>A Celebration of Ferrari Excellence</h2>
      <div style={{
        width: 40,
        height: 2,
        background: tokens.colors.concorsoGold,
        marginBottom: 16,
      }} />
      <p style={{
        fontFamily: tokens.fonts.body,
        fontWeight: 300,
        fontSize: 16,
        color: tokens.colors.midGray,
        lineHeight: 1.8,
        maxWidth: 600,
      }}>
        Join us on the lush showfield of Liberty Hill Golf Club for an unforgettable day celebrating
        the artistry, engineering, and passion of Ferrari. From vintage Dinos to modern hypercars,
        every marque tells a story of Italian excellence.
      </p>
    </div>
  </div>
);


// ============================================================================
// SECTION: Buttons
// ============================================================================
const ButtonsSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Gold-primary CTA buttons in four variants and three sizes">Buttons</SectionHeader>

    <SubHeader>Variants</SubHeader>
    <Card>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 24 }}>
        <PCFButton variant="primary">Register Now</PCFButton>
        <PCFButton variant="secondary">Learn More</PCFButton>
        <PCFButton variant="outline">View Schedule</PCFButton>
        <PCFButton variant="ghost">Contact Us</PCFButton>
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <PCFButton variant="primary" disabled>Disabled</PCFButton>
        <PCFButton variant="secondary" disabled>Disabled</PCFButton>
        <PCFButton variant="outline" disabled>Disabled</PCFButton>
      </div>
    </Card>

    <SubHeader>Sizes</SubHeader>
    <Card>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <PCFButton variant="primary" size="sm">Small</PCFButton>
        <PCFButton variant="primary" size="md">Medium</PCFButton>
        <PCFButton variant="primary" size="lg">Large</PCFButton>
      </div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginTop: 16 }}>
        <PCFButton variant="secondary" size="sm">Small</PCFButton>
        <PCFButton variant="secondary" size="md">Medium</PCFButton>
        <PCFButton variant="secondary" size="lg">Large</PCFButton>
      </div>
    </Card>

    <SubHeader>On Dark Background</SubHeader>
    <div style={{
      background: tokens.colors.deepNavy,
      borderRadius: tokens.radii.lg,
      padding: 32,
    }}>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <PCFButton variant="primary">Register Now</PCFButton>
        <PCFButton variant="outline">View Gallery</PCFButton>
        <button style={{
          padding: '12px 28px',
          fontSize: 14,
          fontFamily: tokens.fonts.body,
          fontWeight: 700,
          letterSpacing: 1.2,
          textTransform: 'uppercase',
          background: 'transparent',
          color: tokens.colors.white,
          border: 'none',
          cursor: 'pointer',
          borderBottom: `2px solid ${tokens.colors.concorsoGold}`,
          borderRadius: 0,
        }}>Learn More</button>
      </div>
    </div>
  </div>
);


// ============================================================================
// SECTION: Cards
// ============================================================================
const CardsSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Event-specific card patterns for key content types">Cards</SectionHeader>

    <SubHeader>Registration Card</SubHeader>
    <div style={{ maxWidth: 420, marginBottom: 24 }}>
      <div style={{
        background: tokens.colors.white,
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        boxShadow: tokens.shadows.md,
        border: `1px solid ${tokens.colors.linen}`,
      }}>
        <div style={{
          background: `linear-gradient(135deg, ${tokens.colors.deepNavy}, ${tokens.colors.charcoal})`,
          padding: '24px 28px',
          position: 'relative',
        }}>
          <ItalianStripe height={2} style={{ position: 'absolute', top: 0, left: 0 }} />
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: tokens.colors.concorsoGold,
            marginBottom: 6,
          }}>2026 Registration</div>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontWeight: 700,
            fontSize: 22,
            color: tokens.colors.white,
          }}>Concours Entry</div>
        </div>
        <div style={{ padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmGray, textTransform: 'uppercase', letterSpacing: 1 }}>Date</div>
              <div style={{ fontFamily: tokens.fonts.display, fontSize: 15, fontWeight: 700, color: tokens.colors.deepNavy }}>May 17, 2026</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmGray, textTransform: 'uppercase', letterSpacing: 1 }}>Entry Fee</div>
              <div style={{ fontFamily: tokens.fonts.display, fontSize: 15, fontWeight: 700, color: tokens.colors.concorsoGold }}>$75.00</div>
            </div>
          </div>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray, lineHeight: 1.6, marginBottom: 20 }}>
            Register your Ferrari for judged concours competition on the showfield at Liberty Hill Golf Club.
          </p>
          <PCFButton variant="primary" size="sm">Register Now</PCFButton>
        </div>
      </div>
    </div>

    <SubHeader>Schedule Card</SubHeader>
    <div style={{ maxWidth: 420, marginBottom: 24 }}>
      <Card>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: tokens.radii.md,
            background: tokens.colors.concorsoGoldMuted,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: tokens.fonts.display, fontWeight: 900, fontSize: 18,
            color: tokens.colors.concorsoGoldDark,
          }}>17</div>
          <div>
            <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 16, color: tokens.colors.deepNavy }}>Saturday, May 17</div>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: tokens.colors.warmGray }}>8:00 AM – 3:00 PM</div>
          </div>
        </div>
        <ScheduleItem time="8:00 AM" title="Gates Open" description="Vehicle staging and registration check-in" />
        <ScheduleItem time="10:00 AM" title="Judging Begins" description="FCA-sanctioned concours evaluation" highlight />
        <ScheduleItem time="12:30 PM" title="Awards Luncheon" description="Catered lunch under the pavilion" />
        <ScheduleItem time="2:00 PM" title="Trophy Presentation" description="Best in Show and class awards" highlight />
      </Card>
    </div>

    <SubHeader>Judge Info Card</SubHeader>
    <div style={{ maxWidth: 320, marginBottom: 24 }}>
      <div style={{
        background: tokens.colors.white,
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        boxShadow: tokens.shadows.sm,
        border: `1px solid ${tokens.colors.linen}`,
        textAlign: 'center',
      }}>
        <div style={{
          height: 6,
          background: `linear-gradient(90deg, ${tokens.colors.concorsoGold}, ${tokens.colors.concorsoGoldDark})`,
        }} />
        <div style={{ padding: 28 }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: tokens.colors.cream,
            border: `2px solid ${tokens.colors.concorsoGoldMuted}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
            fontFamily: tokens.fonts.display, fontWeight: 900, fontSize: 22,
            color: tokens.colors.deepNavy,
          }}>JC</div>
          <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 17, color: tokens.colors.deepNavy }}>
            John Camilleri
          </div>
          <div style={{
            fontFamily: tokens.fonts.body, fontSize: 11, fontWeight: 700,
            color: tokens.colors.concorsoGold, textTransform: 'uppercase',
            letterSpacing: 1.5, marginTop: 4,
          }}>Chief Judge</div>
          <p style={{
            fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.midGray,
            lineHeight: 1.6, marginTop: 12,
          }}>
            FCA-certified concours judge with 20+ years of experience evaluating Ferrari restoration quality.
          </p>
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
      <div>
        <SubHeader>Sponsor Card</SubHeader>
        <SponsorCard
          name="Karosserie"
          logo={assets.sponsorLogos[0]}
          tier="Gold"
        />
      </div>
      <div>
        <SubHeader>Past Winner Card</SubHeader>
        <div style={{
          background: tokens.colors.white,
          borderRadius: tokens.radii.lg,
          overflow: 'hidden',
          boxShadow: tokens.shadows.sm,
          border: `1px solid ${tokens.colors.linen}`,
        }}>
          <img
            src={assets.gallery[0]}
            alt="Past Winner"
            style={{ width: '100%', height: 160, objectFit: 'cover' }}
          />
          <div style={{ padding: 20 }}>
            <div style={{
              fontFamily: tokens.fonts.body, fontSize: 10, fontWeight: 700,
              letterSpacing: 2, textTransform: 'uppercase',
              color: tokens.colors.concorsoGold, marginBottom: 4,
            }}>Best in Show 2024</div>
            <div style={{
              fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 16,
              color: tokens.colors.deepNavy, marginBottom: 4,
            }}>1962 Ferrari 250 GTE</div>
            <div style={{
              fontFamily: tokens.fonts.body, fontSize: 12,
              color: tokens.colors.warmGray,
            }}>Owned by Michael R. — Exceptional concours-level restoration</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// ============================================================================
// SECTION: Hero Section
// ============================================================================
const HeroSectionDemo = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Dramatic full-width hero patterns for the event homepage">Hero Section</SectionHeader>

    <div style={{
      position: 'relative',
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      minHeight: 520,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
    }}>
      <img
        src={assets.heroImage}
        alt="Concorso Ferrari"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(4,30,66,0.6) 0%, rgba(10,10,10,0.85) 100%)',
      }} />
      <ItalianStripe height={3} style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '40px 32px',
        maxWidth: 700,
      }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 5,
          textTransform: 'uppercase',
          color: tokens.colors.concorsoGold,
          marginBottom: 16,
        }}>FCA Penn-Jersey Region Presents</div>
        <h1 style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 900,
          fontSize: 56,
          color: tokens.colors.white,
          lineHeight: 1.05,
          marginBottom: 8,
          textShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}>Pennsylvania<br />Concorso Ferrari</h1>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontStyle: 'italic',
          fontSize: 18,
          color: tokens.colors.concorsoGoldLight,
          marginBottom: 24,
        }}>Concours d'Elegance</div>
        <div style={{
          width: 60,
          height: 2,
          background: tokens.colors.concorsoGold,
          margin: '0 auto 24px',
        }} />
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 15,
          color: 'rgba(255,255,255,0.9)',
          marginBottom: 8,
          fontWeight: 700,
        }}>May 17, 2026</div>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 14,
          color: 'rgba(255,255,255,0.7)',
          marginBottom: 32,
        }}>Union League — Liberty Hill Golf Club, Lafayette Hill, PA</div>
        <PCFButton variant="primary" size="lg">Register Now</PCFButton>
      </div>
    </div>

    <SubHeader>Hero — Showfield Variant</SubHeader>
    <div style={{
      position: 'relative',
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      minHeight: 340,
      display: 'flex',
      alignItems: 'flex-end',
    }}>
      <img
        src={assets.showfield}
        alt="Concorso Showfield"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 30%, rgba(10,10,10,0.85) 100%)',
      }} />
      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '32px 40px',
        width: '100%',
      }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: tokens.colors.concorsoGold,
          marginBottom: 8,
        }}>On the Showfield</div>
        <h2 style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 900,
          fontSize: 36,
          color: tokens.colors.white,
          lineHeight: 1.1,
        }}>Where Ferrari Excellence<br />Meets Pennsylvania Elegance</h2>
      </div>
    </div>
  </div>
);


// ============================================================================
// SECTION: Event Details
// ============================================================================
const EventDetailsSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Date, venue, and schedule components for the event page">Event Details</SectionHeader>

    <SubHeader>Date & Time Display</SubHeader>
    <div style={{
      display: 'flex',
      gap: 20,
      marginBottom: 32,
    }}>
      <div style={{
        background: tokens.colors.white,
        borderRadius: tokens.radii.lg,
        boxShadow: tokens.shadows.md,
        overflow: 'hidden',
        width: 120,
        textAlign: 'center',
        border: `1px solid ${tokens.colors.linen}`,
      }}>
        <div style={{
          background: tokens.colors.concorsoGold,
          padding: '8px 0',
          fontFamily: tokens.fonts.body,
          fontSize: 11,
          fontWeight: 700,
          color: tokens.colors.richBlack,
          textTransform: 'uppercase',
          letterSpacing: 2,
        }}>May 2026</div>
        <div style={{
          padding: '16px 0',
        }}>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontWeight: 900,
            fontSize: 48,
            color: tokens.colors.deepNavy,
            lineHeight: 1,
          }}>17</div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 12,
            color: tokens.colors.warmGray,
            marginTop: 4,
          }}>Saturday</div>
        </div>
      </div>

      <div style={{
        background: tokens.colors.white,
        borderRadius: tokens.radii.lg,
        boxShadow: tokens.shadows.sm,
        padding: 24,
        flex: 1,
        border: `1px solid ${tokens.colors.linen}`,
      }}>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 700,
          fontSize: 20,
          color: tokens.colors.deepNavy,
          marginBottom: 8,
        }}>8:00 AM – 3:00 PM</div>
        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: 14,
          color: tokens.colors.midGray,
          lineHeight: 1.6,
        }}>
          Gates open at 8 AM for vehicle staging. Judging begins at 10 AM.
          Awards ceremony at 2 PM. All guests welcome throughout the day.
        </p>
      </div>
    </div>

    <SubHeader>Venue Card</SubHeader>
    <div style={{
      background: tokens.colors.white,
      borderRadius: tokens.radii.lg,
      boxShadow: tokens.shadows.md,
      overflow: 'hidden',
      border: `1px solid ${tokens.colors.linen}`,
      maxWidth: 540,
      marginBottom: 32,
    }}>
      <div style={{
        height: 180,
        background: `linear-gradient(135deg, ${tokens.colors.deepNavy}, ${tokens.colors.charcoal})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <ItalianStripe height={2} style={{ position: 'absolute', top: 0, left: 0 }} />
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontWeight: 900,
            fontSize: 28,
            color: tokens.colors.white,
            marginBottom: 4,
          }}>Liberty Hill Golf Club</div>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontStyle: 'italic',
            fontSize: 14,
            color: tokens.colors.concorsoGoldLight,
          }}>Home of the Union League</div>
        </div>
      </div>
      <div style={{ padding: 24 }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 14,
          color: tokens.colors.darkGray,
          marginBottom: 8,
        }}>800 Ridge Pike, Lafayette Hill, PA 19444</div>
        <a
          href="https://maps.google.com/?q=800+Ridge+Pike+Lafayette+Hill+PA+19444"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: tokens.fonts.body,
            fontSize: 13,
            fontWeight: 700,
            color: tokens.colors.concorsoGold,
            textDecoration: 'none',
          }}
        >
          View on Google Maps →
        </a>
      </div>
    </div>

    <SubHeader>Schedule Timeline</SubHeader>
    <Card>
      <ScheduleItem time="7:30 AM" title="Early Arrival & Coffee" description="Coffee and pastries for registered entrants" />
      <ScheduleItem time="8:00 AM" title="Gates Open" description="Vehicle staging on the showfield. Registration check-in at the pavilion." />
      <ScheduleItem time="9:00 AM" title="Entrant Meeting" description="Mandatory briefing for all judged entries" />
      <ScheduleItem time="10:00 AM" title="Judging Begins" description="FCA-sanctioned concours evaluation by certified judges" highlight />
      <ScheduleItem time="12:00 PM" title="People's Choice Voting Opens" description="All spectators may cast one vote for their favorite Ferrari" />
      <ScheduleItem time="12:30 PM" title="Awards Luncheon" description="Catered luncheon under the pavilion tent" />
      <ScheduleItem time="2:00 PM" title="Trophy Presentation" description="Best in Show, class awards, and special recognition" highlight />
      <ScheduleItem time="3:00 PM" title="Event Concludes" description="Thank you for celebrating Ferrari excellence with us" />
    </Card>
  </div>
);


// ============================================================================
// SECTION: Gallery Grid
// ============================================================================
const GalleryGridSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Elegant gallery with hover-reveal captions for event photography">Gallery Grid</SectionHeader>

    <SubHeader>Three-Column Grid</SubHeader>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
      <GalleryImage src={assets.gallery[0]} caption="Concorso Showfield 2024" />
      <GalleryImage src={assets.gallery[1]} caption="Ferrari Lineup 2023" />
      <GalleryImage src={assets.gallery[2]} caption="On the Green — Liberty Hill" />
    </div>

    <SubHeader>Feature + Grid Layout</SubHeader>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 32 }}>
      <GalleryImage src={assets.heroImage} caption="Concorso Ferrari 2025 — Best in Show" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <GalleryImage src={assets.gallery[1]} caption="Judging in Progress" />
        <GalleryImage src={assets.gallery[2]} caption="The Showfield" />
      </div>
    </div>

    <SubHeader>Full-Width Cinematic</SubHeader>
    <div style={{
      position: 'relative',
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      height: 360,
    }}>
      <img
        src={assets.showfield}
        alt="Concorso Panorama"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(4,30,66,0.8) 0%, transparent 50%)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: 40,
        zIndex: 1,
      }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: tokens.colors.concorsoGold,
          marginBottom: 8,
        }}>The Showfield</div>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 900,
          fontSize: 32,
          color: tokens.colors.white,
          lineHeight: 1.15,
        }}>Where Every Ferrari<br />Tells a Story</div>
      </div>
    </div>
  </div>
);


// ============================================================================
// SECTION: Sponsor Section
// ============================================================================
const SponsorSectionDemo = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Tiered sponsor display with logo placement guidelines">Sponsor Section</SectionHeader>

    <div style={{
      background: tokens.colors.cream,
      borderRadius: tokens.radii.lg,
      padding: 40,
      textAlign: 'center',
      marginBottom: 32,
    }}>
      <div style={{
        fontFamily: tokens.fonts.body,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 4,
        textTransform: 'uppercase',
        color: tokens.colors.warmGray,
        marginBottom: 8,
      }}>Proudly Supported By</div>
      <div style={{
        fontFamily: tokens.fonts.display,
        fontWeight: 700,
        fontSize: 28,
        color: tokens.colors.deepNavy,
        marginBottom: 8,
      }}>Our Sponsors</div>
      <div style={{
        width: 48,
        height: 2,
        background: tokens.colors.concorsoGold,
        margin: '0 auto 32px',
      }} />

      <div style={{ marginBottom: 32 }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: tokens.colors.concorsoGold,
          marginBottom: 16,
        }}>Gold Sponsors</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40 }}>
          <div style={{
            background: tokens.colors.white,
            borderRadius: tokens.radii.lg,
            padding: '20px 32px',
            boxShadow: tokens.shadows.sm,
            border: `2px solid ${tokens.colors.concorsoGoldMuted}`,
          }}>
            <img src={assets.sponsorLogos[0]} alt="Karosserie" style={{ height: 60, width: 'auto' }} onError={e => { e.target.style.display='none'; }} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: tokens.colors.silver,
          marginBottom: 16,
        }}>Silver Sponsors</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
          <div style={{
            background: tokens.colors.white,
            borderRadius: tokens.radii.lg,
            padding: '16px 24px',
            boxShadow: tokens.shadows.sm,
          }}>
            <img src={assets.sponsorLogos[1]} alt="HUB International" style={{ height: 44, width: 'auto' }} onError={e => { e.target.style.display='none'; }} />
          </div>
        </div>
      </div>

      <div>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: '#CD7F32',
          marginBottom: 16,
        }}>Bronze Sponsors</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <div style={{
            background: tokens.colors.white,
            borderRadius: tokens.radii.md,
            padding: '12px 20px',
            boxShadow: tokens.shadows.sm,
          }}>
            <img src={assets.sponsorLogos[2]} alt="Pocono Sportscar" style={{ height: 36, width: 'auto' }} onError={e => { e.target.style.display='none'; }} />
          </div>
        </div>
      </div>
    </div>

    <SubHeader>Individual Sponsor Cards</SubHeader>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
      <SponsorCard name="Karosserie" logo={assets.sponsorLogos[0]} tier="Gold" />
      <SponsorCard name="HUB International" logo={assets.sponsorLogos[1]} tier="Silver" />
      <SponsorCard name="Pocono Sportscar" logo={assets.sponsorLogos[2]} tier="Bronze" />
    </div>
  </div>
);


// ============================================================================
// SECTION: Registration Form
// ============================================================================
const RegistrationFormSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Elegant registration form with gold accents and Playfair headings">Registration Form</SectionHeader>

    <div style={{
      maxWidth: 600,
      background: tokens.colors.white,
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      boxShadow: tokens.shadows.lg,
      border: `1px solid ${tokens.colors.linen}`,
    }}>
      <div style={{
        background: `linear-gradient(135deg, ${tokens.colors.deepNavy}, ${tokens.colors.charcoal})`,
        padding: '32px 36px',
        position: 'relative',
      }}>
        <ItalianStripe height={3} style={{ position: 'absolute', top: 0, left: 0 }} />
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: tokens.colors.concorsoGold,
          marginBottom: 8,
        }}>2026 Concorso</div>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 900,
          fontSize: 28,
          color: tokens.colors.white,
        }}>Registration</div>
      </div>

      <div style={{ padding: 36 }}>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 700,
          fontSize: 16,
          color: tokens.colors.deepNavy,
          marginBottom: 20,
          paddingBottom: 12,
          borderBottom: `1px solid ${tokens.colors.linen}`,
        }}>Entrant Information</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
          <FormInput label="First Name" placeholder="John" required />
          <FormInput label="Last Name" placeholder="Doe" required />
        </div>
        <FormInput label="Email Address" type="email" placeholder="john@example.com" required />
        <FormInput label="Phone" type="tel" placeholder="(555) 123-4567" />

        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 700,
          fontSize: 16,
          color: tokens.colors.deepNavy,
          marginBottom: 20,
          marginTop: 8,
          paddingBottom: 12,
          borderBottom: `1px solid ${tokens.colors.linen}`,
        }}>Vehicle Information</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
          <FormInput label="Year" placeholder="1962" required />
          <FormInput label="Model" placeholder="250 GTE" required />
        </div>
        <FormInput label="Entry Class" type="select" placeholder="Select entry class" required />
        <FormInput label="Vehicle Description" type="textarea" placeholder="Brief description of your Ferrari, restoration history, notable features…" />

        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <PCFButton variant="primary" size="lg">Submit Registration</PCFButton>
          <PCFButton variant="ghost">Save Draft</PCFButton>
        </div>
      </div>
    </div>
  </div>
);


// ============================================================================
// SECTION: Footer
// ============================================================================
const FooterSection = () => (
  <div style={{ animation: 'fadeIn 0.5s ease' }}>
    <SectionHeader subtitle="Event footer with parent brand attribution and contact details">Footer</SectionHeader>

    <div style={{
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      boxShadow: tokens.shadows.md,
    }}>
      <ItalianStripe height={3} />
      <div style={{
        background: tokens.colors.richBlack,
        padding: '48px 40px 32px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 40,
          marginBottom: 40,
        }}>
          <div>
            <div style={{
              fontFamily: tokens.fonts.display,
              fontWeight: 900,
              fontSize: 22,
              color: tokens.colors.white,
              marginBottom: 8,
            }}>Pennsylvania Concorso Ferrari</div>
            <div style={{
              fontFamily: tokens.fonts.display,
              fontStyle: 'italic',
              fontSize: 14,
              color: tokens.colors.concorsoGoldLight,
              marginBottom: 16,
            }}>Pennsylvania's Premier Ferrari Concours d'Elegance</div>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: 360,
            }}>
              An annual event of the FCA Penn-Jersey Region, celebrating Ferrari heritage,
              craftsmanship, and the passion of the Ferrari community in the Delaware Valley.
            </p>
          </div>

          <div>
            <div style={{
              fontFamily: tokens.fonts.body,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: tokens.colors.concorsoGold,
              marginBottom: 16,
            }}>Event</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'May 17, 2026',
                '8:00 AM – 3:00 PM',
                'Liberty Hill Golf Club',
                'Lafayette Hill, PA',
              ].map((item, i) => (
                <span key={i} style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.6)',
                }}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: tokens.fonts.body,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: tokens.colors.concorsoGold,
              marginBottom: 16,
            }}>Connect</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { text: 'FCA Penn-Jersey Region', href: '#' },
                { text: 'Contact Us', href: '#' },
                { text: 'Sponsorship Inquiries', href: '#' },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}>{item.text}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img
              src={assets.fcaLogo}
              alt="FCA"
              style={{ height: 36, width: 'auto', opacity: 0.7 }}
            />
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: 11,
              color: 'rgba(255,255,255,0.35)',
            }}>A proud event of the FCA Penn-Jersey Region</span>
          </div>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: 11,
            color: 'rgba(255,255,255,0.25)',
          }}>© 2026 FCA Penn-Jersey Region. All rights reserved.</span>
        </div>
      </div>
    </div>
  </div>
);


// ============================================================================
// MAIN STORYBOOK APP
// ============================================================================
function PCFStorybook() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Brand Overview' },
    { id: 'logos', label: 'Logo Gallery' },
    { id: 'colors', label: 'Color Palette' },
    { id: 'typography', label: 'Typography' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'hero', label: 'Hero Section' },
    { id: 'event', label: 'Event Details' },
    { id: 'gallery', label: 'Gallery Grid' },
    { id: 'sponsors', label: 'Sponsor Section' },
    { id: 'registration', label: 'Registration Form' },
    { id: 'footer', label: 'Footer' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'overview': return <BrandOverviewSection />;
      case 'logos': return <LogoGallerySection />;
      case 'colors': return <ColorPaletteSection />;
      case 'typography': return <TypographySection />;
      case 'buttons': return <ButtonsSection />;
      case 'cards': return <CardsSection />;
      case 'hero': return <HeroSectionDemo />;
      case 'event': return <EventDetailsSection />;
      case 'gallery': return <GalleryGridSection />;
      case 'sponsors': return <SponsorSectionDemo />;
      case 'registration': return <RegistrationFormSection />;
      case 'footer': return <FooterSection />;
      default: return <BrandOverviewSection />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: tokens.fonts.body }}>
      <style>{baseStyles}</style>

      {/* Sidebar */}
      <nav style={{
        width: 240,
        background: `linear-gradient(180deg, ${tokens.colors.deepNavy} 0%, #021530 100%)`,
        padding: '0 0 20px',
        color: '#fff',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
        zIndex: 100,
      }}>
        <ItalianStripe height={3} />

        <div style={{ padding: '24px 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{
              background: tokens.colors.white,
              borderRadius: 8,
              padding: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src={assets.fcaLogo}
                alt="FCA"
                style={{ height: 30, width: 'auto', display: 'block' }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span style="font-size:10px;font-weight:900;color:#041E42;">FCA</span>';
                }}
              />
            </div>
            <div>
              <div style={{
                fontFamily: tokens.fonts.display,
                fontWeight: 700,
                fontSize: 15,
                color: tokens.colors.white,
                lineHeight: 1.15,
              }}>Concorso<br />Ferrari</div>
            </div>
          </div>
          <div style={{
            fontSize: 9,
            color: tokens.colors.concorsoGold,
            textTransform: 'uppercase',
            letterSpacing: 3,
            fontWeight: 700,
          }}>Design System</div>
        </div>

        <div style={{ padding: '0 12px' }}>
          {sections.map(section => (
            <NavButton
              key={section.id}
              isActive={activeSection === section.id}
              onClick={() => setActiveSection(section.id)}
            >{section.label}</NavButton>
          ))}
        </div>

        <div style={{
          margin: '28px 16px 0',
          padding: 14,
          background: 'rgba(234,170,0,0.06)',
          border: '1px solid rgba(234,170,0,0.1)',
          borderRadius: 6,
          fontSize: 9,
          color: 'rgba(255,255,255,0.4)',
        }}>
          <div style={{ fontWeight: 700, marginBottom: 4, color: tokens.colors.concorsoGold }}>Version 1.0.0</div>
          Pennsylvania Concorso Ferrari<br />
          FCA Penn-Jersey Region<br />
          Based on brands/pcf/tokens.json
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        marginLeft: 240,
        flex: 1,
        padding: 40,
        background: tokens.colors.ivory,
        minHeight: '100vh',
      }}>
        {renderSection()}
      </main>
    </div>
  );
}
