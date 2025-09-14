<template>
  <div class="mobile-landing">
    <!-- Hamburger Menu Button -->
    <div class="fixed top-4 right-4 z-50">
      <button 
        @click="toggleMenu" 
        class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-black bg-opacity-20 backdrop-blur-sm"
      >
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Container -->
    <div 
      v-show="menuOpen" 
      @click="closeMenuOnBackdrop"
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
    >
      <div class="absolute top-0 left-0 w-full bg-white rounded-b-lg shadow-lg">
        <div class="flex justify-end p-4">
          <button 
            @click="closeMenu" 
            class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-100"
          >
            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <a href="#tours" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.tours') }}</a>
        <router-link to="/bikes" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.bikes') }}</router-link>
        <router-link to="/about" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.about') }}</router-link>
        <a href="#book" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.bookNow') }}</a>
        <div class="language-selector-mobile p-4">
          <select v-model="currentLocale" @change="changeLanguage" class="lang-select-mobile">
            <option value="en">EN</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <p class="brand-name">{{ $t('hero.brandName') }}</p>
          <h1 class="hero-title">
            <i18n-t keypath="hero.title" tag="span">
              <template #minohFallsLink>
                <a href="https://enjoy-osaka-kyoto-kobe.com/article/a/minoh-waterfall-point/" target="_blank" rel="noopener noreferrer" class="temple-link">Minoh Falls</a>
              </template>
              <template #katsuojiLink>
                <a href="https://katsuo-ji-temple.or.jp/audioguidance/index.php" target="_blank" rel="noopener noreferrer" class="temple-link">Katsuoji Temple</a>
              </template>
            </i18n-t>
          </h1>
          <p class="hero-subtitle">
            {{ $t('hero.subtitle') }}
          </p>
          <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" class="cta-button">{{ $t('hero.cta') }}</a>
        </div>
      </div>
    </section>

    <!-- Tours Section -->
    <section id="tours" class="tours-section">
      <div class="container">
        <h2 class="section-title">{{ $t('tours.sectionTitle') }}</h2>
        
        <!-- Waterfall & Temple Feature -->
        <div class="feature-card">
          <img src="/assets/taki_landscape.JPG" alt="Minoh Falls waterfall" class="feature-img-mobile">
          <div class="feature-content">
            <h3>{{ $t('tours.waterfall.title') }}</h3>
            <p>
              <i18n-t keypath="tours.waterfall.description" tag="span">
                <template #minohFallsLink>
                  <a href="https://enjoy-osaka-kyoto-kobe.com/article/a/minoh-waterfall-point/" target="_blank" rel="noopener noreferrer" class="temple-link">Minoh Falls</a>
                </template>
                <template #katsuojiLink>
                  <a href="https://katsuo-ji-temple.or.jp/audioguidance/index.php" target="_blank" rel="noopener noreferrer" class="temple-link">Katsuoji Temple</a>
                </template>
              </i18n-t>
            </p>
          </div>
          <img src="/assets/view_of_pond_at_katsuoji.jpg" alt="Katsuoji Temple pond" class="feature-img-mobile">
        </div>

        <!-- Cultural Experience -->
        <div class="feature-card">
          <img src="/assets/water_god_shrine.jpg" alt="Water god shrine" class="feature-img-mobile">
          <div class="feature-content">
            <h3>{{ $t('tours.cultural.title') }}</h3>
            <p>{{ $t('tours.cultural.description') }}</p>
          </div>
          <img src="/assets/boys_at_katsuoji_with_mountain_view.jpg" alt="Visitors at temple with mountain view" class="feature-img-mobile">
        </div>

        <!-- E-Bike Adventure -->
        <div class="feature-card">
          <img src="/assets/bike_infront_of_taki.JPG" alt="E-bike at Minoh Falls" class="feature-img-mobile">
          <div class="feature-content">
            <h3>{{ $t('tours.ebike.title') }}</h3>
            <p>{{ $t('tours.ebike.description') }}</p>
          </div>
          <img src="/assets/riding_bikes_on_mountain_road.jpg" alt="Riders on mountain road" class="feature-img-mobile">
        </div>

        <!-- Efficiency -->
        <div class="feature-card">
          <img src="/assets/group_picture_with_view.jpg" alt="Group photo with scenic view" class="feature-img-mobile">
          <div class="feature-content">
            <h3>{{ $t('tours.efficiency.title') }}</h3>
            <p>{{ $t('tours.efficiency.description') }}</p>
          </div>
          <img src="/assets/riders_together.jpg" alt="Riders together" class="feature-img-mobile">
        </div>

        <!-- Accessibility -->
        <div class="feature-card">
          <div class="feature-content">
            <h3>{{ $t('tours.accessibility.title') }}</h3>
            <p>{{ $t('tours.accessibility.description') }}</p>
          </div>
          <div class="train-route-infographic-mobile-full">
            <div class="route-vertical-mobile">
              <div class="station-start-with-icon-mobile">
                <span class="train-icon-mobile">🚃</span>
                <span class="station-start-mobile">Osaka-Umeda</span>
              </div>
              <div class="arrow-with-change-mobile">
                <span class="arrow-down-mobile">↓</span>
                <span class="line-info-mobile">{{ $t('route.takarazukaLine') }}</span>
                <span class="time-mobile">15 min</span>
              </div>
              <div class="station-transfer-mobile">Ishibashi Handai-Mae</div>
              <div class="arrow-with-change-mobile">
                <span class="arrow-down-mobile">↓</span>
                <span class="change-info-mobile">{{ $t('route.changeToMinoh') }}</span>
                <span class="time-mobile">5 min</span>
              </div>
              <div class="station-end-mobile">Sakurai</div>
            </div>
            <a href="https://maps.app.goo.gl/ZSb7GFpuHcDHNjWT6" target="_blank" rel="noopener noreferrer" class="total-time-link-mobile">{{ $t('route.totalTime') }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Bikes Section -->
    <section id="bikes" class="bikes-section">
      <div class="container">
        <h2 class="section-title">{{ $t('bikes.sectionTitle') }}</h2>
        <div class="bike-card">
          <img src="/assets/fitting_rider_to_trek_bike.jpg" alt="Professional bike fitting" class="bike-img-mobile">
          <div class="bike-info">
            <h3>{{ $t('bikes.title') }}</h3>
            <p>{{ $t('bikes.description') }}</p>
            <a href="#bikes" class="bike-link-mobile">{{ $t('bikes.viewAll') }}</a>
          </div>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'MobileLanding',
  setup() {
    const { locale } = useI18n()
    const menuOpen = ref(false)
    const currentLocale = ref(locale.value)

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
    }

    const closeMenuOnBackdrop = (event) => {
      if (event.target === event.currentTarget) {
        closeMenu()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && menuOpen.value) {
        closeMenu()
      }
    }

    const changeLanguage = () => {
      locale.value = currentLocale.value
    }

    onMounted(() => {
      document.addEventListener('keydown', handleEscapeKey)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscapeKey)
    })

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
      closeMenuOnBackdrop,
      currentLocale,
      changeLanguage
    }
  }
}
</script>

