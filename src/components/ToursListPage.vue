<template>
  <div class="tours-list-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="tours-hero-section">
      <div class="tours-hero-content">
        <h1 class="tours-title">{{ $t('toursList.title') }}</h1>
        <p class="tours-subtitle">{{ $t('toursList.subtitle_1') }}</p>
        <p class="tours-subtitle second">{{ $t('toursList.subtitle_2') }}</p>
        <p class="tours-subtitle final">{{ $t('toursList.subtitle_3') }}</p>
      </div>
    </section>

    <!-- Tours Grid Section -->
    <section class="tours-grid-section">
      <div class="container">
        <!-- Minoh Park & Katsuoji Area Tours -->
        <div class="tour-category">
          <h2 class="category-title">{{ $t('toursList.categories.minohKatsuoji') }}</h2>
          <div class="tours-grid">
            <!-- Katsuoji & Minoh Falls Tour -->
            <div class="tour-card">
              <div class="tour-image">
                <img src="/assets/viator_tour_combo.png" alt="Katsuoji and Minoh Falls Tour">
              </div>
              <div class="tour-content">
                <h3 class="tour-name">{{ $t('toursList.tours.katsuojiMinohFalls.name') }}</h3>
                <p class="tour-description">{{ $t('toursList.tours.katsuojiMinohFalls.description') }}</p>
                <div class="tour-meta">
                  <span class="duration">{{ $t('toursList.tours.katsuojiMinohFalls.duration') }}</span>
                  <span class="difficulty">{{ $t('toursList.tours.katsuojiMinohFalls.difficulty') }}</span>
                  <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" class="viator-badge">Viator Exclusive</a>
                </div>
                <router-link to="/tours/katsuoji-minoh-falls" @click="scrollToTop" class="tour-button">{{ $t('toursList.viewDetails') }}</router-link>
              </div>
            </div>

            <!-- Katsuoji & Visitor Center Tour -->
            <div class="tour-card">
              <div class="tour-image">
                <img src="/assets/direct_katsuoji_tour_combo.png" alt="Katsuoji and Visitor Center Tour">
                <div class="new-badge">NEW!</div>
              </div>
              <div class="tour-content">
                <h3 class="tour-name">{{ $t('toursList.tours.katsuojiVisitorCenter.name') }}</h3>
                <p class="tour-description">{{ $t('toursList.tours.katsuojiVisitorCenter.description') }}</p>
                <div class="tour-meta">
                  <span class="duration">{{ $t('toursList.tours.katsuojiVisitorCenter.duration') }}</span>
                  <span class="difficulty">{{ $t('toursList.tours.katsuojiVisitorCenter.difficulty') }}</span>
                </div>
                <router-link to="/tours/katsuoji-visitor-center" @click="scrollToTop" class="tour-button">{{ $t('toursList.viewDetails') }}</router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Tours -->
        <div class="tour-category">
          <h2 class="category-title">{{ $t('toursList.categories.other') }}</h2>
          <div class="tours-grid">
            <!-- Satsukiyama Sky Tour -->
            <div class="tour-card coming-soon-card">
              <div class="tour-image">
                <img src="/assets/sky_tour_combo.png" alt="Satsukiyama Sky Tour">
                <div class="coming-soon-badge">{{ $t('toursList.comingSoon') }}</div>
              </div>
              <div class="tour-content">
                <h3 class="tour-name">{{ $t('toursList.tours.satsukiyamaSky.name') }}</h3>
                <p class="tour-description">{{ $t('toursList.tours.satsukiyamaSky.description') }}</p>
                <div class="tour-meta">
                  <span class="duration">{{ $t('toursList.tours.satsukiyamaSky.duration') }}</span>
                  <span class="difficulty">{{ $t('toursList.tours.satsukiyamaSky.difficulty') }}</span>
                </div>
                <button class="tour-button disabled" disabled>{{ $t('toursList.comingSoon') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {
  name: 'ToursListPage',
  components: {
    AppHeader
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.tours-list-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
  background-color: #f8fafc;
}

.tours-hero-section {
  background-color: #f8fafc;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;
}

.tours-hero-content {
  text-align: center;
  color: #1e293b;
  max-width: 900px;
  padding: 3rem;
}

.tours-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  color: #1e293b;
}

.tours-subtitle {
  font-size: 1.2rem;
  line-height: 1.4;
  color: #64748b;
  white-space: pre-wrap;
}

.tours-subtitle.second {
  margin-top: 10px;
}

.tours-subtitle.final {
  margin-top: 20px;
}

.tours-grid-section {
  background-color: #f8fafc;
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.tour-category {
  margin-bottom: 6rem;
}

.tour-category:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #2563eb;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.tour-card {
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px -5px rgba(0, 0, 0, 0.15);
}

.tour-card.coming-soon-card {
  opacity: 0.85;
}

.tour-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.tour-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tour-card:hover .tour-image img {
  transform: scale(1.05);
}

.coming-soon-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #fbbf24;
  color: #78350f;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.new-badge {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  z-index: 10;
  animation: pulse-glow 2s ease-in-out infinite;
}

.new-badge::before {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #059669;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
    transform: scale(1.05);
  }
}

.tour-content {
  padding: 2rem;
}

.tour-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.tour-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1.5rem;
}

.tour-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.tour-meta span {
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: #f1f5f9;
  color: #475569;
}

.duration {
  color: #10b981 !important;
  background-color: #d1fae5 !important;
}

.difficulty {
  color: #2563eb !important;
  background-color: #dbeafe !important;
}

.viator-badge {
  color: white !important;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%) !important;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

.viator-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
}

.tour-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
}

.tour-button:hover {
  background-color: #1d4ed8;
}

.tour-button.disabled {
  background-color: #cbd5e1;
  color: #64748b;
  cursor: not-allowed;
}

.tour-button.disabled:hover {
  background-color: #cbd5e1;
}

@media (max-width: 768px) {
  .tours-title {
    font-size: 2.5rem;
  }

  .tours-subtitle {
    font-size: 1.2rem;
  }

  .tours-hero-content {
    padding: 2rem;
  }

  .category-title {
    font-size: 2rem;
  }

  .tours-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .tour-image {
    height: 200px;
  }

  .tour-content {
    padding: 1.5rem;
  }

  .tour-name {
    font-size: 1.5rem;
  }

  .tour-description {
    font-size: 1rem;
  }
}
</style>
