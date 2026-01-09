<template>
  <div class="tour-page">
    <AppHeader />

    <section class="coming-soon-section">
      <div class="coming-soon-content">
        <h1 class="coming-soon-title">{{ $t('toursList.tours.satsukiyamaSky.name') }}</h1>
        <p class="coming-soon-message">{{ $t('toursList.comingSoonMessage') }}</p>
        <router-link to="/tours" class="back-button">{{ $t('toursList.backToTours') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { useSeo } from '@/composables/useSeo'
import AppHeader from './AppHeader.vue'

export default {
  name: 'SatsukiyamaSkyTourPage',
  components: {
    AppHeader
  },
  setup() {
    // Apply SEO
    useSeo('tourSatsukiyama')
  }
}
</script>

<style scoped>
.tour-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
}

.coming-soon-section {
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
  padding: 3rem;
}

.coming-soon-content {
  text-align: center;
  max-width: 600px;
}

.coming-soon-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
}

.coming-soon-message {
  font-size: 1.5rem;
  color: #475569;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.back-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 1rem 2.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #1d4ed8;
}

@media (max-width: 768px) {
  .coming-soon-title {
    font-size: 2rem;
  }

  .coming-soon-message {
    font-size: 1.2rem;
  }
}
</style>
