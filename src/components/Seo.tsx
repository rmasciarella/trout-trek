import { useEffect } from 'react'

interface SeoProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  type?: string
  jsonLd?: Record<string, unknown>
}

const BASE_URL = 'https://www.trout-trek.com'
const DEFAULT_TITLE = 'Trout Trek — Handcrafted Fly Rods'
const DEFAULT_DESC =
  'Handcrafted fly fishing rods built with heritage techniques and modern precision. Bamboo, fiberglass, and hybrid rods from the White Mountains, NH.'
const DEFAULT_OG = `${BASE_URL}/og-image-v2.png`

export function Seo({
  title,
  description = DEFAULT_DESC,
  canonical,
  ogImage = DEFAULT_OG,
  type = 'website',
  jsonLd,
}: SeoProps) {
  const fullTitle = title ? `${title} | Trout Trek` : DEFAULT_TITLE

  useEffect(() => {
    document.title = fullTitle

    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:image', ogImage, 'property')
    setMeta('og:type', type, 'property')
    setMeta('twitter:title', fullTitle, 'name')
    setMeta('twitter:description', description, 'name')
    setMeta('twitter:image', ogImage, 'name')

    if (canonical) {
      setMeta('og:url', `${BASE_URL}${canonical}`, 'property')
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = `${BASE_URL}${canonical}`
    }

    // JSON-LD
    const existingScript = document.querySelector('script[data-seo-jsonld]')
    if (jsonLd) {
      const script = existingScript || document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-seo-jsonld', 'true')
      script.textContent = JSON.stringify(jsonLd)
      if (!existingScript) document.head.appendChild(script)
    } else if (existingScript) {
      existingScript.remove()
    }

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [fullTitle, description, canonical, ogImage, type, jsonLd])

  return null
}

function setMeta(key: string, value: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = value
}
