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
        <router-link to="/tours" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.tours') }}</router-link>
        <router-link to="/bikes" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.bikes') }}</router-link>
        <router-link to="/about" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.about') }}</router-link>
        <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.bookNow') }}</a>
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
            {{ $t('hero.title') }}
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
                  <a :href="currentLocale === 'ja' ? 'https://www.mino-park.jp/about/182/' : 'https://enjoy-osaka-kyoto-kobe.com/article/a/minoh-waterfall-point/'" target="_blank" rel="noopener noreferrer" class="temple-link">{{ currentLocale === 'ja' ? '箕面大滝' : 'Minoh Falls' }}</a>
                </template>
                <template #katsuojiLink>
                  <a :href="currentLocale === 'ja' ? 'https://katsuo-ji-temple.or.jp/' : 'https://katsuo-ji-temple.or.jp/audioguidance/index.php'" target="_blank" rel="noopener noreferrer" class="temple-link">{{ currentLocale === 'ja' ? '勝尾寺' : 'Katsuoji Temple' }}</a>
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
              <div class="station-transfer-mobile">Sakurai</div>
              <div class="arrow-with-change-mobile">
                <span class="arrow-down-mobile">↓</span>
                <span class="change-info-mobile">{{ $t('route.walkToMinohCycles') }}</span>
                <span class="time-mobile">10 min</span>
              </div>
              <a href="https://maps.app.goo.gl/duLA4qhKMkeXgdkd9" target="_blank" rel="noopener noreferrer" class="station-end-mobile">Minoh Cycles</a>
            </div>
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
        <p class="schedule-info">{{ $t('cta.schedule') }}</p>
        <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" class="cta-button-large">{{ $t('cta.button') }}</a>
        <div class="social-media">
          <p class="social-text">{{ currentLocale === 'ja' ? '最新の写真とアップデートはこちら' : 'Follow us for latest photos and updates' }}</p>
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

.train-route-infographic-mobile-full a.station-end-mobile {
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.train-route-infographic-mobile-full a.station-end-mobile:hover {
  background-color: #b91c1c;
  transform: translateY(-2px);
  box-shadow: 0 5px 10px rgba(220, 38, 38, 0.5);
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

.schedule-info {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2.5rem !important;
  display: inline-block;
  color: #60a5fa;
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

/* Social Media Section */
.social-media {
  margin-top: 2rem;
  text-align: center;
}

.social-text {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  padding: 0 1rem;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e1306c;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.75rem 1.25rem;
  border: 2px solid rgba(225, 48, 108, 0.3);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}

.instagram-link:hover {
  background-color: rgba(225, 48, 108, 0.1);
  border-color: #e1306c;
  transform: translateY(-2px);
}

.instagram-icon {
  width: 18px;
  height: 18px;
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