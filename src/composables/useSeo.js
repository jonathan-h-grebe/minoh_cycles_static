import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useSeo(seoKey) {
  const { t, locale } = useI18n()
  const route = useRoute()

  // Generate canonical URL
  const canonicalUrl = computed(() => {
    const baseUrl = 'https://minohcycles.com'
    return `${baseUrl}${route.path}`
  })

  // Generate alternate URLs for hreflang
  const alternateUrls = computed(() => {
    const path = route.path.replace(/^\/(en|ja)/, '')
    return {
      en: `https://minohcycles.com/en${path}`,
      ja: `https://minohcycles.com/ja${path}`
    }
  })

  // Get SEO content from translations
  const title = computed(() => t(`seo.${seoKey}.title`))
  const description = computed(() => t(`seo.${seoKey}.description`))
  const keywords = computed(() => t(`seo.${seoKey}.keywords`))

  // Apply meta tags
  useHead({
    title: title.value,
    htmlAttrs: {
      lang: locale.value
    },
    meta: [
      // Basic meta tags
      { name: 'description', content: description.value },
      { name: 'keywords', content: keywords.value },

      // Open Graph tags
      { property: 'og:title', content: title.value },
      { property: 'og:description', content: description.value },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale.value === 'ja' ? 'ja_JP' : 'en_US' },
      { property: 'og:site_name', content: 'Minoh Cycles' },

      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title.value },
      { name: 'twitter:description', content: description.value },

      // Geo tags for local SEO
      { name: 'geo.region', content: 'JP-27' },
      { name: 'geo.placename', content: 'Minoh, Osaka' },
      { name: 'geo.position', content: '34.8268;135.4698' },

      // Language alternates
      { name: 'language', content: locale.value }
    ],
    link: [
      // Canonical
      { rel: 'canonical', href: canonicalUrl.value },

      // Hreflang tags
      { rel: 'alternate', hreflang: 'en', href: alternateUrls.value.en },
      { rel: 'alternate', hreflang: 'ja', href: alternateUrls.value.ja },
      { rel: 'alternate', hreflang: 'x-default', href: alternateUrls.value.en }
    ]
  })
}
