import { useState } from 'react'

/* -----------------------------------------------------------
   Wavy SVG divider.
   `fill` is the colour of the section the wave belongs to so it
   bleeds smoothly into the adjacent section.
   position: 'top' | 'bottom'
----------------------------------------------------------- */
function Wave({ position, fill }) {
  return (
    <div className={`wave wave--${position}`} aria-hidden="true">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        {position === 'top' ? (
          <path
            fill={fill}
            d="M0,40 C240,100 480,0 720,40 C960,80 1200,10 1440,46 L1440,0 L0,0 Z"
          />
        ) : (
          <path
            fill={fill}
            d="M0,60 C240,0 480,100 720,60 C960,20 1200,90 1440,54 L1440,100 L0,100 Z"
          />
        )}
      </svg>
    </div>
  )
}

const BURGUNDY = '#6b1f2a'
const CREAM = '#f5f0e8'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Stats', href: '#stats' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Collabs', href: '#collabs' },
  { label: 'Contact', href: '#contact' },
]

const STATS = [
  { num: '70K+', label: 'Account Reach' },
  { num: '12%', label: 'Engagement Rate' },
  { num: '17–29', label: 'Core Audience Age' },
  { num: '2+', label: 'Brand Collabs' },
]

const PILLARS = [
  'Quotes for Women',
  'Student Life',
  'Berlin Lifestyle',
  'Girls Who Get Things Done',
]

const WORK_CARDS = [
  { label: 'Post', from: '#7e2c38', to: '#b6707a' },
  { label: 'Post', from: '#8a3a3f', to: '#e3c9a8' },
  { label: 'Reel', from: '#5b1a24', to: '#c89b6a' },
  { label: 'Post', from: '#7e2c38', to: '#d8a9a0' },
]

const PHONES = [
  { label: 'Reel', from: '#7e2c38', to: '#e3c9a8' },
  { label: 'Video', from: '#561620', to: '#b6707a' },
  { label: 'Reel', from: '#8a3a3f', to: '#c89b6a' },
]

const COLLABS = [
  {
    short: 'IK',
    name: 'Ikono Berlin',
    desc: 'Reels featured on their official page.',
    from: '#6b1f2a',
    to: '#b6707a',
  },
  {
    short: 'TG',
    name: 'The Greens Berlin',
    desc: 'Gifted content collaboration.',
    from: '#3f5b2f',
    to: '#9bb06a',
  },
]

