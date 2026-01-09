<template>
  <div class="about-page">
    <AppHeader />

    <section class="coming-soon-section">
      <div class="coming-soon-content">
        <h1 class="coming-soon-title">{{ $t('comingSoon.title') }}</h1>
        <p class="coming-soon-subtitle">
          <i18n-t keypath="comingSoon.about" tag="span">
            <template #viatorLink>
              <a
                href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2"
                target="_blank"
                rel="noopener noreferrer"
                class="viator-link"
              >
                Viator listing
              </a>
            </template>
          </i18n-t>
        </p>
        <p class="instagram-text">
          Follow us on
          <a
            href="https://www.instagram.com/minoh.cycle.tours/"
            target="_blank"
            rel="noopener noreferrer"
            class="instagram-link"
          >
            Instagram
          </a>
          and
          <a
            href="https://www.youtube.com/@MinohCycles"
            target="_blank"
            rel="noopener noreferrer"
            class="instagram-link"
          >
            YouTube
          </a>
          for the latest photos and updates!
        </p>
        <router-link to="/" class="back-button">{{ $t('comingSoon.backToTours') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { useStructuredData } from '@/composables/useStructuredData'
import AppHeader from './AppHeader.vue'

export default {
  name: 'AboutPage',
  components: {
    AppHeader
  },
  setup() {
    // Apply SEO
    useSeo('about')

    // Add structured data for local business
    useStructuredData('localBusiness')

    const { locale } = useI18n()
    const currentLocale = ref(locale.value)

    return {
      currentLocale
    }
  }
}
</script>

<style scoped>
.about-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

.coming-soon-section {
  background-image: url('/assets/group_picture_with_view.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.coming-soon-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.coming-soon-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.coming-soon-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.coming-soon-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
}

.instagram-text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.5;
}

.back-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #1d4ed8;
}

.viator-link {
  color: #60a5fa;
  text-decoration: underline;
  text-decoration-color: rgba(96, 165, 250, 0.5);
  transition: text-decoration-color 0.3s ease;
}

.viator-link:hover {
  text-decoration-color: #60a5fa;
}

.instagram-link {
  color: #e91e63;
  text-decoration: underline;
  text-decoration-color: rgba(233, 30, 99, 0.5);
  transition: text-decoration-color 0.3s ease;
  font-weight: 600;
}

.instagram-link:hover {
  text-decoration-color: #e91e63;
}

@media (max-width: 768px) {
  .coming-soon-title {
    font-size: 2rem;
  }
  
  .coming-soon-content {
    padding: 2rem;
    margin: 1rem;
  }
}
</style>