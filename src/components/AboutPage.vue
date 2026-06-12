<template>
  <div class="about-page">
    <AppHeader />

    <section class="about-section">
      <div class="about-container">

        <div class="about-row">
          <div class="about-text">
            <h2 class="about-title">{{ $t('aboutPage.title1') }}</h2>
            <p class="bio-text">{{ $t('aboutPage.intro') }}</p>
          </div>
          <div class="about-photo-wrap">
            <img src="/assets/4_riders_outside_katsuoji.jpg" alt="Riders outside Katsuoji Temple" class="about-photo" />
          </div>
        </div>

        <div class="row-divider"></div>

        <div class="about-row">
          <div class="about-text">
            <h1 class="about-title">{{ $t('aboutPage.title2') }}</h1>
            <p class="bio-text">{{ $t('aboutPage.bio1') }}</p>
            <p class="bio-text">{{ $t('aboutPage.bio2') }}</p>
            <p class="bio-text">{{ $t('aboutPage.bio3') }}</p>
            <p class="bio-text">{{ $t('aboutPage.bio4') }}</p>
            <p class="bio-text">{{ $t('aboutPage.bio5') }}</p>
            <div class="social-links">
              <a
                href="https://www.instagram.com/minoh.cycle.tours/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@MinohCycles"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
              >
                YouTube
              </a>
            </div>
            <router-link to="/" class="back-button">{{ $t('comingSoon.backToTours') }}</router-link>
          </div>
          <div class="about-photo-wrap">
            <img src="/assets/just_me.jpg" alt="Jonathan, your guide" class="about-photo portrait" />
          </div>
        </div>

      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import { useStructuredData } from '@/composables/useStructuredData'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'AboutPage',
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    useSeo('about')
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
  background-color: #1a1a1a;
}

.about-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
}

.about-container {
  max-width: 1100px;
  width: 100%;
}

.about-row {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.about-text {
  flex: 1;
  color: white;
}

.row-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 3rem 0;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem;
}

.bio-text {
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
  opacity: 0.9;
  line-height: 1.75;
  color: #e5e5e5;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

.social-link {
  color: #e91e63;
  text-decoration: underline;
  text-decoration-color: rgba(233, 30, 99, 0.5);
  transition: text-decoration-color 0.3s ease;
  font-weight: 600;
  font-size: 1rem;
}

.social-link:hover {
  text-decoration-color: #e91e63;
}

.back-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 0.875rem 1.75rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #1d4ed8;
}

.about-photo-wrap {
  flex-shrink: 0;
  width: 400px;
}

.about-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  display: block;
}

.about-photo.portrait {
  height: 480px;
  object-position: top center;
}

@media (max-width: 900px) {
  .about-row {
    flex-direction: column;
    gap: 2rem;
  }

  .about-row:last-child {
    flex-direction: column-reverse;
  }

  .about-photo-wrap {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }

  .about-photo.portrait {
    height: 380px;
  }

  .about-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 5rem 1.25rem 3rem;
  }

  .about-photo {
    height: 220px;
  }

  .about-photo.portrait {
    height: 300px;
  }
}
</style>