const REVIEWS = [
  {
    quote:
      'Aditi delivered scroll-stopping reels that felt completely on-brand. Her content brought a warm, authentic energy our page had been missing.',
    brand: 'Ikono Berlin',
  },
  {
    quote:
      'Working with Aditi was effortless — thoughtful, reliable, and genuinely creative. The gifted collaboration exceeded everything we hoped for.',
    brand: 'The Greens Berlin',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ============================= NAVBAR ============================= */}
      <nav className="nav">
        <div className="nav__inner">
          <ul className="nav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#hero" className="nav__brand">
            thetinyaditi
          </a>
          <div className="nav__right">
            <a href="#contact" className="nav__cta">
              Work With Me
            </a>
          </div>
          <button
            className="nav__menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ============================== HERO ============================== */}
      <header id="hero" className="section section--burgundy hero">
        <div className="wrap">
          <p className="eyebrow">Berlin · Lifestyle Creator</p>
          <h1 className="hero__headline">LIFESTYLE &amp; CONTENT</h1>
          <p className="hero__script">by Aditi</p>

          <div className="hero__roles">
            <span className="tag">Content Creator</span>
            <span className="tag">UGC Creator</span>
          </div>

          <div className="hero__portrait ph" role="img" aria-label="Portrait of Aditi" />

          <p className="hero__tagline">
            Creating authentic content for ambitious women in Berlin.
          </p>
        </div>
        <Wave position="bottom" fill={CREAM} />
      </header>

      {/* ============================== STATS ============================= */}
      <section id="stats" className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <div className="wrap center">
          <p className="eyebrow">By the numbers</p>
          <h2 className="script">The Stats</h2>
          <div className="stats__grid">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Wave position="bottom" fill={BURGUNDY} />
      </section>

      {/* ============================== ABOUT ============================= */}
      <section id="about" className="section section--burgundy">
        <Wave position="top" fill={CREAM} />
        <div className="wrap">
          <p className="eyebrow center">Hello there</p>
          <h2 className="script center">About Me</h2>
          <div className="about__grid">
            <div
              className="about__portrait ph"
              role="img"
              aria-label="Portrait of Aditi"
            />
            <div className="about__text">
              <p>
                I'm Aditi, an MBA student and Berlin-based content creator at{' '}
                <span className="handle">@thetinyaditi</span>. I create short-form
                video and lifestyle content for ambitious young women — covering
                student life, self-growth, and real everyday moments. My audience is
                70K+ strong, predominantly women aged 17–29 who are building
                something.
              </p>
            </div>
          </div>
        </div>
        <Wave position="bottom" fill={CREAM} />
      </section>

      {/* ========================= CONTENT PILLARS ======================== */}
      <section className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <div className="wrap center">
          <p className="eyebrow">Content pillars</p>
          <h2 className="script">What I Create</h2>
          <div className="pillars">
            {PILLARS.map((p) => (
              <span className="pillar" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
        <Wave position="bottom" fill={BURGUNDY} />
      </section>

      {/* ============================ PORTFOLIO =========================== */}
      <section id="portfolio" className="section section--burgundy">
        <Wave position="top" fill={CREAM} />
        <div className="wrap">
          <p className="eyebrow center">Selected work</p>
          <h2 className="script center">My Work</h2>

          <div className="work__grid">
            {WORK_CARDS.map((c, i) => (
              <div
                key={i}
                className="work__card ph"
                style={{
                  background: `linear-gradient(150deg, ${c.from}, ${c.to})`,
                }}
              >
                <span className="work__label">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="phones">
            {PHONES.map((p, i) => (
              <div className="phone" key={i}>
                <div className="phone__notch" />
                <div
                  className="phone__screen ph"
                  style={{
                    background: `linear-gradient(165deg, ${p.from}, ${p.to})`,
                  }}
                >
                  <span className="phone__label">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Wave position="bottom" fill={CREAM} />
      </section>

      {/* =========================== BRAND COLLABS ======================== */}
      <section id="collabs" className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <div className="wrap center">
          <p className="eyebrow">Partnerships</p>
          <h2 className="script">Brands I've Worked With</h2>
          <div className="collabs__grid">
            {COLLABS.map((c) => (
              <div className="collab" key={c.name}>
                <div
                  className="collab__logo"
                  style={{
                    background: `linear-gradient(150deg, ${c.from}, ${c.to})`,
                  }}
                >
                  {c.short}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 className="collab__name">{c.name}</h3>
                  <p className="collab__desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Wave position="bottom" fill={BURGUNDY} />
      </section>

      {/* =========================== TESTIMONIALS ========================= */}
      <section className="section section--burgundy">
        <Wave position="top" fill={CREAM} />
        <div className="wrap center">
          <p className="eyebrow">Kind words</p>
          <h2 className="script">What They Say</h2>
          <div className="reviews">
            {REVIEWS.map((r) => (
              <div className="review" key={r.brand}>
                <div className="review__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="review__quote">“{r.quote}”</p>
                <div className="review__brand">{r.brand}</div>
              </div>
            ))}
          </div>
        </div>
        <Wave position="bottom" fill={CREAM} />
      </section>

      {/* ============================== CONTACT =========================== */}
      <section id="contact" className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <div className="wrap contact">
          <p className="eyebrow">Let's collaborate</p>
          <h2 className="script">Work With Me</h2>
          <div className="contact__lines">
            <span>
              <a href="mailto:aditisingh.collabs@gmail.com">
                aditisingh.collabs@gmail.com
              </a>
            </span>
            <span>
              <a
                href="https://instagram.com/thetinyaditi"
                target="_blank"
                rel="noreferrer"
              >
                @thetinyaditi
              </a>
            </span>
          </div>
          <a href="#" className="btn">
            Download Media Kit
          </a>
        </div>
      </section>

      {/* ============================== FOOTER ============================ */}
      <footer className="footer">
        © {new Date().getFullYear()} <span>thetinyaditi</span> · Lifestyle &amp;
        Content · Berlin
      </footer>
    </>
  )
}
