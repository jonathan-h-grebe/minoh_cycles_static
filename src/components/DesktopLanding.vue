<template>
  <div class="desktop-landing">
    <header class="header flex justify-between items-center rounded-b-lg shadow-sm">
      <div class="text-2xl font-bold text-gray-800">
        Minoh Cycles
      </div>
      <div class="flex items-center space-x-6">
        <nav class="space-x-4">
          <router-link to="/tours" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.tours') }}</router-link>
          <router-link to="/bikes" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.bikes') }}</router-link>
          <router-link to="/about" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.about') }}</router-link>
          <a href="#book" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.bookNow') }}</a>
        </nav>
        <div class="language-selector">
          <select v-model="currentLocale" @change="changeLanguage" class="lang-select">
            <option value="en">EN</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </header>

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
          <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" class="cta-button">{{ $t('hero.cta') }}</a>
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
            <img src="/assets/taki_landscape.JPG" alt="Minoh Falls waterfall" class="feature-img">
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
        <div class="feature-row">
          <div class="feature-content">
            <h3>{{ $t('tours.accessibility.title') }}</h3>
            <p>{{ $t('tours.accessibility.description') }}</p>
          </div>
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
              <div class="station-end">Sakurai Station</div>
            </div>
            <a href="https://maps.app.goo.gl/ZSb7GFpuHcDHNjWT6" target="_blank" rel="noopener noreferrer" class="total-time-link">{{ $t('route.totalTime') }}</a>
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
            <p>{{ $t('bikes.description') }}</p>
            <a href="#bikes" class="bike-link">{{ $t('bikes.viewAll') }}</a>
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
        <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" class="cta-button-large">{{ $t('cta.button') }}</a>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'DesktopLanding',
  setup() {
    const { locale } = useI18n()
    const currentLocale = ref(locale.value)

    const changeLanguage = () => {
      locale.value = currentLocale.value
    }

    const scrollToTours = () => {
      const toursSection = document.getElementById('tours')
      if (toursSection) {
        const startPosition = window.pageYOffset
        const targetPosition = toursSection.offsetTop - 60 // Account for fixed header
        const distance = targetPosition - startPosition
        const duration = 500 // 1 second
        let startTime = null

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)

          // Easing function for smooth animation
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
      changeLanguage,
      scrollToTours
    }
  }
}
</script>

<style scoped>
.desktop-landing {
  font-family: 'Inter', sans-serif;
  color: #333;
}

.header {
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.language-selector {
  display: flex;
  align-items: center;
}

.lang-select {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.lang-select:hover {
  border-color: #9ca3af;
}

.lang-select:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

/* Hero Section */
.hero-section {
  background-image: url('/assets/deep_image.jpg');
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

.cta-button {
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  background-color: #1d4ed8;
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

/* Train Route Infographic */
.train-route-infographic {
  background-color: #f1f5f9;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

.train-route-infographic h4 {
  margin: 0 0 1rem 0;
  color: #1e293b;
  font-weight: 600;
}

.route-step {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.station {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.8rem;
  margin: 0.25rem;
}

.arrow {
  color: #64748b;
  font-weight: bold;
  margin: 0 0.5rem;
}

.time {
  background-color: #10b981;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.75rem;
  margin: 0.25rem;
}

.change-info {
  font-size: 0.75rem;
  color: #64748b;
  margin: 0.75rem 0;
  font-style: italic;
}

.total-time {
  background-color: #1e293b;
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 1rem;
  font-size: 0.8rem;
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

.train-route-infographic-full .arrow-time-compact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.25rem 0;
}

.train-route-infographic-full .time-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
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

.train-route-infographic-full .total-time-link {
  display: block;
  background-color: #1e293b;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 700;
  margin-top: 1.5rem;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid #1e293b;
  transition: all 0.3s ease;
  cursor: pointer;
}

.train-route-infographic-full .total-time-link:hover {
  background-color: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -5px rgba(37, 99, 235, 0.3);
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
}

.cta-button-large:hover {
  background-color: #1d4ed8;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .feature-row,
  .bikes-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .feature-images {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>