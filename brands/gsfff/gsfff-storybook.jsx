// ============================================================================
// GARDEN STATE FERRARI FALL FESTIVAL — DESIGN SYSTEM STORYBOOK
// Brand storybook for the annual autumn FCA concours in New Jersey
// Based on tokens.json — follows the CarBot storybook architecture
// ============================================================================

const { useState, useEffect, useRef } = React;

// ============================================================================
// DESIGN TOKENS
// ============================================================================
const tokens = {
  colors: {
    // Primary — Autumn Sage
    autumnSage: '#86A862',
    autumnSageLight: '#A3C080',
    autumnSageDark: '#5E7A42',
    autumnSageMuted: '#C8D9B0',
    // Secondary — Reds
    ferrariRed: '#B40C1A',
    burnishedRed: '#991919',
    terraCotta: '#7F4533',
    // Neutrals
    forestBlack: '#18100E',
    darkEarth: '#27331A',
    charcoal: '#2A2A2A',
    slate: '#475767',
    warmStone: '#8B8680',
    driftwood: '#B8997A',
    sandstone: '#D5D0CB',
    parchment: '#EDE8E0',
    cream: '#F5F2ED',
    white: '#FFFFFF',
    // Accents
    caramel: '#BD8158',
    brickRose: '#BC7873',
    steelBlue: '#7996AF',
    skyBlue: '#96D2FB',
    mauve: '#B180AE',
    // Seasonal
    autumnGold: '#DAA520',
    burntSienna: '#E97451',
    amberHarvest: '#FFBF00',
    deepForest: '#1B4332',
    copperLeaf: '#B87333',
    // Heritage
    italianGreen: '#009246',
    italianRed: '#CE2B37',
    gialloModena: '#FCDF03',
  },
  fonts: {
    display: "'Libre Baskerville', Georgia, 'Times New Roman', serif",
    body: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  fontWeights: { light: 300, regular: 400, bold: 700 },
  shadows: {
    sm: '0 2px 4px rgba(24,16,14,0.06)',
    md: '0 4px 12px rgba(24,16,14,0.1)',
    lg: '0 12px 24px rgba(24,16,14,0.14)',
    xl: '0 24px 48px rgba(24,16,14,0.18)',
    warmGlow: '0 0 30px rgba(218,165,32,0.12)',
  },
  radii: { sm: 4, md: 8, lg: 12, full: 9999 },
};

const images = {
  concorsoLogo: 'https://img1.wsimg.com/isteam/ip/3b5fedd9-acd8-46bb-993a-0da2be8f0a27/FCA%20Concorso%20Logo%20for%20Trophy.png',
  clubHeader: 'https://img1.wsimg.com/isteam/ip/3b5fedd9-acd8-46bb-993a-0da2be8f0a27/Club%20Main%20Header.jpg',
  hero2025: 'https://a.mpcdn.io/ferrari/2025/09/IMG_1316-scaled.jpg',
  hero2024: 'https://a.mpcdn.io/ferrari/2024/09/IMG_0553-scaled.jpeg',
  hero2023: 'https://a.mpcdn.io/ferrari/2023/10/Exterior-Ferrari-CNJ-scaled.jpg',
};

// ============================================================================
// BASE STYLES
// ============================================================================
const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

  :root {
    --sage: #86A862;
    --sage-light: #A3C080;
    --sage-dark: #5E7A42;
    --sage-muted: #C8D9B0;
    --ferrari-red: #B40C1A;
    --deep-forest: #1B4332;
    --autumn-gold: #DAA520;
    --copper-leaf: #B87333;
    --parchment: #EDE8E0;
    --cream: #F5F2ED;
    --forest-black: #18100E;
    --charcoal: #2A2A2A;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: #2A2A2A;
    background: #F5F2ED;
    line-height: 1.5;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes leafFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50%      { transform: translateY(-6px) rotate(5deg); }
  }

  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes warmPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(134,168,98,0.3); }
    50%      { box-shadow: 0 0 20px 4px rgba(134,168,98,0.15); }
  }

  ::selection {
    background: rgba(134,168,98,0.3);
    color: #18100E;
  }
