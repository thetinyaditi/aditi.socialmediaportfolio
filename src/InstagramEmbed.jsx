import { useEffect, useRef } from 'react'

// Load Instagram's official embed script exactly once and reuse it.
let scriptPromise = null
function loadInstagramScript() {
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.instgrm) return resolve()
    const existing = document.querySelector('script[src*="instagram.com/embed.js"]')
    if (existing) {
      existing.addEventListener('load', () => resolve())
      if (window.instgrm) resolve()
      return
    }
    const s = document.createElement('script')
    s.src = 'https://www.instagram.com/embed.js'
    s.async = true
    s.onload = () => resolve()
    document.body.appendChild(s)
  })
  return scriptPromise
}

/**
 * Renders a live Instagram post or reel from its permalink.
 * Instagram's script replaces the <blockquote> with an iframe.
 */
export default function InstagramEmbed({ url, captioned = false }) {
  const ref = useRef(null)

  useEffect(() => {
    let active = true
    loadInstagramScript().then(() => {
      if (active && window.instgrm?.Embeds) {
        window.instgrm.Embeds.process()
      }
    })
    return () => {
      active = false
    }
  }, [url])

  return (
    <blockquote
      ref={ref}
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      data-instgrm-captioned={captioned ? '' : undefined}
    >
      <a href={url} target="_blank" rel="noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  )
}
