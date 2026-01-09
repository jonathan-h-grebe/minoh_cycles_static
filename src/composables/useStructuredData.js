import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export function useStructuredData(type, data = {}) {
  const { t, locale } = useI18n()

  const generateLocalBusinessSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: t('structured.business.name'),
      description: t('structured.business.description'),
      url: 'https://minohcycles.com',
      image: 'https://minohcycles.com/assets/viator_tour_combo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: t('structured.business.address.street'),
        addressLocality: t('structured.business.address.city'),
        addressRegion: t('structured.business.address.region'),
        postalCode: t('structured.business.address.postalCode'),
        addressCountry: 'JP'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.8268,
        longitude: 135.4698
      },
      telephone: '+81-90-3999-3087',
      priceRange: '¥¥',
      openingHours: 'Mo-Su 09:00-17:00',
      sameAs: [
        'https://www.instagram.com/minoh.cycle.tours/',
        'https://www.youtube.com/@MinohCycles'
      ]
    }
  }

  const generateTourSchema = () => {
    const tourData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: data.name || t('toursList.tours.katsuojiMinohFalls.name'),
      description: data.description || t('toursList.tours.katsuojiMinohFalls.description'),
      image: data.image || 'https://minohcycles.com/assets/viator_tour_combo.png',
      brand: {
        '@type': 'Organization',
        name: 'Minoh Cycles'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'JPY',
        price: data.price || '15000',
        availability: 'https://schema.org/InStock',
        url: data.url || 'https://minohcycles.com/en/tours/katsuoji-minoh-falls',
        validFrom: '2024-01-01'
      },
      aggregateRating: data.rating ? {
        '@type': 'AggregateRating',
        ratingValue: data.rating.value || '5.0',
        reviewCount: data.rating.count || '50'
      } : undefined
    }

    // Remove undefined fields
    if (!tourData.aggregateRating) {
      delete tourData.aggregateRating
    }

    return tourData
  }

  const schemaData = computed(() => {
    switch (type) {
      case 'localBusiness':
        return generateLocalBusinessSchema()
      case 'tour':
        return generateTourSchema()
      default:
        return null
    }
  })

  if (schemaData.value) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schemaData.value)
        }
      ]
    })
  }
}
