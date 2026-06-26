<template>
  <div class="bikes-page">
    <AppHeader />

    <main class="bikes-content">
      <div class="bikes-container">
        <div class="bikes-header">
          <h1 class="bikes-title">{{ $t('bikesPage.title') }}</h1>
          <p class="bikes-subtitle">{{ $t('bikesPage.subtitle') }}</p>
        </div>

        <div class="bikes-grid">
          <!-- Trek FX+ 2 -->
          <div class="bike-card">
            <div class="bike-image">
              <img src="/assets/trek_fx_+_ebikes.jpg" alt="Trek FX+ 2 E-bike">
            </div>
            <div class="bike-details">
              <h3 class="bike-name">{{ $t('bikesPage.trek.name') }}</h3>
              <ul class="bike-specs">
                <li>{{ $t('bikesPage.trek.height') }}</li>
                <li>{{ $t('bikesPage.trek.tyreSize') }}</li>
                <li>{{ $t('bikesPage.trek.gears') }}</li>
                <li>{{ $t('bikesPage.trek.brakes') }}</li>
              </ul>
            </div>
          </div>

          <!-- Panasonic Xealt L3 -->
          <div class="bike-card">
            <div class="bike-image">
              <img src="/assets/panasonic_xealt_l3.JPG" alt="Panasonic Xealt L3 E-bike">
            </div>
            <div class="bike-details">
              <h3 class="bike-name">{{ $t('bikesPage.panasonic.name') }}</h3>
              <ul class="bike-specs">
                <li>{{ $t('bikesPage.panasonic.height') }}</li>
                <li>{{ $t('bikesPage.panasonic.tyreSize') }}</li>
                <li>{{ $t('bikesPage.panasonic.gears') }}</li>
                <li>{{ $t('bikesPage.panasonic.brakes') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bikes-footer">
          <p class="bikes-note">{{ $t('bikesPage.note') }}</p>
          <router-link
            to="/tours"
            @click="scrollToTop"
            class="book-button"
          >
            {{ $t('cta.button') }}
          </router-link>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'BikesPage',
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    // Apply SEO
    useSeo('bikes')

    const { locale } = useI18n()
    const currentLocale = ref(locale.value)

    return {
      currentLocale
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.bikes-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

.bikes-content {
  padding-top: 120px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.bikes-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.bikes-header {
  text-align: center;
  margin-bottom: 3rem;
}

.bikes-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
}

.bikes-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.bikes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.bike-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bike-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.bike-image {
  height: 300px;
  overflow: hidden;
}

.bike-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.bike-card:hover .bike-image img {
  transform: scale(1.05);
}

.bike-details {
  padding: 2rem;
}

.bike-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.bike-specs {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bike-specs li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
  color: #475569;
  font-size: 0.95rem;
}

.bike-specs li:before {
  content: '•';
  color: #2563eb;
  font-weight: bold;
  margin-right: 0.75rem;
}

.bike-specs li:last-child {
  border-bottom: none;
}

.bikes-footer {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.bikes-note {
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.book-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 1rem 2.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.book-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .bikes-content {
    padding-top: 100px;
  }
  
  .bikes-container {
    padding: 1rem;
  }
  
  .bikes-title {
    font-size: 2.5rem;
  }
  
  .bikes-subtitle {
    font-size: 1.1rem;
  }
  
  .bikes-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .bike-details {
    padding: 1.5rem;
  }
  
  .bikes-footer {
    padding: 1.5rem;
  }
}
</style>