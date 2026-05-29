import { useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import InstagramEmbed from './InstagramEmbed.jsx'
import {
  profile,
  photos,
  stats,
  pillars,
  posts,
  reels,
  videos,
  collabs,
  reviews,
  postPlaceholders,
  reelPlaceholders,
} from './content.js'
import { fadeUp, fadeDown, scaleIn, popIn, container, viewport } from './motion.js'

const BURGUNDY = '#6b1f2a'
const CREAM = '#f5f0e8'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Stats', href: '#stats' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Collabs', href: '#collabs' },
  { label: 'Contact', href: '#contact' },
]

/* Wavy SVG divider — `fill` is the colour of the owning section. */
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

/* Reusable scroll-reveal wrapper. */
function Reveal({ children, variants = fadeUp, className, style, ...rest }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* Section heading block (eyebrow + script title) with stagger. */
function Heading({ eyebrow, title, center }) {
  return (
    <motion.div
      className={center ? 'center' : undefined}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <motion.p className="eyebrow" variants={fadeUp}>
        {eyebrow}
      </motion.p>
      <motion.h2 className="script" variants={fadeUp}>
        {title}
      </motion.h2>
    </motion.div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
      {/* ============================= NAVBAR ============================= */}
      <motion.nav
        className="nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav__inner">
          <ul className="nav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#hero" className="nav__brand">
            {profile.handle}
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
        {menuOpen && (
          <ul className="nav__drawer">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.nav>

      {/* ============================== HERO ============================== */}
      <header id="hero" className="section section--burgundy hero">
        {/* playful floating background blobs */}
        <motion.span
          className="blob blob--1"
          animate={{ y: [0, -26, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="blob blob--2"
          animate={{ y: [0, 22, 0], x: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="wrap"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Berlin · Lifestyle Creator
          </motion.p>
          <motion.h1 className="hero__headline" variants={fadeUp}>
            LIFESTYLE &amp; CONTENT
          </motion.h1>
          <motion.p className="hero__script" variants={fadeUp}>
            by {profile.name}
          </motion.p>

          <motion.div className="hero__roles" variants={fadeUp}>
            <span className="tag">Content Creator</span>
            <span className="tag">UGC Creator</span>
          </motion.div>

          <motion.div className="hero__portrait-wrap" variants={popIn}>
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Portrait src={photos.hero} className="hero__portrait" alt="Aditi" />
            </motion.div>
          </motion.div>

          <motion.p className="hero__tagline" variants={fadeUp}>
            Creating authentic content for ambitious women in Berlin.
          </motion.p>
        </motion.div>
        <Wave position="bottom" fill={CREAM} />
      </header>

      {/* ============================== STATS ============================= */}
      <section id="stats" className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <div className="wrap center">
          <Heading eyebrow="By the numbers" title="The Stats" center />
          <motion.div
            className="stats__grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {stats.map((s) => (
              <motion.div
                className="stat"
                key={s.label}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Wave position="bottom" fill={BURGUNDY} />
      </section>

      {/* ============================== ABOUT ============================= */}
      <section id="about" className="section section--burgundy">
        <Wave position="top" fill={CREAM} />
        <div className="wrap">
          <Heading eyebrow="Hello there" title="About Me" center />
          <div className="about__grid">
            <Reveal variants={scaleIn}>
              <Portrait src={photos.about} className="about__portrait" alt="Aditi" />
            </Reveal>
            <Reveal className="about__text" variants={fadeUp}>
              <p>
                I'm Aditi, an MBA student and Berlin-based content creator at{' '}
                <span className="handle">@{profile.handle}</span>. I create
                short-form video and lifestyle content for ambitious young women —
                covering student life, self-growth, and real everyday moments. My
                audience is 70K+ strong, predominantly women aged 17–29 who are
                building something.
              </p>
            </Reveal>
          </div>
        </div>
        <Wave position="bottom" fill={CREAM} />
      </section>

      {/* ========================= CONTENT PILLARS ======================== */}
      <section className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <div className="wrap center">
          <Heading eyebrow="Content pillars" title="What I Create" center />
          <motion.div
            className="pillars"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {pillars.map((p) => (
              <motion.span
                className="pillar"
                key={p}
                variants={popIn}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                {p}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <Wave position="bottom" fill={BURGUNDY} />
      </section>

      {/* ============================ PORTFOLIO =========================== */}
      <section id="portfolio" className="section section--burgundy">
        <Wave position="top" fill={CREAM} />
        <div className="wrap">
          <Heading eyebrow="Selected work" title="My Work" center />

          {/* POSTS — live Instagram embeds, or placeholders until added */}
          {posts.length > 0 ? (
            <motion.div
              className="embed-grid"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {posts.map((url) => (
                <motion.div className="embed-item" key={url} variants={scaleIn}>
                  <InstagramEmbed url={url} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="work__grid"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {postPlaceholders.map((c, i) => (
                <motion.div
                  key={i}
                  className={`work__card${c.img ? '' : ' ph'}`}
                  style={
                    c.img
                      ? undefined
                      : { background: `linear-gradient(150deg, ${c.from}, ${c.to})` }
                  }
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {c.img && <img className="card__img" src={c.img} alt={c.label} />}
                  <span className="work__label">{c.label}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* REELS — live Instagram embeds, or phone placeholders */}
          {reels.length > 0 ? (
            <motion.div
              className="embed-row"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {reels.map((url) => (
                <motion.div className="embed-item embed-item--reel" key={url} variants={scaleIn}>
                  <InstagramEmbed url={url} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="phones"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {reelPlaceholders.map((p, i) => (
                <motion.div
                  className="phone"
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="phone__notch" />
                  <div
                    className={`phone__screen${p.img ? '' : ' ph'}`}
                    style={
                      p.img
                        ? undefined
                        : { background: `linear-gradient(165deg, ${p.from}, ${p.to})` }
                    }
                  >
                    {p.img && <img className="card__img" src={p.img} alt={p.label} />}
                    <span className="phone__label">{p.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* SELF-HOSTED VIDEO REELS — your uploaded .mp4 files */}
          {videos.length > 0 && (
            <motion.div
              className="phones"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {videos.map((src) => (
                <motion.div
                  className="phone"
                  key={src}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="phone__notch" />
                  <div className="phone__screen">
                    <video
                      className="card__img"
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <span className="phone__label">Reel</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
        <Wave position="bottom" fill={CREAM} />
      </section>

      {/* =========================== BRAND COLLABS ======================== */}
      <section id="collabs" className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <div className="wrap center">
          <Heading eyebrow="Partnerships" title="Brands I've Worked With" center />
          <motion.div
            className="collabs__grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {collabs.map((c) => (
              <motion.div
                className="collab"
                key={c.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div
                  className="collab__logo"
                  style={{ background: `linear-gradient(150deg, ${c.from}, ${c.to})` }}
                >
                  {c.logo ? <img src={c.logo} alt={c.name} /> : c.short}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 className="collab__name">{c.name}</h3>
                  <p className="collab__desc">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Wave position="bottom" fill={BURGUNDY} />
      </section>

      {/* =========================== TESTIMONIALS ========================= */}
      <section className="section section--burgundy">
        <Wave position="top" fill={CREAM} />
        <div className="wrap center">
          <Heading eyebrow="Kind words" title="What They Say" center />
          <motion.div
            className="reviews"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {reviews.map((r) => (
              <motion.div
                className="review"
                key={r.brand}
                variants={scaleIn}
                whileHover={{ y: -6 }}
              >
                <div className="review__stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="review__quote">“{r.quote}”</p>
                <div className="review__brand">{r.brand}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Wave position="bottom" fill={CREAM} />
      </section>

      {/* ============================== CONTACT =========================== */}
      <section id="contact" className="section section--cream">
        <Wave position="top" fill={BURGUNDY} />
        <motion.div
          className="wrap contact"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Let's collaborate
          </motion.p>
          <motion.h2 className="script" variants={fadeUp}>
            Work With Me
          </motion.h2>
          <motion.div className="contact__lines" variants={fadeUp}>
            <span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
            <span>
              <a href={profile.instagram} target="_blank" rel="noreferrer">
                @{profile.handle}
              </a>
            </span>
          </motion.div>
          <motion.a
            href={profile.mediaKit || '#'}
            className="btn"
            {...(profile.mediaKit ? { download: true } : {})}
            variants={popIn}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Media Kit
          </motion.a>
        </motion.div>
      </section>

      {/* ============================== FOOTER ============================ */}
      <footer className="footer">
        © {new Date().getFullYear()} <span>{profile.handle}</span> · Lifestyle &amp;
        Content · Berlin
      </footer>
    </MotionConfig>
  )
}

/* Circular/rounded portrait: real photo if provided, else gradient. */
function Portrait({ src, className, alt }) {
  if (src) {
    return <img src={src} className={className} alt={alt} />
  }
  return <div className={`${className} ph`} role="img" aria-label={alt} />
}
