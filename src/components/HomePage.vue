<template>
  <div class="homepage">
    <AppHeader />
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text fade-in">
          <p class="brand-name">{{ $t('hero.brandName') }}</p>
          <h1 class="hero-title">
            {{ $t('hero.title') }}
          </h1>
          <p class="hero-subtitle">
            {{ $t('hero.subtitle') }}
          </p>
          <div class="cta-buttons">
            <router-link :to="`/${currentLocale}/tours`" class="cta-button primary">View Tours</router-link>
            <router-link :to="`/${currentLocale}/rentals`" class="cta-button secondary">Rent An E-Bike</router-link>
          </div>
        </div>
      </div>
      <!-- Scroll Down Indicator -->
      <div class="scroll-indicator" @click="scrollToTours">
        <div class="scroll-text">{{ $t('hero.scrollDown') }}</div>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>

    <!-- Tours Section -->
    <section id="tours" class="tours-section">
      <div class="container">
        <h2 class="section-title">{{ $t('tours.sectionTitle') }}</h2>

        <!-- Waterfall & Temple Feature -->
        <div class="feature-row">
          <div class="feature-content">
            <h3>{{ $t('tours.waterfall.title') }}</h3>
            <p>
              <i18n-t keypath="tours.waterfall.description" tag="span">
                <template #minohFallsLink>
                  <a :href="currentLocale === 'ja' ? 'https://www.mino-park.jp/about/182/' : 'https://enjoy-osaka-kyoto-kobe.com/article/a/minoh-waterfall-point/'" target="_blank" rel="noopener noreferrer" class="temple-link">{{ currentLocale === 'ja' ? '箕面大滝' : 'Minoh Falls' }}</a>
                </template>
                <template #katsuojiLink>
                  <a :href="currentLocale === 'ja' ? 'https://katsuo-ji-temple.or.jp/' : 'https://katsuo-ji-temple.or.jp/audioguidance/index.php'" target="_blank" rel="noopener noreferrer" class="temple-link">{{ currentLocale === 'ja' ? '勝尾寺' : 'Katsuoji Temple' }}</a>
                </template>
              </i18n-t>
            </p>
          </div>
          <div class="feature-images">
            <img src="/assets/minoh_falls_landscape.JPG" alt="Minoh Falls waterfall" class="feature-img">
            <img src="/assets/view_of_pond_at_katsuoji.jpg" alt="Katsuoji Temple pond" class="feature-img">
          </div>
        </div>

        <!-- Cultural Experience -->
        <div class="feature-row reverse">
          <div class="feature-images">
            <img src="/assets/water_god_shrine.jpg" alt="Water god shrine" class="feature-img">
            <img src="/assets/boys_at_katsuoji_with_mountain_view.jpg" alt="Visitors at temple with mountain view" class="feature-img">
          </div>
          <div class="feature-content">
            <h3>{{ $t('tours.cultural.title') }}</h3>
            <p>{{ $t('tours.cultural.description') }}</p>
          </div>
        </div>

        <!-- E-Bike Adventure -->
        <div class="feature-row">
          <div class="feature-content">
            <h3>{{ $t('tours.ebike.title') }}</h3>
            <p>{{ $t('tours.ebike.description') }}</p>
          </div>
          <div class="feature-images">
            <img src="/assets/bike_infront_of_taki.JPG" alt="E-bike at Minoh Falls" class="feature-img">
            <img src="/assets/riding_bikes_on_mountain_road.jpg" alt="Riders on mountain road" class="feature-img">
          </div>
        </div>

        <!-- Efficiency -->
        <div class="feature-row reverse">
          <div class="feature-images">
            <img src="/assets/group_picture_with_view.jpg" alt="Group photo with scenic view" class="feature-img">
            <img src="/assets/riders_together.jpg" alt="Riders together" class="feature-img">
          </div>
          <div class="feature-content">
            <h3>{{ $t('tours.efficiency.title') }}</h3>
            <p>{{ $t('tours.efficiency.description') }}</p>
          </div>
        </div>

        <!-- Accessibility -->
        <div class="accessibility-section">
          <div class="accessibility-text">
            <h3>{{ $t('tours.accessibility.title') }}</h3>
            <p>{{ $t('tours.accessibility.description') }}</p>
          </div>
          <div class="accessibility-visuals">
            <div class="train-route-infographic-full">
              <div class="route-vertical">
                <div class="station-start-with-icon">
                  <span class="train-icon">🚃</span>
                  Osaka-Umeda Station
                </div>
                <div class="arrow-with-change">
                  <span class="arrow-down">↓</span>
                  <span class="line-info">{{ $t('route.takarazukaLine') }}</span>
                  <span class="time">15 min</span>
                </div>
                <div class="station-transfer">Ishibashi Handai-Mae</div>
                <div class="arrow-with-change">
                  <span class="arrow-down">↓</span>
                  <span class="change-info">{{ $t('route.changeToMinoh') }}</span>
                  <span class="time">5 min</span>
                </div>
                <div class="station-transfer">Sakurai Station</div>
                <div class="arrow-with-change">
                  <span class="arrow-down">↓</span>
                  <span class="change-info">{{ $t('route.walkToMinohCycles') }}</span>
                  <span class="time">10 min</span>
                </div>
                <a href="https://maps.app.goo.gl/duLA4qhKMkeXgdkd9" target="_blank" rel="noopener noreferrer" class="station-end">Minoh Cycles</a>
              </div>
            </div>
            <iframe class="google-maps-embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26203.169862743463!2d135.42458197431637!3d34.82112890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fb9093906f1b%3A0x4a18e9ef8a34f850!2sMinoh%20Cycles!5e0!3m2!1sen!2sjp!4v1763531840085!5m2!1sen!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Bikes Section -->
    <section id="bikes" class="bikes-section">
      <div class="container">
        <h2 class="section-title">{{ $t('bikes.sectionTitle') }}</h2>
        <div class="bikes-content">
          <div class="bike-info">
            <h3>{{ $t('bikes.title') }}</h3>
            <p>
              <i18n-t keypath="bikes.description" tag="span">
                <template #insuranceLink>
                  <router-link :to="`/${currentLocale}/insurance`" class="insurance-link">{{ $t('bikes.insuranceLink') }}</router-link>
                </template>
              </i18n-t>
            </p>
            <router-link :to="`/${currentLocale}/bikes`" class="bike-link">{{ $t('bikes.viewAll') }}</router-link>
          </div>
          <img src="/assets/fitting_rider_to_trek_bike.jpg" alt="Professional bike fitting" class="bike-img">
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="book" class="cta-section">
      <div class="container">
        <h2>{{ $t('cta.title') }}</h2>
        <p>{{ $t('cta.description') }}</p>
        <p class="schedule-info">{{ $t('cta.schedule') }}</p>
        <div class="booking-widget-wrapper">
          <BookingWidget
            :button-text="$t('cta.button')"
            button-class="cta-button-large"
          />
        </div>
        <div class="social-media">
          <p class="social-text">{{ currentLocale === 'ja' ? '最新の写真とアップデートはこちら' : 'Follow us for latest photos and updates' }}</p>
          <p class="copyright-text">© 2026 Minoh Cycle Tours合同会社</p>
          <p class="legal-links">
            <router-link :to="`/${currentLocale}/commerce-disclosure`" class="disclosure-link">
              {{ currentLocale === 'ja' ? '特定商取引法に基づく表記' : 'Commerce Disclosure' }}
            </router-link>
          </p>
          <a href="https://www.instagram.com/minoh.cycle.tours/" target="_blank" rel="noopener noreferrer" class="instagram-link">
            <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://www.youtube.com/@MinohCycles" target="_blank" rel="noopener noreferrer" class="instagram-link">
            <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import { useStructuredData } from '@/composables/useStructuredData'
