// ============================================================
//   👋  EDIT THIS FILE TO ADD YOUR OWN CONTENT
//   Nothing else needs to change. After editing, redeploy
//   (push to GitHub — Vercel rebuilds automatically).
//
//   HOW TO ADD PHOTOS
//   1. Drop image files into the  public/photos/  folder.
//   2. Reference them below as '/photos/your-file.jpg'.
//
//   HOW TO ADD REELS / POSTS (Instagram embeds)
//   1. Open the post/reel on Instagram in a browser.
//   2. Copy its link (looks like
//      https://www.instagram.com/p/ABC123/  or  /reel/ABC123/ ).
//   3. Paste it into the `posts` or `reels` arrays below.
//   The real Instagram post will render live on your page.
//
//   HOW TO ADD A MEDIA KIT
//   1. Put your PDF in  public/  (e.g. public/media-kit.pdf).
//   2. Set profile.mediaKit below to '/media-kit.pdf'.
// ============================================================

export const profile = {
  name: 'Aditi',
  handle: 'thetinyaditi',
  email: 'aditisingh.collabs@gmail.com',
  instagram: 'https://instagram.com/thetinyaditi',
  // Leave '' to keep the button as a placeholder.
  mediaKit: '',
}

// Portrait photos. Leave '' to show the gradient placeholder.
export const photos = {
  hero: '/photos/hero.jpg',
  about: '/photos/about.png',
}

export const stats = [
  { num: '70K+', label: 'Account Reach' },
  { num: '12%', label: 'Engagement Rate' },
  { num: '17–29', label: 'Core Audience Age' },
  { num: '2+', label: 'Brand Collabs' },
]

export const pillars = [
  'Quotes for Women',
  'Student Life',
  'Berlin Lifestyle',
  'Girls Who Get Things Done',
]

// ---- INSTAGRAM POSTS (square/photo) ----
// Paste post links here. Each one renders as a live embed.
// While empty, polished placeholder cards are shown instead.
export const posts = [
  // 'https://www.instagram.com/p/XXXXXXXXXXX/',
  // 'https://www.instagram.com/p/YYYYYYYYYYY/',
  // 'https://www.instagram.com/p/ZZZZZZZZZZZ/',
  // 'https://www.instagram.com/p/WWWWWWWWWWW/',
]

// ---- INSTAGRAM REELS / VIDEOS (vertical) ----
// Paste reel links here. While empty, phone-frame placeholders show.
export const reels = [
  // 'https://www.instagram.com/reel/XXXXXXXXXXX/',
  // 'https://www.instagram.com/reel/YYYYYYYYYYY/',
  // 'https://www.instagram.com/reel/ZZZZZZZZZZZ/',
]

export const collabs = [
  {
    short: 'IK',
    name: 'Ikono Berlin',
    desc: 'Reels featured on their official page.',
    logo: '', // optional: '/photos/ikono.png'
    from: '#6b1f2a',
    to: '#b6707a',
  },
  {
    short: 'TG',
    name: 'The Greens Berlin',
    desc: 'Gifted content collaboration.',
    logo: '',
    from: '#3f5b2f',
    to: '#9bb06a',
  },
]

export const reviews = [
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

// Placeholder cards shown until you add Instagram links above.
// `img` shows a real photo; otherwise a gradient fills the card.
export const postPlaceholders = [
  { label: 'Post', img: '/photos/post-1.jpg' },
  { label: 'Post', from: '#8a3a3f', to: '#e3c9a8' },
  { label: 'Reel', from: '#5b1a24', to: '#c89b6a' },
  { label: 'Post', from: '#7e2c38', to: '#d8a9a0' },
]
export const reelPlaceholders = [
  { label: 'Reel', img: '/photos/reel-1.jpg' },
  { label: 'Reel', img: '/photos/reel-2.jpg' },
  { label: 'Video', from: '#561620', to: '#b6707a' },
]
