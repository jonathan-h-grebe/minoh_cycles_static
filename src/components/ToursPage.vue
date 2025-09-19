<template>
  <div class="tours-page">
    <header class="header flex justify-between items-center rounded-b-lg shadow-sm">
      <div class="text-2xl font-bold text-gray-800">
        <router-link to="/" class="brand-link">Minoh Cycles</router-link>
      </div>
      <div class="flex items-center space-x-6">
        <nav class="space-x-4">
          <router-link to="/tours" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-semibold">{{ $t('nav.tours') }}</router-link>
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

    <section class="tours-hero-section">
      <div class="tours-hero-content">
        <h1 class="tours-title">{{ $t('tourDetails.title') }}</h1>
        <p class="tours-subtitle">{{ $t('tourDetails.subtitle') }}</p>
        <p class="tours-description">{{ $t('tourDetails.description') }}</p>
      </div>
    </section>

    <!-- Itinerary Section -->
    <section class="itinerary-section">
      <div class="container">
        <h2 class="section-title">{{ $t('tourDetails.itinerary') }}</h2>

        <!-- Step 1: Orientation -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">1</div>
            <div class="step-details">
              <h3 class="step-title">{{ $t('tourDetails.steps.orientation.title') }} <span class="duration">({{ currentLocale === 'ja' ? '15分' : '15 mins' }})</span></h3>
              <p class="step-description">{{ $t('tourDetails.steps.orientation.description') }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/fitting_rider_to_trek_bike.jpg" alt="Bike fitting and orientation" class="step-img">
          </div>
        </div>

        <!-- Step 2: Ride to Minoh Falls -->
        <div class="itinerary-step reverse">
          <div class="step-image">
            <img src="/assets/riding_bikes_on_mountain_road.jpg" alt="Riding to Minoh Falls" class="step-img">
          </div>
          <div class="step-content">
            <div class="step-number">2</div>
            <div class="step-details">
              <h3 class="step-title">{{ $t('tourDetails.steps.rideToFalls.title') }} <span class="duration">({{ currentLocale === 'ja' ? '45分' : '45 mins' }})</span></h3>
              <p class="step-description">{{ $t('tourDetails.steps.rideToFalls.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Minoh Falls -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">3</div>
            <div class="step-details">
              <h3 class="step-title">{{ $t('tourDetails.steps.enjoyFalls.title') }} <span class="duration">({{ currentLocale === 'ja' ? '30分' : '30 mins' }})</span></h3>
              <p class="step-description">{{ $t('tourDetails.steps.enjoyFalls.description') }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/taki_landscape.JPG" alt="Minoh Falls waterfall" class="step-img">
          </div>
        </div>

        <!-- Step 4: Continue to Katsuoji -->
        <div class="itinerary-step reverse">
          <div class="step-image">
            <img src="/assets/bike_infront_of_taki.JPG" alt="E-bike journey through mountains" class="step-img">
          </div>
          <div class="step-content">
            <div class="step-number">4</div>
            <div class="step-details">
              <h3 class="step-title">{{ $t('tourDetails.steps.continueToTemple.title') }} <span class="duration">({{ currentLocale === 'ja' ? '20分' : '20 mins' }})</span></h3>
              <p class="step-description">{{ $t('tourDetails.steps.continueToTemple.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Step 5: Experience Katsuoji -->
        <div class="itinerary-step">
          <div class="step-content">
            <div class="step-number">5</div>
            <div class="step-details">
              <h3 class="step-title">{{ $t('tourDetails.steps.experienceTemple.title') }} <span class="duration">({{ currentLocale === 'ja' ? '1時間15分' : '1hr 15mins' }})</span></h3>
              <p class="step-description">{{ $t('tourDetails.steps.experienceTemple.description') }}</p>
            </div>
          </div>
          <div class="step-image">
            <img src="/assets/view_of_pond_at_katsuoji.jpg" alt="Katsuoji Temple" class="step-img">
          </div>
        </div>

        <!-- Step 6: Return -->
        <div class="itinerary-step reverse">
          <div class="step-image">
            <img src="/assets/group_picture_with_view.jpg" alt="Group enjoying mountain views" class="step-img">
          </div>
          <div class="step-content">
            <div class="step-number">6</div>
            <div class="step-details">
              <h3 class="step-title">{{ $t('tourDetails.steps.returnToSakurai.title') }} <span class="duration">({{ currentLocale === 'ja' ? '30分' : '30 mins' }})</span></h3>
              <p class="step-description">{{ $t('tourDetails.steps.returnToSakurai.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What to Bring Section -->
    <section class="preparation-section">
      <div class="container">
        <div class="preparation-grid">
          <div class="preparation-card">
            <h3 class="preparation-title">{{ $t('tourDetails.preparation.whatToBring') }}</h3>
            <ul class="preparation-list">
              <li>{{ $t('tourDetails.preparation.items.exerciseClothes') }}</li>
              <li>{{ $t('tourDetails.preparation.items.water') }} <span class="note">*{{ $t('tourDetails.preparation.items.waterNote') }}</span></li>
              <li>{{ $t('tourDetails.preparation.items.sunscreen') }}</li>
              <li>{{ $t('tourDetails.preparation.items.backpack') }}</li>
              <li>{{ $t('tourDetails.preparation.items.money') }} <span class="note">- {{ $t('tourDetails.preparation.items.moneyNote') }}</span></li>
            </ul>
          </div>

          <div class="preparation-card">
            <h3 class="preparation-title">{{ $t('tourDetails.preparation.whatIncluded') }}</h3>
            <ul class="preparation-list included">
              <li>{{ $t('tourDetails.preparation.items.premiumEbike') }}</li>
              <li>{{ $t('tourDetails.preparation.items.helmet') }}</li>
              <li>{{ $t('tourDetails.preparation.items.waterBottle') }}</li>
              <li>{{ $t('tourDetails.preparation.items.entranceFee') }}</li>
              <li>{{ $t('tourDetails.preparation.items.guide') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ $t('tourDetails.cta.title') }}</h2>
        <p>{{ $t('tourDetails.cta.description') }}</p>
        <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" class="cta-button-large">{{ $t('tourDetails.cta.button') }}</a>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'ToursPage',
  setup() {
    const { locale } = useI18n()
    const currentLocale = ref(locale.value)

    const changeLanguage = () => {
      locale.value = currentLocale.value
    }

    return {
      currentLocale,
      changeLanguage
    }
  }
}
</script>

<style scoped>
.tours-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  min-height: 100vh;
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

.brand-link {
  text-decoration: none;
  color: inherit;
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

.tours-hero-section {
  background-image: url('/assets/riding_bikes_on_mountain_road.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 80px;
}

.tours-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.tours-hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 3rem;
}

.tours-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.tours-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.tours-description {
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.6;
}

.itinerary-section {
  background-color: #f8fafc;
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #1e293b;
  text-align: center;
}

/* Itinerary Steps */
.itinerary-step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  background-color: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.itinerary-step.reverse {
  direction: rtl;
}

.itinerary-step.reverse > * {
  direction: ltr;
}

.step-content {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.step-number {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
}

.step-details {
  flex: 1;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.duration {
  color: #10b981;
  font-weight: 600;
  font-size: 1rem;
}

.step-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
}

.step-image {
  position: relative;
}

.step-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.step-img:hover {
  transform: scale(1.02);
}

/* Preparation Section */
.preparation-section {
  background-color: white;
  padding: 6rem 0;
}

.preparation-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.preparation-card {
  background-color: #f8fafc;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.preparation-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
}

.preparation-list {
  list-style: none;
  padding: 0;
}

.preparation-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #475569;
  position: relative;
  padding-left: 2rem;
}

.preparation-list li:before {
  content: "•";
  color: #2563eb;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.preparation-list.included li:before {
  content: "✓";
  color: #10b981;
}

.preparation-list li:last-child {
  border-bottom: none;
}

.note {
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
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
  text-decoration: none;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.cta-button-large:hover {
  background-color: #1d4ed8;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .header nav {
    display: none;
  }

  .tours-title {
    font-size: 2rem;
  }

  .tours-hero-content {
    padding: 2rem;
    margin: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .itinerary-step,
  .itinerary-step.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    direction: ltr;
  }

  .step-content {
    flex-direction: column;
    text-align: center;
  }

  .step-number {
    align-self: center;
  }

  .step-img {
    height: 250px;
  }

  .preparation-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .preparation-card {
    padding: 2rem;
  }

  .cta-section h2 {
    font-size: 1.75rem;
  }
}
</style>