import AppHeader from './AppHeader.vue'
import BookingWidget from './BookingWidget.vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    BookingWidget
  },
  setup() {
    // Apply SEO
    useSeo('home')

    // Add structured data for local business
    useStructuredData('localBusiness')

    const { locale } = useI18n()
    const route = useRoute()
    const currentLocale = ref(route.meta.locale || locale.value)

    const scrollToTours = () => {
      const toursSection = document.getElementById('tours')
      if (toursSection) {
        const startPosition = window.pageYOffset
        const targetPosition = toursSection.offsetTop - 60
        const distance = targetPosition - startPosition
        const duration = 500
        let startTime = null

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)

          const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1

          window.scrollTo(0, startPosition + distance * ease)

          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        }

        requestAnimationFrame(animation)
      }
    }

    return {
      currentLocale,
      scrollToTours
    }
  }
}
</script>

<style scoped>
.homepage {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  background-image: url('/assets/minoh_mountain_road.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

.brand-name {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.cta-button.primary {
  background-color: #2563eb;
  color: white;
}

.cta-button.primary:hover {
  background-color: #1d4ed8;
}

.cta-button.secondary {
  background-color: #10b981;
  color: white;
}

.cta-button.secondary:hover:not(.disabled) {
  background-color: #059669;
}

.cta-button.disabled {
  background-color: #9ca3af;
  color: #e5e7eb;
  cursor: not-allowed;
  opacity: 0.7;
}

.cta-button.disabled:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.tooltip {
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1e293b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #1e293b;
}

/* Scroll Down Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: all 0.3s ease;
  z-index: 20;
}

.scroll-indicator:hover {
  opacity: 1;
  transform: translateX(-50%) translateY(-5px);
}

.scroll-text {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Tours Section */
.tours-section {
  background-color: #f8fafc;
  padding-top: 6rem;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #1e293b;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
  padding: 3rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.feature-row.reverse {
  direction: rtl;
}

.feature-row.reverse > * {
  direction: ltr;
}

.feature-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.feature-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
}

.feature-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feature-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-img:hover {
  transform: scale(1.05);
}

/* Accessibility Section Layout */
.accessibility-section {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin-bottom: 6rem;
}

.accessibility-text {
  margin-bottom: 3rem;
}

.accessibility-text h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.accessibility-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
}

.accessibility-visuals {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.google-maps-embed {
  width: 100%;
  height: 100%;
  min-height: 450px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Full Width Train Route Infographic */
.train-route-infographic-full {
  background-color: #f1f5f9;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  width: 100%;
}

.train-route-infographic-full .route-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.train-route-infographic-full .station-start-with-icon {
  display: flex;
  align-items: center;
  width: 282px;
  gap: 0.75rem;
  background-color: #dc2626;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);
}

.train-route-infographic-full .train-icon {
  font-size: 1.5rem;
}

.train-route-infographic-full .station-start,
.train-route-infographic-full .station-end {
  background-color: #dc2626;
  color: white;
  width: 282px;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);
  border: 3px solid #b91c1c;
}

.train-route-infographic-full a.station-end {
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.train-route-infographic-full a.station-end:hover {
  background-color: #b91c1c;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(220, 38, 38, 0.5);
}

.train-route-infographic-full .station-transfer {
  background-color: #64748b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.85rem;
  opacity: 0.8;
}

.train-route-infographic-full .arrow-down {
  color: #2563eb;
  font-weight: bold;
  font-size: 2rem;
  margin: 0.25rem 0;
}

.train-route-infographic-full .time {
  background-color: #10b981;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
}

.train-route-infographic-full .line-info {
  font-size: 0.7rem;
  color: #64748b;
  font-style: italic;
}

.train-route-infographic-full .arrow-with-change {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.25rem 0;
}

.train-route-infographic-full .change-info {
  font-size: 0.75rem;
  color: #64748b;
  font-style: italic;
  background-color: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  white-space: nowrap;
}

/* Bikes Section */
.bikes-section {
  background-color: white;
  padding: 6rem 0;
}

.bikes-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.bike-info h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.bike-info p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1.5rem;
}

.insurance-link {
  color: #2563eb;
  text-decoration: underline;
  text-decoration-color: rgba(37, 99, 235, 0.5);
  transition: text-decoration-color 0.3s ease;
  font-weight: 600;
}

.insurance-link:hover {
  text-decoration-color: #2563eb;
}

.bike-link {
  display: inline-block;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease;
}

.bike-link:hover {
  border-bottom-color: #2563eb;
}

.bike-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
}

/* CTA Section */
.cta-section {
  background-color: #1e293b;
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.schedule-info {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2.5rem !important;
  display: inline-block;
  color: #60a5fa;
}

.booking-widget-wrapper {
  display: inline-block;
  margin-left: 1.25rem;
}

.cta-button-large {
  background-color: #2563eb;
  color: white;
  padding: 1.5rem 3rem;
  border: none;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin-left: 20px;
}

.cta-button-large:hover {
  background-color: #1d4ed8;
}

/* Social Media Section */
.social-media {
  margin-top: 3rem;
  text-align: center;
}

.social-text {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e1306c;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  border: 2px solid rgba(225, 48, 108, 0.3);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 0.5rem;
}

.instagram-link:hover {
  background-color: rgba(225, 48, 108, 0.1);
  border-color: #e1306c;
  transform: translateY(-2px);
}

.instagram-icon {
  width: 20px;
  height: 20px;
}

.copyright-text {
  font-size: 0.85rem;
  opacity: 0.5;
  margin-bottom: 0.5rem;
}

.legal-links {
  margin-bottom: 1.25rem;
}

.disclosure-link {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  transition: color 0.2s ease;
}

.disclosure-link:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* Temple Link Styling */
.temple-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.5);
  transition: text-decoration-color 0.3s ease;
}

.temple-link:hover {
  text-decoration-color: rgba(255, 255, 255, 1);
}

.feature-content .temple-link {
  color: #2563eb;
  text-decoration-color: rgba(37, 99, 235, 0.5);
}

.feature-content .temple-link:hover {
  text-decoration-color: #2563eb;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out forwards;
}

/* ========== Mobile Responsive ========== */
@media (max-width: 768px) {
  /* Hero */
  .hero-section {
    background-attachment: scroll;
    padding-top: 80px;
  }

  .hero-section::before {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .brand-name {
    font-size: 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.4;
  }

  .cta-buttons {
    gap: 1rem;
  }

  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .tooltip {
    font-size: 0.85rem;
  }

  .tooltip::after {
    border-width: 5px;
  }

  /* Hide scroll indicator on mobile */
  .scroll-indicator {
    display: none;
  }

  /* Container */
  .container {
    padding: 0 1rem;
  }

  /* Tours Section */
  .tours-section {
    padding-top: 3rem;
  }

  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
  }

  .feature-row.reverse {
    direction: ltr;
  }

  .feature-content h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .feature-content p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .feature-images {
    grid-template-columns: 1fr;
  }

  .feature-img:hover {
    transform: none;
  }

  /* Accessibility */
  .accessibility-section {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .accessibility-text {
    margin-bottom: 2rem;
  }

  .accessibility-text h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .accessibility-text p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .accessibility-visuals {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .google-maps-embed {
    min-height: 300px;
    border-radius: 8px;
  }

  .train-route-infographic-full {
    padding: 1.5rem;
  }

  .train-route-infographic-full .station-start-with-icon {
    width: auto;
    font-size: 0.95rem;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
  }

  .train-route-infographic-full .station-start,
  .train-route-infographic-full .station-end {
    width: auto;
    font-size: 0.95rem;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    border-width: 2px;
  }

  .train-route-infographic-full .train-icon {
    font-size: 1.2rem;
  }

  .train-route-infographic-full .route-vertical {
    gap: 0.4rem;
  }

  .train-route-infographic-full .station-transfer {
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
  }

  .train-route-infographic-full .arrow-down {
    font-size: 1.5rem;
    margin: 0.2rem 0;
  }

  .train-route-infographic-full .time {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
  }

  .train-route-infographic-full .line-info {
    font-size: 0.6rem;
  }

  .train-route-infographic-full .arrow-with-change {
    gap: 0.4rem;
    margin: 0.2rem 0;
  }

  .train-route-infographic-full .change-info {
    font-size: 0.65rem;
    padding: 0.2rem 0.6rem;
    border-radius: 10px;
  }

  /* Bikes Section */
  .bikes-section {
    padding: 3rem 0;
  }

  .bikes-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .bike-info h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .bike-info p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .bike-img {
    height: 250px;
    border-radius: 8px;
  }

  /* CTA Section */
  .cta-section {
    padding: 3rem 0;
  }

  .cta-section h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }

  .cta-section p {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .schedule-info {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .booking-widget-wrapper {
    margin-left: 0;
  }

  .cta-button-large {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 8px;
    margin-left: 0;
  }

  /* Social Media */
  .social-media {
    margin-top: 2rem;
  }

  .social-text {
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  .instagram-link {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }

  .instagram-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