<style scoped>
.mobile-landing {
  font-family: 'Inter', sans-serif;
  color: #333;
}

/* Hero Section */
.hero-section {
  background-image: url('/assets/deep_image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  padding: 2rem;
}

.brand-name {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.hero-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.4;
}

.cta-button {
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  background-color: #1d4ed8;
}

/* Container */
.container {
  padding: 0 1rem;
}

/* Tours Section */
.tours-section {
  background-color: #f8fafc;
  padding: 3rem 0;
}

.section-title {
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1e293b;
  padding: 0 1rem;
}

.feature-card {
  background-color: white;
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: 0 1rem 2rem 1rem;
}

.feature-img-mobile {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.feature-content {
  padding: 1.5rem;
}

.feature-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}

.feature-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #475569;
}

/* Bikes Section */
.bikes-section {
  background-color: white;
  padding: 3rem 0;
}

.bike-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: 0 1rem;
}

.bike-img-mobile {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.bike-info {
  padding: 1.5rem;
}

.bike-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}

.bike-info p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 1rem;
}

.bike-link-mobile {
  display: inline-block;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease;
  font-size: 0.95rem;
}

.bike-link-mobile:hover {
  border-bottom-color: #2563eb;
}

/* Train Route Infographic Mobile */
.train-route-infographic-mobile {
  background-color: #f1f5f9;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
}

