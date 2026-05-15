<template>
  <div class="about-page">
    <AppHeader />

    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <h1 class="about-title">About Your Guide</h1>
          <p class="bio-text">
            Hi, I'm Jonathan — a cyclist, Minoh local, and your guide for the day.
          </p>
          <p class="bio-text">
            I founded Minoh Cycle Tours, and run it as a way to share my favourite part of Osaka with visitors and locals by bike.
          </p>
          <p class="bio-text">
            I'm originally from the UK and have called Japan home since 2017, settling in Minoh in 2021.
            What drew me here was exactly what I hope to share with you — lush nature and mountain trails,
            just 30 minutes from central Osaka but feeling like a completely different world.
          </p>
          <p class="bio-text">
            The idea for Minoh Cycle Tours came from a simple moment. A friend visited, and I took him out
            for a ride through the area. Afterwards he said something that stuck with me: "Without knowing
            you, I'd never have thought to do this — cycling was such a fun way to visit Katsuoji Temple
            and the surrounding area."
          </p>
          <p class="bio-text">
            That's exactly what this is. Not just a bike ride, but a way into a side of Osaka that most
            visitors never see.
          </p>
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
          <img src="/assets/just_me.jpg" alt="Jonathan, your guide" class="about-photo" />
        </div>
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
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1100px;
  width: 100%;
}

.about-content {
  flex: 1;
  color: white;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: white;
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
  width: 340px;
}

.about-photo {
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: top center;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  display: block;
}

@media (max-width: 900px) {
  .about-container {
    flex-direction: column-reverse;
    gap: 2.5rem;
  }

  .about-photo-wrap {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }

  .about-photo {
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
    height: 300px;
  }
}
</style>