`;

// ============================================================================
// DECORATIVE: Leaf SVG motif
// ============================================================================
const LeafIcon = ({ size = 18, color = tokens.colors.autumnSage, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.16 20C12.52 20 17.93 14.91 19.77 7.41L20.78 3L16.37 4.01C12.59 4.89 9.65 7.11 8.07 10.07" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LeafDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${tokens.colors.autumnSageMuted}, transparent)` }} />
    <LeafIcon size={20} color={tokens.colors.autumnSageMuted} />
    <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${tokens.colors.autumnSageMuted}, transparent)` }} />
  </div>
);

// ============================================================================
// COMPONENT: NavButton (sidebar)
// ============================================================================
const NavButton = ({ isActive, onClick, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        width: '100%',
        padding: '10px 14px',
        marginBottom: 3,
        background: isActive
          ? 'rgba(134,168,98,0.18)'
          : hovered ? 'rgba(255,255,255,0.06)' : 'transparent',
        border: 'none',
        borderLeft: isActive ? `3px solid ${tokens.colors.autumnGold}` : '3px solid transparent',
        borderRadius: '0 6px 6px 0',
        color: isActive ? tokens.colors.autumnGold : hovered ? '#fff' : 'rgba(255,255,255,0.65)',
        fontFamily: tokens.fonts.body,
        fontSize: 13,
        fontWeight: isActive ? 600 : 400,
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >{children}</button>
  );
};

// ============================================================================
// COMPONENT: SectionHeader
// ============================================================================
const SectionHeader = ({ children, icon }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: tokens.fonts.display,
    fontWeight: 700,
    fontSize: 14,
    color: tokens.colors.deepForest,
    letterSpacing: 0.5,
    marginBottom: 14,
    marginTop: 20,
    paddingBottom: 8,
    borderBottom: `2px solid ${tokens.colors.autumnSage}`,
  }}>
    {icon && <span style={{ fontSize: 16 }}>{icon}</span>}
    <span>{children}</span>
  </div>
);

// ============================================================================
// COMPONENT: SectionHero (page-level hero for each section)
// ============================================================================
const SectionHero = ({ title, subtitle }) => (
  <section style={{ marginBottom: 24 }}>
    <h1 style={{
      fontFamily: tokens.fonts.display,
      fontWeight: 700,
      fontSize: 28,
      color: tokens.colors.deepForest,
      marginBottom: 6,
      lineHeight: 1.25,
    }}>{title}</h1>
    {subtitle && (
      <p style={{
        fontFamily: tokens.fonts.body,
        fontSize: 15,
        color: tokens.colors.slate,
        lineHeight: 1.6,
      }}>{subtitle}</p>
    )}
  </section>
);

// ============================================================================
// COMPONENT: Card (simple)
// ============================================================================
const SimpleCard = ({ title, children, style: extraStyle = {} }) => (
  <div style={{
    background: tokens.colors.white,
    borderRadius: tokens.radii.lg,
    padding: 24,
    boxShadow: tokens.shadows.sm,
    border: `1px solid ${tokens.colors.sandstone}`,
    ...extraStyle,
  }}>
    {title && (
      <h3 style={{
        fontFamily: tokens.fonts.display,
        fontWeight: 700,
        fontSize: 16,
        color: tokens.colors.deepForest,
        marginBottom: 10,
      }}>{title}</h3>
    )}
    <div style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: tokens.colors.charcoal, lineHeight: 1.6 }}>
      {children}
    </div>
  </div>
);

// ============================================================================
// COMPONENT: ColorSwatch
// ============================================================================
const ColorSwatch = ({ name, hex, large = false }) => {
  const [copied, setCopied] = useState(false);
  const isLight = (hex) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return (r*299 + g*587 + b*114) / 1000 > 140;
  };
  return (
    <div
      onClick={() => { navigator.clipboard?.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      style={{
        cursor: 'pointer',
        borderRadius: tokens.radii.md,
        overflow: 'hidden',
        boxShadow: tokens.shadows.sm,
        border: `1px solid ${tokens.colors.sandstone}`,
        transition: 'transform 0.2s, box-shadow 0.2s',
        width: large ? 140 : 110,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = tokens.shadows.md; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = tokens.shadows.sm; }}
    >
      <div style={{
        height: large ? 72 : 52,
        background: hex,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {copied && (
          <span style={{
            fontSize: 10,
            fontWeight: 600,
            color: isLight(hex) ? tokens.colors.charcoal : '#fff',
            background: isLight(hex) ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
            padding: '2px 8px',
            borderRadius: 4,
          }}>Copied!</span>
        )}
      </div>
      <div style={{ padding: '8px 10px', background: tokens.colors.white }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontWeight: 600,
          fontSize: 11,
          color: tokens.colors.charcoal,
          marginBottom: 2,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>{name}</div>
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 10,
          color: tokens.colors.warmStone,
        }}>{hex}</div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENT: Button
// ============================================================================
const Button = ({ children, variant = 'primary', size = 'md', disabled = false, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const variants = {
    primary:   { bg: tokens.colors.autumnSage, hoverBg: tokens.colors.autumnSageDark, color: '#fff', border: 'none' },
    secondary: { bg: tokens.colors.deepForest, hoverBg: '#163b2a', color: '#fff', border: 'none' },
    accent:    { bg: tokens.colors.autumnGold, hoverBg: '#c29318', color: tokens.colors.forestBlack, border: 'none' },
    outline:   { bg: 'transparent', hoverBg: 'rgba(134,168,98,0.08)', color: tokens.colors.autumnSage, border: `2px solid ${tokens.colors.autumnSage}` },
    ghost:     { bg: 'transparent', hoverBg: 'rgba(134,168,98,0.08)', color: tokens.colors.autumnSageDark, border: 'none' },
    ferrari:   { bg: tokens.colors.ferrariRed, hoverBg: tokens.colors.burnishedRed, color: '#fff', border: 'none' },
  };

  const sizes = {
    sm: { padding: '8px 16px',  fontSize: 12 },
    md: { padding: '12px 24px', fontSize: 14 },
    lg: { padding: '16px 36px', fontSize: 16 },
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
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: s.padding,
        fontSize: s.fontSize,
        fontFamily: tokens.fonts.body,
        fontWeight: 600,
        color: disabled ? tokens.colors.warmStone : v.color,
        background: disabled ? tokens.colors.sandstone : (hovered ? v.hoverBg : v.bg),
        border: v.border,
        borderRadius: tokens.radii.md,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        letterSpacing: 0.3,
        opacity: disabled ? 0.6 : 1,
      }}
    >{children}</button>
  );
};

// ============================================================================
// COMPONENT: Input
// ============================================================================
const Input = ({ label, placeholder, type = 'text', error, required }) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <label style={{
        display: 'block',
        fontFamily: tokens.fonts.display,
        fontWeight: 400,
        fontSize: 13,
        color: tokens.colors.deepForest,
        marginBottom: 6,
      }}>
        {label}{required && <span style={{ color: tokens.colors.ferrariRed, marginLeft: 2 }}>*</span>}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '12px 14px',
        fontSize: 14,
        fontFamily: tokens.fonts.body,
        border: `1px solid ${error ? tokens.colors.ferrariRed : tokens.colors.sandstone}`,
        borderRadius: tokens.radii.md,
        background: tokens.colors.white,
        color: tokens.colors.charcoal,
        outline: 'none',
        transition: 'border 0.2s',
      }}
      onFocus={e => { e.target.style.borderColor = tokens.colors.autumnSage; e.target.style.boxShadow = `0 0 0 3px rgba(134,168,98,0.15)`; }}
      onBlur={e => { e.target.style.borderColor = tokens.colors.sandstone; e.target.style.boxShadow = 'none'; }}
    />
    {error && <div style={{ fontSize: 12, color: tokens.colors.ferrariRed, marginTop: 4 }}>{error}</div>}
  </div>
);

// ============================================================================
// COMPONENT: Select
// ============================================================================
const Select = ({ label, options = [], required }) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <label style={{
        display: 'block',
        fontFamily: tokens.fonts.display,
        fontWeight: 400,
        fontSize: 13,
        color: tokens.colors.deepForest,
        marginBottom: 6,
      }}>
        {label}{required && <span style={{ color: tokens.colors.ferrariRed, marginLeft: 2 }}>*</span>}
      </label>
    )}
    <select style={{
      width: '100%',
      padding: '12px 14px',
      fontSize: 14,
      fontFamily: tokens.fonts.body,
      border: `1px solid ${tokens.colors.sandstone}`,
      borderRadius: tokens.radii.md,
      background: tokens.colors.white,
      color: tokens.colors.charcoal,
      outline: 'none',
      appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23475767' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
    }}>
      {options.map((o, i) => <option key={i} value={o.value || o}>{o.label || o}</option>)}
    </select>
  </div>
);

// ============================================================================
// COMPONENT: Badge
// ============================================================================
const Badge = ({ children, variant = 'sage' }) => {
  const variants = {
    sage:    { bg: tokens.colors.autumnSage,  color: '#fff' },
    gold:    { bg: tokens.colors.autumnGold,  color: tokens.colors.forestBlack },
    red:     { bg: tokens.colors.ferrariRed,  color: '#fff' },
    copper:  { bg: tokens.colors.copperLeaf,  color: '#fff' },
    forest:  { bg: tokens.colors.deepForest,  color: '#fff' },
    outline: { bg: 'transparent', color: tokens.colors.autumnSage, border: `1px solid ${tokens.colors.autumnSage}` },
  };
  const v = variants[variant] || variants.sage;
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: tokens.radii.full,
      background: v.bg,
      color: v.color,
      border: v.border || 'none',
      fontFamily: tokens.fonts.body,
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 0.3,
    }}>{children}</span>
  );
};

// ============================================================================
// SECTION: Brand Overview
// ============================================================================
const BrandOverviewSection = () => (
  <div>
    <SectionHero
      title="Garden State Ferrari Fall Festival"
      subtitle="New Jersey's Premier Ferrari Fall Celebration — a seasonal sub-brand of FCA Penn-Jersey Region"
    />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
      {[
        { value: '6', label: 'Color Groups' },
        { value: '2', label: 'Typefaces' },
        { value: '12', label: 'Sections' },
        { value: '1.0', label: 'Version' },
      ].map((item, i) => (
        <div key={i} style={{
          background: tokens.colors.white,
          borderRadius: tokens.radii.md,
          padding: 16,
          textAlign: 'center',
          boxShadow: tokens.shadows.sm,
          borderTop: `3px solid ${tokens.colors.autumnSage}`,
        }}>
          <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 28, color: tokens.colors.deepForest }}>{item.value}</div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: tokens.colors.slate, marginTop: 4 }}>{item.label}</div>
        </div>
      ))}
    </div>

    <SectionHeader icon="🍂">Brand Identity</SectionHeader>
    <SimpleCard title="About the Festival">
      The <strong>Garden State Ferrari Fall Festival</strong> is the annual autumn concours and celebration
      of the FCA Penn-Jersey Region, held each September in New Jersey. It brings together Ferrari
      enthusiasts for a day of exhibition, camaraderie, and the shared passion for the Prancing Horse
      — all wrapped in the warmth of the Northeast fall season.
      <br /><br />
      <em style={{ color: tokens.colors.autumnSageDark }}>"New Jersey's Premier Ferrari Fall Celebration"</em>
    </SimpleCard>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
      <SimpleCard title="Seasonal Identity">
        Sage green is our primary color — drawn from autumn gardens and New Jersey's verdant
        landscape. The warm palette of golds, coppers, and siennas evokes the Northeast fall.
        Libre Baskerville serif headings give warmth and tradition to our festival voice.
      </SimpleCard>
      <SimpleCard title="Parent Brand Relationship">
        GSFFF operates under the FCA Penn-Jersey Region — one of the most active Ferrari Club
        of America regional chapters. The event leverages PJR's heritage while maintaining
        its own seasonal, celebratory identity.
      </SimpleCard>
    </div>

    <LeafDivider />

    <SectionHeader icon="🎯">Tone of Voice</SectionHeader>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
      {['Celebratory', 'Warm', 'Community-Driven', 'Seasonal'].map((trait, i) => (
        <div key={i} style={{
          background: `linear-gradient(135deg, ${tokens.colors.cream}, ${tokens.colors.parchment})`,
          borderRadius: tokens.radii.md,
          padding: 16,
          textAlign: 'center',
          border: `1px solid ${tokens.colors.sandstone}`,
        }}>
          <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 15, color: tokens.colors.deepForest }}>{trait}</div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: 20 }}>
      <SectionHeader icon="📋">Quick Start — CSS Variables</SectionHeader>
      <div style={{
        background: tokens.colors.forestBlack,
        color: '#e0e0e0',
        borderRadius: tokens.radii.md,
        padding: 20,
        fontFamily: "'Courier New', monospace",
        fontSize: 12,
        lineHeight: 1.7,
        overflowX: 'auto',
      }}>
        <span style={{ color: tokens.colors.autumnSageMuted }}>/* Google Fonts */</span><br/>
        <span style={{ color: tokens.colors.autumnGold }}>@import</span> url(<span style={{ color: tokens.colors.autumnSageLight }}>'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@300;400;700'</span>);<br/><br/>
        <span style={{ color: tokens.colors.autumnSageMuted }}>/* Core tokens */</span><br/>
        :root {'{'}<br/>
        {'  '}<span style={{ color: tokens.colors.autumnSageLight }}>--sage</span>: #86A862;<br/>
        {'  '}<span style={{ color: tokens.colors.autumnSageLight }}>--deep-forest</span>: #1B4332;<br/>
        {'  '}<span style={{ color: tokens.colors.autumnSageLight }}>--autumn-gold</span>: #DAA520;<br/>
        {'  '}<span style={{ color: tokens.colors.autumnSageLight }}>--parchment</span>: #EDE8E0;<br/>
        {'  '}<span style={{ color: tokens.colors.autumnSageLight }}>--cream</span>: #F5F2ED;<br/>
        {'}'}
      </div>
    </div>
  </div>
);

// ============================================================================
// SECTION: Logo Gallery
// ============================================================================
const LogoGallerySection = () => {
  const LogoDisplay = ({ src, label, bg = tokens.colors.white, border = true }) => (
    <div style={{
      background: bg,
      borderRadius: tokens.radii.lg,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      border: border ? `1px solid ${tokens.colors.sandstone}` : 'none',
      boxShadow: tokens.shadows.sm,
    }}>
      <img src={src} alt={label} style={{ maxHeight: 120, maxWidth: '100%', objectFit: 'contain' }}
        onError={e => { e.target.style.display = 'none'; }}
      />
      <span style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: bg === tokens.colors.white ? tokens.colors.slate : 'rgba(255,255,255,0.8)' }}>{label}</span>
    </div>
  );

  return (
    <div>
      <SectionHero title="Logo Gallery" subtitle="FCA and event logos on light and dark backgrounds" />

      <SectionHeader icon="⭐">FCA Concorso Logo</SectionHeader>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <LogoDisplay src={images.concorsoLogo} label="On Light Background" bg={tokens.colors.white} />
        <LogoDisplay src={images.concorsoLogo} label="On Dark Background" bg={tokens.colors.deepForest} border={false} />
      </div>

      <SectionHeader icon="🏁">Club Header</SectionHeader>
      <div style={{
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        boxShadow: tokens.shadows.md,
        marginBottom: 24,
      }}>
        <img src={images.clubHeader} alt="FCA Penn-Jersey Region Header" style={{ width: '100%', display: 'block' }}
          onError={e => { e.target.parentElement.style.background = tokens.colors.parchment; e.target.style.display = 'none'; }}
        />
      </div>

      <SectionHeader icon="🍃">Event Wordmark</SectionHeader>
      <div style={{
        background: `linear-gradient(135deg, ${tokens.colors.cream} 0%, ${tokens.colors.parchment} 100%)`,
        borderRadius: tokens.radii.lg,
        padding: '48px 32px',
        textAlign: 'center',
        border: `1px solid ${tokens.colors.sandstone}`,
        marginBottom: 16,
      }}>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 700,
          fontSize: 36,
          color: tokens.colors.deepForest,
          lineHeight: 1.2,
          marginBottom: 8,
        }}>Garden State Ferrari<br />Fall Festival</div>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 14,
          color: tokens.colors.autumnSageDark,
          letterSpacing: 3,
          textTransform: 'uppercase',
          marginTop: 12,
        }}>FCA Penn-Jersey Region</div>
        <div style={{
          width: 60,
          height: 2,
          background: tokens.colors.autumnGold,
          margin: '14px auto 0',
          borderRadius: 1,
        }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{
          background: tokens.colors.deepForest,
          borderRadius: tokens.radii.lg,
          padding: '36px 24px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontWeight: 700,
            fontSize: 24,
            color: tokens.colors.autumnGold,
            lineHeight: 1.3,
          }}>Garden State Ferrari<br />Fall Festival</div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 12,
            color: tokens.colors.autumnSageMuted,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginTop: 10,
          }}>Est. FCA Penn-Jersey Region</div>
        </div>
        <div style={{
          background: tokens.colors.forestBlack,
          borderRadius: tokens.radii.lg,
          padding: '36px 24px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontWeight: 700,
            fontSize: 24,
            color: tokens.colors.white,
            lineHeight: 1.3,
          }}>Garden State Ferrari<br />Fall Festival</div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 12,
            color: tokens.colors.copperLeaf,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginTop: 10,
          }}>September 27, 2026</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SECTION: Color Palette
// ============================================================================
const ColorPaletteSection = () => (
  <div>
    <SectionHero title="Color Palette" subtitle="Complete design token library — click any swatch to copy the hex value" />

    <SectionHeader icon="🌿">Primary — Autumn Sage</SectionHeader>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
      <ColorSwatch name="Autumn Sage" hex="#86A862" large />
      <ColorSwatch name="Sage Light" hex="#A3C080" large />
      <ColorSwatch name="Sage Dark" hex="#5E7A42" large />
      <ColorSwatch name="Sage Muted" hex="#C8D9B0" large />
    </div>

    <SectionHeader icon="🏎️">Secondary — Reds</SectionHeader>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
      <ColorSwatch name="Ferrari Red" hex="#B40C1A" />
      <ColorSwatch name="Burnished Red" hex="#991919" />
      <ColorSwatch name="Terra Cotta" hex="#7F4533" />
    </div>

    <SectionHeader icon="🪨">Neutrals</SectionHeader>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
      <ColorSwatch name="Forest Black" hex="#18100E" />
      <ColorSwatch name="Dark Earth" hex="#27331A" />
      <ColorSwatch name="Charcoal" hex="#2A2A2A" />
      <ColorSwatch name="Slate" hex="#475767" />
      <ColorSwatch name="Warm Stone" hex="#8B8680" />
      <ColorSwatch name="Driftwood" hex="#B8997A" />
      <ColorSwatch name="Sandstone" hex="#D5D0CB" />
      <ColorSwatch name="Parchment" hex="#EDE8E0" />
      <ColorSwatch name="Cream" hex="#F5F2ED" />
      <ColorSwatch name="White" hex="#FFFFFF" />
    </div>

    <SectionHeader icon="✨">Accents</SectionHeader>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
      <ColorSwatch name="Caramel" hex="#BD8158" />
      <ColorSwatch name="Brick Rose" hex="#BC7873" />
      <ColorSwatch name="Steel Blue" hex="#7996AF" />
      <ColorSwatch name="Sky Blue" hex="#96D2FB" />
      <ColorSwatch name="Mauve" hex="#B180AE" />
    </div>

    <SectionHeader icon="🍂">Seasonal</SectionHeader>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
      <ColorSwatch name="Autumn Gold" hex="#DAA520" large />
      <ColorSwatch name="Burnt Sienna" hex="#E97451" large />
      <ColorSwatch name="Amber Harvest" hex="#FFBF00" large />
      <ColorSwatch name="Deep Forest" hex="#1B4332" large />
      <ColorSwatch name="Copper Leaf" hex="#B87333" large />
    </div>

    <SectionHeader icon="🇮🇹">Heritage — Italian Tricolore</SectionHeader>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <ColorSwatch name="Italian Green" hex="#009246" />
      <ColorSwatch name="Italian Red" hex="#CE2B37" />
      <ColorSwatch name="Giallo Modena" hex="#FCDF03" />
    </div>
  </div>
);

// ============================================================================
// SECTION: Typography
// ============================================================================
const TypographySection = () => (
  <div>
    <SectionHero title="Typography" subtitle="Warm serif headings meet clean sans-serif body text" />

    <SectionHeader icon="📜">Display — Libre Baskerville</SectionHeader>
    <SimpleCard>
      <div style={{ fontFamily: tokens.fonts.display, marginBottom: 20 }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: tokens.colors.deepForest, lineHeight: 1.15, marginBottom: 8 }}>
          Garden State Ferrari
        </div>
        <div style={{ fontSize: 36, fontWeight: 700, color: tokens.colors.autumnSageDark, lineHeight: 1.2, marginBottom: 8 }}>
          Fall Festival 2026
        </div>
        <div style={{ fontSize: 24, fontWeight: 400, color: tokens.colors.charcoal, lineHeight: 1.3, marginBottom: 8 }}>
          A Celebration of Ferrari in the Garden State
        </div>
        <div style={{ fontSize: 18, fontWeight: 400, fontStyle: 'italic', color: tokens.colors.slate, lineHeight: 1.4 }}>
          "Where autumn leaves meet the Prancing Horse"
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, padding: '16px 0', borderTop: `1px solid ${tokens.colors.sandstone}` }}>
        <div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmStone, marginBottom: 4 }}>FAMILY</div>
          <div style={{ fontFamily: tokens.fonts.body, fontWeight: 600, fontSize: 13 }}>Libre Baskerville</div>
        </div>
        <div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmStone, marginBottom: 4 }}>WEIGHTS</div>
          <div style={{ fontFamily: tokens.fonts.body, fontWeight: 600, fontSize: 13 }}>400 Regular, 700 Bold</div>
        </div>
        <div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmStone, marginBottom: 4 }}>USE</div>
          <div style={{ fontFamily: tokens.fonts.body, fontWeight: 600, fontSize: 13 }}>Headings, Titles, Pull Quotes</div>
        </div>
      </div>
    </SimpleCard>

    <div style={{ height: 20 }} />

    <SectionHeader icon="📝">Body — Source Sans Pro</SectionHeader>
    <SimpleCard>
      <div style={{ fontFamily: tokens.fonts.body }}>
        <div style={{ fontSize: 20, fontWeight: 300, color: tokens.colors.charcoal, marginBottom: 12, lineHeight: 1.5 }}>
          Light (300) — Join us for an unforgettable day of Ferrari excellence set against the stunning autumn backdrop of TPC Jasna Polana in Princeton, New Jersey.
        </div>
        <div style={{ fontSize: 16, fontWeight: 400, color: tokens.colors.charcoal, marginBottom: 12, lineHeight: 1.6 }}>
          Regular (400) — The Garden State Ferrari Fall Festival brings together enthusiasts, collectors, and families for a day celebrating the artistry and engineering of Ferrari. From classic vintage models to the latest supercars, our concours showcases the best of the Prancing Horse.
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: tokens.colors.charcoal, lineHeight: 1.5 }}>
          Bold (700) — Registration opens June 1, 2026. Early bird pricing available through July 31.
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, padding: '16px 0', borderTop: `1px solid ${tokens.colors.sandstone}`, marginTop: 16 }}>
        <div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmStone, marginBottom: 4 }}>FAMILY</div>
          <div style={{ fontFamily: tokens.fonts.body, fontWeight: 600, fontSize: 13 }}>Source Sans Pro</div>
        </div>
        <div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmStone, marginBottom: 4 }}>WEIGHTS</div>
          <div style={{ fontFamily: tokens.fonts.body, fontWeight: 600, fontSize: 13 }}>300 Light, 400 Regular, 700 Bold</div>
        </div>
        <div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.warmStone, marginBottom: 4 }}>USE</div>
          <div style={{ fontFamily: tokens.fonts.body, fontWeight: 600, fontSize: 13 }}>Body, UI, Captions, Navigation</div>
        </div>
      </div>
    </SimpleCard>

    <LeafDivider />

    <SectionHeader icon="🔤">Type Scale</SectionHeader>
    <SimpleCard>
      {[
        { label: '6xl — 4rem',   size: '4rem',    font: tokens.fonts.display, weight: 700, text: 'Fall Festival' },
        { label: '5xl — 3rem',   size: '3rem',    font: tokens.fonts.display, weight: 700, text: 'Garden State' },
        { label: '4xl — 2.25rem',size: '2.25rem', font: tokens.fonts.display, weight: 700, text: 'September 27, 2026' },
        { label: '3xl — 1.875rem',size:'1.875rem',font: tokens.fonts.display, weight: 400, text: 'TPC Jasna Polana' },
        { label: '2xl — 1.5rem', size: '1.5rem',  font: tokens.fonts.body,    weight: 700, text: 'Event Schedule' },
        { label: 'xl — 1.25rem', size: '1.25rem', font: tokens.fonts.body,    weight: 600, text: 'Registration Open' },
        { label: 'lg — 1.125rem',size: '1.125rem',font: tokens.fonts.body,    weight: 400, text: 'Join the celebration' },
        { label: 'base — 1rem',  size: '1rem',    font: tokens.fonts.body,    weight: 400, text: 'Body text at default size' },
        { label: 'sm — 0.875rem',size: '0.875rem',font: tokens.fonts.body,    weight: 400, text: 'Caption and metadata text' },
        { label: 'xs — 0.75rem', size: '0.75rem', font: tokens.fonts.body,    weight: 400, text: 'Fine print and legal' },
      ].map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 20,
          padding: '10px 0',
          borderBottom: i < 9 ? `1px solid ${tokens.colors.sandstone}` : 'none',
        }}>
          <div style={{ width: 150, fontFamily: "'Courier New', monospace", fontSize: 11, color: tokens.colors.warmStone, flexShrink: 0 }}>{item.label}</div>
          <div style={{ fontFamily: item.font, fontSize: item.size, fontWeight: item.weight, color: tokens.colors.charcoal, lineHeight: 1.3 }}>{item.text}</div>
        </div>
      ))}
    </SimpleCard>
  </div>
);

// ============================================================================
// SECTION: Buttons
// ============================================================================
const ButtonsSection = () => (
  <div>
    <SectionHero title="Buttons" subtitle="Primary actions use Autumn Sage — seasonal accent with Autumn Gold for highlights" />

    <SectionHeader icon="🔘">Variants</SectionHeader>
    <SimpleCard>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 20 }}>
        <Button variant="primary">Register Now</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="accent">Get Tickets</Button>
        <Button variant="outline">View Schedule</Button>
        <Button variant="ghost">Dismiss</Button>
        <Button variant="ferrari">Ferrari Heritage</Button>
      </div>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {[
          { name: 'Primary', desc: 'Autumn Sage #86A862', color: tokens.colors.autumnSage },
          { name: 'Secondary', desc: 'Deep Forest #1B4332', color: tokens.colors.deepForest },
          { name: 'Accent', desc: 'Autumn Gold #DAA520', color: tokens.colors.autumnGold },
          { name: 'Outline', desc: 'Sage border, transparent bg', color: 'transparent' },
          { name: 'Ghost', desc: 'Text-only, subtle hover', color: 'transparent' },
          { name: 'Ferrari', desc: 'Ferrari Red #B40C1A', color: tokens.colors.ferrariRed },
        ].map((v, i) => (
          <div key={i} style={{ fontSize: 11, fontFamily: tokens.fonts.body, color: tokens.colors.slate }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              {v.color !== 'transparent' && <div style={{ width: 10, height: 10, borderRadius: 2, background: v.color }} />}
              <strong>{v.name}</strong>
            </div>
            <div style={{ color: tokens.colors.warmStone }}>{v.desc}</div>
          </div>
        ))}
      </div>
    </SimpleCard>

    <SectionHeader icon="📏">Sizes</SectionHeader>
    <SimpleCard>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary" size="md">Medium</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </div>
    </SimpleCard>

    <SectionHeader icon="⏸️">States</SectionHeader>
    <SimpleCard>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="outline">Outline Default</Button>
        <Button variant="outline" disabled>Outline Disabled</Button>
      </div>
    </SimpleCard>

    <SectionHeader icon="🍂">Seasonal CTA Patterns</SectionHeader>
    <div style={{
      background: `linear-gradient(135deg, ${tokens.colors.deepForest} 0%, ${tokens.colors.darkEarth} 100%)`,
      borderRadius: tokens.radii.lg,
      padding: 32,
      textAlign: 'center',
    }}>
      <div style={{ fontFamily: tokens.fonts.display, fontSize: 22, color: tokens.colors.autumnGold, marginBottom: 6 }}>
        Join Us This September
      </div>
      <div style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>
        Registration is now open for the 2026 Garden State Ferrari Fall Festival
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Button variant="primary" size="lg">Register Now</Button>
        <Button variant="accent" size="lg">Sponsor a Car</Button>
      </div>
    </div>
  </div>
);

// ============================================================================
// SECTION: Cards
// ============================================================================
const CardsSection = () => (
  <div>
    <SectionHero title="Cards" subtitle="Content containers for events, venues, registration, and sponsors" />

    <SectionHeader icon="🍁">Event Card</SectionHeader>
    <div style={{ maxWidth: 380 }}>
      <div style={{
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        boxShadow: tokens.shadows.md,
        background: tokens.colors.white,
        border: `1px solid ${tokens.colors.sandstone}`,
      }}>
        <div style={{ position: 'relative' }}>
          <img src={images.hero2025} alt="GSFFF 2025" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: tokens.colors.autumnGold,
            color: tokens.colors.forestBlack,
            fontFamily: tokens.fonts.body,
            fontWeight: 700,
            fontSize: 11,
            padding: '4px 12px',
            borderRadius: tokens.radii.full,
          }}>2026</div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${tokens.colors.autumnSage}, ${tokens.colors.autumnGold}, ${tokens.colors.copperLeaf})`,
          }} />
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 18, color: tokens.colors.deepForest, marginBottom: 6 }}>
            Fall Festival 2026
          </div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.slate, marginBottom: 12, lineHeight: 1.5 }}>
            Join us at TPC Jasna Polana for an afternoon of Ferrari exhibition and autumn celebration.
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <Badge variant="sage">Sept 27</Badge>
            <Badge variant="outline">Princeton, NJ</Badge>
          </div>
          <Button variant="primary" size="sm">View Details</Button>
        </div>
      </div>
    </div>

    <SectionHeader icon="📝">Registration Card</SectionHeader>
    <div style={{ maxWidth: 380 }}>
      <div style={{
        borderRadius: tokens.radii.lg,
        boxShadow: tokens.shadows.md,
        background: tokens.colors.white,
        border: `1px solid ${tokens.colors.sandstone}`,
        padding: 24,
        borderTop: `4px solid ${tokens.colors.autumnSage}`,
      }}>
        <LeafIcon size={24} color={tokens.colors.autumnSageMuted} style={{ marginBottom: 8 }} />
        <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 18, color: tokens.colors.deepForest, marginBottom: 4 }}>
          Register Your Ferrari
        </div>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.slate, marginBottom: 16, lineHeight: 1.5 }}>
          Early bird pricing available. Reserve your spot on the show field at Princeton's TPC Jasna Polana.
        </div>
        <div style={{
          background: tokens.colors.cream,
          borderRadius: tokens.radii.md,
          padding: 14,
          marginBottom: 16,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.charcoal }}>Show Entry</span>
            <span style={{ fontFamily: tokens.fonts.body, fontWeight: 700, fontSize: 13, color: tokens.colors.deepForest }}>$75</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.charcoal }}>Spectator</span>
            <span style={{ fontFamily: tokens.fonts.body, fontWeight: 700, fontSize: 13, color: tokens.colors.deepForest }}>Free</span>
          </div>
        </div>
        <Button variant="primary">Register Now</Button>
      </div>
    </div>

    <SectionHeader icon="📍">Venue Card</SectionHeader>
    <div style={{ maxWidth: 380 }}>
      <div style={{
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        boxShadow: tokens.shadows.md,
        background: tokens.colors.white,
        border: `1px solid ${tokens.colors.sandstone}`,
      }}>
        <div style={{
          height: 140,
          background: `linear-gradient(135deg, ${tokens.colors.deepForest} 0%, ${tokens.colors.autumnSageDark} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: tokens.colors.autumnSageMuted, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Venue</div>
            <div style={{ fontFamily: tokens.fonts.display, fontSize: 22, fontWeight: 700, color: tokens.colors.white }}>TPC Jasna Polana</div>
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.charcoal, marginBottom: 4 }}>
            4519 Province Line Road
          </div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.charcoal, marginBottom: 12 }}>
            Princeton, NJ 08540
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="outline" size="sm">Get Directions</Button>
            <Button variant="ghost" size="sm">View Map</Button>
          </div>
        </div>
      </div>
    </div>

    <SectionHeader icon="📸">Past Festival Card</SectionHeader>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 800 }}>
      {[
        { img: images.hero2025, year: '2025', label: 'A record-setting turnout with 80+ Ferraris' },
        { img: images.hero2024, year: '2024', label: 'The debut year at TPC Jasna Polana' },
        { img: images.hero2023, year: '2023', label: 'Ferrari of Central New Jersey showcase' },
      ].map((fest, i) => (
        <div key={i} style={{
          borderRadius: tokens.radii.lg,
          overflow: 'hidden',
          boxShadow: tokens.shadows.sm,
          background: tokens.colors.white,
          border: `1px solid ${tokens.colors.sandstone}`,
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = tokens.shadows.lg; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = tokens.shadows.sm; }}
        >
          <div style={{ position: 'relative' }}>
            <img src={fest.img} alt={`GSFFF ${fest.year}`} style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }} />
            <div style={{
              position: 'absolute', bottom: 8, left: 8,
              background: 'rgba(24,16,14,0.7)',
              color: '#fff',
              fontFamily: tokens.fonts.body,
              fontWeight: 700,
              fontSize: 12,
              padding: '3px 10px',
              borderRadius: 4,
            }}>{fest.year}</div>
          </div>
          <div style={{ padding: 12 }}>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: tokens.colors.slate, lineHeight: 1.4 }}>{fest.label}</div>
          </div>
        </div>
      ))}
    </div>

    <SectionHeader icon="🤝">Sponsor Card</SectionHeader>
    <div style={{ maxWidth: 300 }}>
      <div style={{
        borderRadius: tokens.radii.lg,
        boxShadow: tokens.shadows.sm,
        background: tokens.colors.white,
        border: `1px solid ${tokens.colors.sandstone}`,
        padding: 24,
        textAlign: 'center',
      }}>
        <div style={{
          width: 64, height: 64,
          borderRadius: tokens.radii.full,
          background: tokens.colors.cream,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 14px',
          fontSize: 28,
        }}>🏆</div>
        <Badge variant="gold">Platinum Sponsor</Badge>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 700,
          fontSize: 16,
          color: tokens.colors.deepForest,
          margin: '10px 0 6px',
        }}>Sponsor Name</div>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: tokens.colors.slate, lineHeight: 1.5 }}>
          Premier positioning, show field banner, program ad, and VIP tent access.
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// SECTION: Hero
// ============================================================================
const HeroSection = () => (
  <div>
    <SectionHero title="Hero Section" subtitle="Full-width hero with warm autumn-toned overlay for event landing pages" />

    <SectionHeader icon="🌅">Primary Hero — Dark Overlay</SectionHeader>
    <div style={{
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      position: 'relative',
      height: 420,
      boxShadow: tokens.shadows.xl,
      marginBottom: 24,
    }}>
      <img src={images.hero2025} alt="GSFFF Hero" style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(27,67,50,0.85) 0%, rgba(24,16,14,0.7) 50%, rgba(134,168,98,0.3) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center', maxWidth: 600 }}>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 13,
            color: tokens.colors.autumnGold,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 12,
          }}>FCA Penn-Jersey Region Presents</div>
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontWeight: 700,
            fontSize: 44,
            color: tokens.colors.white,
            lineHeight: 1.15,
            marginBottom: 14,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>Garden State Ferrari<br />Fall Festival</h1>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 16,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: 8,
          }}>September 27, 2026</div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 14,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 28,
          }}>TPC Jasna Polana &middot; Princeton, New Jersey</div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Button variant="primary" size="lg">Register Now</Button>
            <Button variant="accent" size="lg">View Schedule</Button>
          </div>
        </div>
      </div>
    </div>

    <SectionHeader icon="🍂">Warm Autumn Variant</SectionHeader>
    <div style={{
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      position: 'relative',
      height: 360,
      boxShadow: tokens.shadows.xl,
    }}>
      <img src={images.hero2024} alt="GSFFF Hero Warm" style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(218,165,32,0.15) 0%, rgba(127,69,51,0.6) 60%, rgba(24,16,14,0.85) 100%)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 40,
      }}>
        <div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 12,
            color: tokens.colors.autumnGold,
            textTransform: 'uppercase',
            letterSpacing: 3,
            marginBottom: 8,
          }}>September 27, 2026 &middot; Princeton, NJ</div>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontWeight: 700,
            fontSize: 36,
            color: tokens.colors.white,
            lineHeight: 1.15,
            marginBottom: 16,
          }}>Garden State Ferrari<br />Fall Festival</h2>
          <Button variant="primary" size="lg">Register Now</Button>
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// SECTION: Event Details
// ============================================================================
const EventDetailsSection = () => (
  <div>
    <SectionHero title="Event Details" subtitle="Date, time, venue, and schedule components" />

    <SectionHeader icon="📅">Date & Time Display</SectionHeader>
    <div style={{
      display: 'inline-flex',
      background: tokens.colors.white,
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      boxShadow: tokens.shadows.md,
      border: `1px solid ${tokens.colors.sandstone}`,
      marginBottom: 24,
    }}>
      <div style={{
        background: tokens.colors.deepForest,
        color: tokens.colors.white,
        padding: '20px 28px',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: tokens.colors.autumnGold }}>September</div>
        <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 48, lineHeight: 1 }}>27</div>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: tokens.colors.autumnSageMuted }}>2026</div>
      </div>
      <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 18, color: tokens.colors.deepForest, marginBottom: 4 }}>
          Saturday, September 27
        </div>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: tokens.colors.slate }}>
          9:00 AM — 3:00 PM
        </div>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.warmStone, marginTop: 4 }}>
          Rain date: October 4, 2026
        </div>
      </div>
    </div>

    <SectionHeader icon="📍">Venue Card</SectionHeader>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 24,
    }}>
      <div style={{
        background: `linear-gradient(135deg, ${tokens.colors.deepForest} 0%, ${tokens.colors.autumnSageDark} 100%)`,
        borderRadius: tokens.radii.lg,
        padding: 32,
        color: tokens.colors.white,
      }}>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: tokens.colors.autumnGold, marginBottom: 8 }}>Venue</div>
        <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 26, marginBottom: 14 }}>TPC Jasna Polana</div>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 20 }}>
          Nestled in the rolling hills of Princeton, TPC Jasna Polana offers a stunning backdrop of manicured grounds and autumn foliage — the perfect setting for a Ferrari concours.
        </div>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: tokens.colors.autumnSageMuted }}>
          4519 Province Line Road<br />Princeton, NJ 08540
        </div>
      </div>
      <div style={{
        background: tokens.colors.white,
        borderRadius: tokens.radii.lg,
        padding: 32,
        border: `1px solid ${tokens.colors.sandstone}`,
      }}>
        <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 16, color: tokens.colors.deepForest, marginBottom: 16 }}>Getting There</div>
        {[
          { icon: '🚗', label: 'From NYC', detail: '~75 min via NJ Turnpike to Route 1' },
          { icon: '🚗', label: 'From Philadelphia', detail: '~50 min via I-95 North' },
          { icon: '🅿️', label: 'Parking', detail: 'Complimentary on-site parking' },
          { icon: '♿', label: 'Accessibility', detail: 'Full ADA accessibility' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 12,
            padding: '10px 0',
            borderBottom: i < 3 ? `1px solid ${tokens.colors.sandstone}` : 'none',
          }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <div>
              <div style={{ fontFamily: tokens.fonts.body, fontWeight: 700, fontSize: 13, color: tokens.colors.charcoal }}>{item.label}</div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: tokens.colors.slate }}>{item.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <SectionHeader icon="⏰">Event Schedule Timeline</SectionHeader>
    <SimpleCard>
      {[
        { time: '9:00 AM', event: 'Gates Open & Check-In', desc: 'Exhibitor arrival and staging', accent: tokens.colors.autumnSage },
        { time: '10:00 AM', event: 'Show Field Opens', desc: 'All cars positioned; spectators welcome', accent: tokens.colors.autumnSageDark },
        { time: '11:00 AM', event: 'Judges\' Walk', desc: 'Concours judging begins across all classes', accent: tokens.colors.autumnGold },
        { time: '12:00 PM', event: 'Lunch & Live Music', desc: 'Catered lunch with live jazz ensemble', accent: tokens.colors.copperLeaf },
        { time: '1:30 PM', event: 'Awards Ceremony', desc: 'Trophies for Best in Show, People\'s Choice, and class awards', accent: tokens.colors.ferrariRed },
        { time: '3:00 PM', event: 'Festival Closes', desc: 'Thank you for celebrating with us', accent: tokens.colors.warmStone },
      ].map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: 16,
          padding: '14px 0',
          borderBottom: i < 5 ? `1px solid ${tokens.colors.sandstone}` : 'none',
        }}>
          <div style={{
            width: 80,
            flexShrink: 0,
            fontFamily: tokens.fonts.body,
            fontWeight: 700,
            fontSize: 13,
            color: item.accent,
          }}>{item.time}</div>
          <div style={{ position: 'relative', paddingLeft: 20 }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 6,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: item.accent,
            }} />
            <div style={{ fontFamily: tokens.fonts.body, fontWeight: 700, fontSize: 14, color: tokens.colors.charcoal, marginBottom: 2 }}>{item.event}</div>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: tokens.colors.slate }}>{item.desc}</div>
          </div>
        </div>
      ))}
    </SimpleCard>
  </div>
);

// ============================================================================
// SECTION: Gallery Grid
// ============================================================================
const GalleryGridSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const galleryImages = [
    { src: images.hero2025, caption: 'GSFFF 2025 — Show Field' },
    { src: images.hero2024, caption: 'GSFFF 2024 — Debut at TPC Jasna Polana' },
    { src: images.hero2023, caption: 'Ferrari of Central NJ Exterior' },
    { src: images.hero2025, caption: 'Concours Line-Up' },
    { src: images.hero2024, caption: 'Autumn at Princeton' },
    { src: images.hero2023, caption: 'Classic Ferrari Showcase' },
  ];

  return (
    <div>
      <SectionHero title="Gallery Grid" subtitle="Warm gallery with autumn-toned hover effects — showcasing past festivals" />

      <SectionHeader icon="📸">Festival Gallery</SectionHeader>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 24,
      }}>
        {galleryImages.map((img, i) => (
          <div
            key={i}
            style={{
              borderRadius: tokens.radii.lg,
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: hoveredIdx === i ? tokens.shadows.lg : tokens.shadows.sm,
              transform: hoveredIdx === i ? 'scale(1.02)' : 'scale(1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <img src={img.src} alt={img.caption} style={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.4s ease',
              transform: hoveredIdx === i ? 'scale(1.08)' : 'scale(1)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: hoveredIdx === i
                ? 'linear-gradient(180deg, rgba(218,165,32,0.1) 0%, rgba(134,168,98,0.4) 60%, rgba(24,16,14,0.8) 100%)'
                : 'linear-gradient(180deg, transparent 40%, rgba(24,16,14,0.6) 100%)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 14,
            }}>
              <div style={{
                fontFamily: tokens.fonts.body,
                fontSize: 12,
                fontWeight: 600,
                color: '#fff',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                transform: hoveredIdx === i ? 'translateY(0)' : 'translateY(4px)',
                opacity: hoveredIdx === i ? 1 : 0.8,
                transition: 'all 0.3s ease',
              }}>{img.caption}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionHeader icon="🖼️">Featured Image — Full Width</SectionHeader>
      <div style={{
        borderRadius: tokens.radii.lg,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: tokens.shadows.lg,
      }}>
        <img src={images.hero2025} alt="Featured" style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 30%, rgba(24,16,14,0.7) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 24,
        }}>
          <div>
            <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 4 }}>
              A Tradition of Excellence
            </div>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
              Year after year, the Garden State Ferrari Fall Festival celebrates the finest Ferraris in the Northeast.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SECTION: Sponsor Section
// ============================================================================
const SponsorSection = () => {
  const tiers = [
    {
      name: 'Platinum',
      color: tokens.colors.autumnGold,
      bg: `linear-gradient(135deg, rgba(218,165,32,0.08), rgba(218,165,32,0.02))`,
      price: '$5,000',
      perks: ['Premier show-field banner', 'Full-page program ad', 'VIP tent (10 guests)', '2 show entries', 'On-stage recognition'],
    },
    {
      name: 'Gold',
      color: tokens.colors.copperLeaf,
      bg: `linear-gradient(135deg, rgba(184,115,51,0.08), rgba(184,115,51,0.02))`,
      price: '$2,500',
      perks: ['Show-field signage', 'Half-page program ad', 'VIP tent (4 guests)', '1 show entry'],
    },
    {
      name: 'Silver',
      color: tokens.colors.warmStone,
      bg: `linear-gradient(135deg, rgba(139,134,128,0.08), rgba(139,134,128,0.02))`,
      price: '$1,000',
      perks: ['Program listing', 'Event website logo', 'Social media mention'],
    },
    {
      name: 'Friend',
      color: tokens.colors.autumnSage,
      bg: `linear-gradient(135deg, rgba(134,168,98,0.08), rgba(134,168,98,0.02))`,
      price: '$250',
      perks: ['Program thank-you', 'Event website mention'],
    },
  ];

  return (
    <div>
      <SectionHero title="Sponsor Section" subtitle="Tiered sponsorship with warm autumn aesthetic" />

      <SectionHeader icon="🤝">Sponsorship Tiers</SectionHeader>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
        {tiers.map((tier, i) => (
          <div key={i} style={{
            background: tier.bg,
            borderRadius: tokens.radii.lg,
            border: `1px solid ${tier.color}30`,
            overflow: 'hidden',
            transition: 'transform 0.2s',
            cursor: 'pointer',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              background: tier.color,
              padding: '14px 20px',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 16, color: '#fff' }}>
                {tier.name}
              </div>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{
                fontFamily: tokens.fonts.display,
                fontWeight: 700,
                fontSize: 28,
                color: tokens.colors.deepForest,
                textAlign: 'center',
                marginBottom: 16,
              }}>{tier.price}</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {tier.perks.map((perk, j) => (
                  <li key={j} style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: 12,
                    color: tokens.colors.charcoal,
                    padding: '6px 0',
                    borderBottom: j < tier.perks.length - 1 ? `1px solid ${tokens.colors.sandstone}` : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                    <span style={{ color: tier.color, fontSize: 12, fontWeight: 700 }}>✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <Button variant="outline" size="sm">Become a Sponsor</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionHeader icon="🏢">Sponsor Logo Bar</SectionHeader>
      <div style={{
        background: tokens.colors.white,
        borderRadius: tokens.radii.lg,
        padding: 32,
        border: `1px solid ${tokens.colors.sandstone}`,
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 12,
          color: tokens.colors.warmStone,
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginBottom: 20,
        }}>Proudly Supported By</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          {['Ferrari of Central NJ', 'Wide World Ferrari', 'Miller Motorcars', 'Continental AutoSports'].map((name, i) => (
            <div key={i} style={{
              fontFamily: tokens.fonts.body,
              fontSize: 14,
              fontWeight: 700,
              color: tokens.colors.driftwood,
              padding: '10px 20px',
              borderRadius: tokens.radii.md,
              background: tokens.colors.cream,
            }}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SECTION: Registration Form
// ============================================================================
const RegistrationFormSection = () => (
  <div>
    <SectionHero title="Registration Form" subtitle="Welcoming form design with Libre Baskerville headings and autumn accents" />

    <SectionHeader icon="📋">Full Registration Form</SectionHeader>
    <div style={{
      maxWidth: 600,
      background: tokens.colors.white,
      borderRadius: tokens.radii.lg,
      boxShadow: tokens.shadows.md,
      border: `1px solid ${tokens.colors.sandstone}`,
      overflow: 'hidden',
    }}>
      <div style={{
        background: `linear-gradient(135deg, ${tokens.colors.deepForest} 0%, ${tokens.colors.autumnSageDark} 100%)`,
        padding: '28px 32px',
      }}>
        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 700,
          fontSize: 22,
          color: tokens.colors.white,
          marginBottom: 4,
        }}>Register for GSFFF 2026</div>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 13,
          color: tokens.colors.autumnSageMuted,
        }}>September 27, 2026 &middot; TPC Jasna Polana, Princeton</div>
      </div>

      <div style={{ padding: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Input label="First Name" placeholder="John" required />
          <Input label="Last Name" placeholder="Ferrari" required />
        </div>
        <Input label="Email Address" placeholder="john@example.com" type="email" required />
        <Input label="Phone" placeholder="(732) 555-0100" type="tel" />

        <LeafDivider />

        <div style={{
          fontFamily: tokens.fonts.display,
          fontWeight: 700,
          fontSize: 16,
          color: tokens.colors.deepForest,
          marginBottom: 14,
        }}>Vehicle Information</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Input label="Ferrari Model" placeholder="e.g., 488 GTB" required />
          <Input label="Year" placeholder="e.g., 2019" required />
        </div>
        <Input label="Color" placeholder="e.g., Rosso Corsa" />
        <Select label="Entry Class" required options={[
          'Select a class...',
          'Vintage (Pre-1970)',
          'Classic (1970–1989)',
          'Modern (1990–2010)',
          'Contemporary (2011–Present)',
          'Special / Limited Edition',
        ]} />

        <div style={{
          background: tokens.colors.cream,
          borderRadius: tokens.radii.md,
          padding: 16,
          marginBottom: 20,
          border: `1px solid ${tokens.colors.sandstone}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: tokens.fonts.body, fontSize: 14, color: tokens.colors.charcoal }}>Show Entry Fee</span>
            <span style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 18, color: tokens.colors.deepForest }}>$75.00</span>
          </div>
        </div>

        <Button variant="primary" size="lg">Complete Registration</Button>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: 11,
          color: tokens.colors.warmStone,
          marginTop: 12,
        }}>
          By registering, you agree to the event rules and liability waiver. Questions? Contact Donald Deieso at (732) 742-5425.
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// SECTION: Footer
// ============================================================================
const FooterSection = () => (
  <div>
    <SectionHero title="Footer" subtitle="Festival footer with parent brand attribution and contact information" />

    <SectionHeader icon="🔻">Full Footer</SectionHeader>
    <div style={{
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      boxShadow: tokens.shadows.md,
    }}>
      <div style={{
        background: tokens.colors.deepForest,
        padding: '40px 48px',
        color: tokens.colors.white,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 32 }}>
          {/* Brand column */}
          <div>
            <div style={{
              fontFamily: tokens.fonts.display,
              fontWeight: 700,
              fontSize: 20,
              color: tokens.colors.white,
              marginBottom: 6,
            }}>Garden State Ferrari<br />Fall Festival</div>
            <div style={{
              fontFamily: tokens.fonts.body,
              fontSize: 12,
              color: tokens.colors.autumnSageMuted,
              lineHeight: 1.6,
              marginBottom: 16,
            }}>
              New Jersey's Premier Ferrari Fall Celebration.<br />
              An annual event of the FCA Penn-Jersey Region.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: tokens.radii.full, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, cursor: 'pointer' }}>f</div>
              <div style={{ width: 32, height: 32, borderRadius: tokens.radii.full, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, cursor: 'pointer' }}>ig</div>
              <div style={{ width: 32, height: 32, borderRadius: tokens.radii.full, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, cursor: 'pointer' }}>yt</div>
            </div>
          </div>

          {/* Event column */}
          <div>
            <div style={{ fontFamily: tokens.fonts.body, fontWeight: 700, fontSize: 12, color: tokens.colors.autumnGold, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 14 }}>Event</div>
            {['Schedule', 'Registration', 'Venue & Directions', 'Rules & Judging', 'Past Festivals'].map((link, i) => (
              <div key={i} style={{
                fontFamily: tokens.fonts.body,
                fontSize: 13,
                color: 'rgba(255,255,255,0.7)',
                padding: '5px 0',
                cursor: 'pointer',
              }}>{link}</div>
            ))}
          </div>

          {/* Community column */}
          <div>
            <div style={{ fontFamily: tokens.fonts.body, fontWeight: 700, fontSize: 12, color: tokens.colors.autumnGold, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 14 }}>Community</div>
            {['FCA Penn-Jersey Region', 'Join FCA', 'Sponsor the Festival', 'Volunteer', 'Newsletter'].map((link, i) => (
              <div key={i} style={{
                fontFamily: tokens.fonts.body,
                fontSize: 13,
                color: 'rgba(255,255,255,0.7)',
                padding: '5px 0',
                cursor: 'pointer',
              }}>{link}</div>
            ))}
          </div>

          {/* Contact column */}
          <div>
            <div style={{ fontFamily: tokens.fonts.body, fontWeight: 700, fontSize: 12, color: tokens.colors.autumnGold, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 14 }}>Contact</div>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
              Donald Deieso<br />
              Event Chair<br />
              (732) 742-5425<br />
              cornetdon7449@gmail.com
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
            &copy; 2026 FCA Penn-Jersey Region. The Prancing Horse device is a trademark of Ferrari S.p.A.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <img src={images.concorsoLogo} alt="FCA" style={{ height: 32, opacity: 0.6 }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </div>

    <div style={{ height: 20 }} />

    <SectionHeader icon="📱">Compact Footer</SectionHeader>
    <div style={{
      borderRadius: tokens.radii.lg,
      overflow: 'hidden',
      boxShadow: tokens.shadows.sm,
    }}>
      <div style={{
        background: tokens.colors.forestBlack,
        padding: '24px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <div style={{ fontFamily: tokens.fonts.display, fontWeight: 700, fontSize: 15, color: tokens.colors.white }}>
            Garden State Ferrari Fall Festival
          </div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
            An event of the FCA Penn-Jersey Region &middot; &copy; 2026
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>Privacy</span>
          <span style={{ fontFamily: tokens.fonts.body, fontSize: 12, color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>Contact</span>
          <img src={images.concorsoLogo} alt="FCA" style={{ height: 28, opacity: 0.5 }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>
    </div>
  </div>
);

// ============================================================================
// MAIN STORYBOOK APP
// ============================================================================
function GSFFFStorybook() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview',     label: 'Brand Overview' },
    { id: 'logos',        label: 'Logo Gallery' },
    { id: 'colors',       label: 'Color Palette' },
    { id: 'typography',   label: 'Typography' },
    { id: 'buttons',      label: 'Buttons' },
    { id: 'cards',        label: 'Cards' },
    { id: 'hero',         label: 'Hero Section' },
    { id: 'event',        label: 'Event Details' },
    { id: 'gallery',      label: 'Gallery Grid' },
    { id: 'sponsors',     label: 'Sponsor Section' },
    { id: 'registration', label: 'Registration Form' },
    { id: 'footer',       label: 'Footer' },
  ];

  const sectionComponents = {
    overview:     BrandOverviewSection,
    logos:        LogoGallerySection,
    colors:       ColorPaletteSection,
    typography:   TypographySection,
    buttons:      ButtonsSection,
    cards:        CardsSection,
    hero:         HeroSection,
    event:        EventDetailsSection,
    gallery:      GalleryGridSection,
    sponsors:     SponsorSection,
    registration: RegistrationFormSection,
    footer:       FooterSection,
  };

  const ActiveComponent = sectionComponents[activeSection] || BrandOverviewSection;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: tokens.fonts.body }}>
      <style>{baseStyles}</style>

      {/* Sidebar */}
      <nav style={{
        width: 240,
        background: `linear-gradient(180deg, ${tokens.colors.deepForest} 0%, #142b22 100%)`,
        padding: '24px 16px',
        color: '#fff',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
        borderRight: `1px solid rgba(134,168,98,0.15)`,
      }}>
        {/* Sidebar header */}
        <div style={{ marginBottom: 28, padding: '0 6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <img
              src={images.concorsoLogo}
              alt="FCA"
              style={{ height: 36, width: 'auto', borderRadius: 4 }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div>
              <div style={{
                fontFamily: tokens.fonts.display,
                fontWeight: 700,
                fontSize: 14,
                color: tokens.colors.white,
                lineHeight: 1.2,
              }}>GSFFF</div>
              <div style={{
                fontFamily: tokens.fonts.body,
                fontSize: 10,
                color: tokens.colors.autumnGold,
                letterSpacing: 1,
              }}>Design System</div>
            </div>
          </div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: 10,
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.4,
          }}>Garden State Ferrari<br />Fall Festival</div>
        </div>

        {/* Nav items */}
        {sections.map(section => (
          <NavButton
            key={section.id}
            isActive={activeSection === section.id}
            onClick={() => setActiveSection(section.id)}
          >{section.label}</NavButton>
        ))}

        {/* Sidebar footer */}
        <div style={{
          marginTop: 28,
          padding: 14,
          background: 'rgba(255,255,255,0.04)',
          borderRadius: tokens.radii.md,
          fontSize: 10,
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.5,
        }}>
          <div style={{ fontWeight: 700, marginBottom: 4, color: tokens.colors.autumnGold }}>Version 1.0.0</div>
          FCA Penn-Jersey Region<br />
          September 27, 2026<br />
          <span style={{ color: tokens.colors.autumnSageMuted }}>Based on tokens.json</span>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{
        marginLeft: 240,
        flex: 1,
        padding: 44,
        background: tokens.colors.cream,
        minHeight: '100vh',
      }}>
        <ActiveComponent />
      </main>
    </div>
  );
}
