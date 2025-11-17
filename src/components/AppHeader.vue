<template>
  <header class="header flex justify-between items-center rounded-b-lg shadow-sm">
    <div class="text-2xl font-bold text-gray-800">
      <router-link v-if="$route.path !== '/'" to="/" class="brand-link">Minoh Cycles</router-link>
      <span v-else>Minoh Cycles</span>
    </div>
    <div class="flex items-center space-x-6">
      <nav class="space-x-4 desktop-nav">
        <router-link to="/tours" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.tours') }}</router-link>
        <router-link to="/bikes" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.bikes') }}</router-link>
        <router-link to="/rentals" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Cycle Hire</router-link>
        <router-link to="/about" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.about') }}</router-link>
        <a href="https://www.viator.com/tours/Osaka-Prefecture/Scenic-E-Bike-Tour-of-Minoh-Falls-and-Katsuoji-Temple/d50171-5603445P2" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.bookNow') }}</a>
      </nav>
      <div class="language-selector">
        <select v-model="currentLocale" @change="changeLanguage" class="lang-select">
          <option value="en">EN</option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'AppHeader',
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

/* Active link styling */
.header nav a.router-link-active {
  font-weight: 600;
  color: #1e293b;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .desktop-nav {
    display: none;
  }
}
</style>
