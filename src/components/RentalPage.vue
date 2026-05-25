<template>
  <div class="rental-page-wrapper">
    <AppHeader />

    <div class="rental-page">
      <div class="rental-content">
        <h1 class="rental-title">Bike Rentals</h1>
        <p class="rental-text">
          Rentals are available on request. If you'd like to hire an e-bike without joining a guided tour,
          please fill in the form below and we'll get back to you to confirm availability and details.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWY0wq2uRry027UEqjMHrpJoAGmsslF-WxbOTB2xDf5KnUvg/viewform?usp=publish-editor" class="rental-form-link" target="_blank" rel="noopener noreferrer">
          Request a rental
        </a>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import { useSeo } from '@/composables/useSeo'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'RentalPage',
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    useSeo('rentals')
  }
}
</script>

<style scoped>
.rental-page-wrapper {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  background-color: #f8fafc;
}

.rental-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
}

.rental-content {
  max-width: 600px;
  width: 100%;
}

.rental-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.rental-text {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.75;
  margin-bottom: 2rem;
}

.rental-form-link {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 0.875rem 1.75rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.rental-form-link:hover {
  background-color: #1d4ed8;
}

@media (max-width: 768px) {
  .rental-title {
    font-size: 1.75rem;
  }

  .rental-text {
    font-size: 1rem;
  }
}
</style>