.train-route-infographic-mobile h4 {
  margin: 0 0 0.75rem 0;
  color: #1e293b;
  font-weight: 600;
  font-size: 1rem;
}

.route-step-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.station-mobile {
  background-color: #2563eb;
  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.7rem;
}

.arrow-mobile {
  color: #64748b;
  font-weight: bold;
  font-size: 0.9rem;
}

.time-mobile {
  background-color: #10b981;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.65rem;
}

.change-info-mobile {
  font-size: 0.7rem;
  color: #64748b;
  margin: 0.5rem 0;
  font-style: italic;
}

.total-time-mobile {
  background-color: #1e293b;
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 0.75rem;
  font-size: 0.75rem;
}

/* Full Width Train Route Infographic Mobile */
.train-route-infographic-mobile-full {
  background-color: #f1f5f9;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
}

.train-route-infographic-mobile-full .route-vertical-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.train-route-infographic-mobile-full .station-start-with-icon-mobile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #dc2626;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 3px 6px rgba(220, 38, 38, 0.3);
}

.train-route-infographic-mobile-full .train-icon-mobile {
  font-size: 1.2rem;
}

.train-route-infographic-mobile-full .station-start-mobile,
.train-route-infographic-mobile-full .station-end-mobile {
  background-color: #dc2626;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 3px 6px rgba(220, 38, 38, 0.3);
  border: 2px solid #b91c1c;
}

.train-route-infographic-mobile-full .station-transfer-mobile {
  background-color: #64748b;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 0.7rem;
  opacity: 0.8;
}

.train-route-infographic-mobile-full .arrow-down-mobile {
  color: #2563eb;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0.2rem 0;
}

.train-route-infographic-mobile-full .arrow-time-compact-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 0.2rem 0;
}

.train-route-infographic-mobile-full .time-info-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
}

.train-route-infographic-mobile-full .time-mobile {
  background-color: #10b981;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.7rem;
}

.train-route-infographic-mobile-full .line-info-mobile {
  font-size: 0.6rem;
  color: #64748b;
  font-style: italic;
}

.train-route-infographic-mobile-full .arrow-with-change-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 0.2rem 0;
}

.train-route-infographic-mobile-full .change-info-mobile {
  font-size: 0.65rem;
  color: #64748b;
  font-style: italic;
  background-color: #f1f5f9;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  white-space: nowrap;
}

.train-route-infographic-mobile-full .total-time-link-mobile {
  display: block;
  background-color: #1e293b;
  color: white;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 1rem;
  font-size: 0.85rem;
  text-decoration: none;
  border: 2px solid #1e293b;
  transition: all 0.3s ease;
  cursor: pointer;
}

.train-route-infographic-mobile-full .total-time-link-mobile:hover {
  background-color: #2563eb;
  border-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px -5px rgba(37, 99, 235, 0.3);
}

/* CTA Section */
.cta-section {
  background-color: #1e293b;
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.cta-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
}

.cta-section p {
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  padding: 0 1rem;
}

.cta-button-large {
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.cta-button-large:hover {
  background-color: #1d4ed8;
}

/* Menu stays on top */
.fixed {
  position: fixed;
}

/* Language selector mobile */
.language-selector-mobile {
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
}

.lang-select-mobile {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 0.2s ease;
  min-width: 120px;
}

.lang-select-mobile:hover {
  border-color: #9ca3af;
}

.lang-select-mobile:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
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
</style>