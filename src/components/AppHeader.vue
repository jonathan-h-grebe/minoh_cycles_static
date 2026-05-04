<template>
  <header class="header flex justify-between items-center rounded-b-lg shadow-sm">
    <div class="text-2xl font-bold text-gray-800">
      <router-link v-if="!isHomePage" :to="`/${currentLocale}/`" class="brand-link">Minoh Cycle Tours</router-link>
      <span v-else>Minoh Cycle Tours</span>
    </div>
    <div class="flex items-center space-x-6">
      <nav class="space-x-4 desktop-nav">
        <router-link :to="`/${currentLocale}/tours`" @click="scrollToTop" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.tours') }}</router-link>
        <router-link :to="`/${currentLocale}/bikes`" @click="scrollToTop" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.bikes') }}</router-link>
        <router-link :to="`/${currentLocale}/about`" @click="scrollToTop" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.about') }}</router-link>
        <router-link :to="`/${currentLocale}/faq`" @click="scrollToTop" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.faq') }}</router-link>
        <a href="https://blog.minohcycles.com" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Blog</a>
        <router-link :to="`/${currentLocale}/food`" @click="scrollToTop" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Food</router-link>
        <!-- Temporarily removing How To Book nav item -->
        <!-- <router-link :to="`/${currentLocale}/how-to-book`" @click="scrollToTop" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">{{ $t('nav.bookNow') }}</router-link> -->
      </nav>
      <div class="language-selector">
        <select v-model="currentLocale" @change="changeLanguage" class="lang-select">
          <option value="en">EN</option>
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
          <option value="ko">한국어</option>
        </select>
      </div>

      <!-- Mobile Hamburger Menu Button -->
      <button
        @click="toggleMenu"
        class="mobile-menu-button p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Container -->
    <div
      v-show="menuOpen"
      @click="closeMenuOnBackdrop"
      class="mobile-menu-backdrop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
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
        <router-link :to="`/${currentLocale}/tours`" @click="closeMenuAndScrollTop" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.tours') }}</router-link>
        <router-link :to="`/${currentLocale}/bikes`" @click="closeMenuAndScrollTop" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.bikes') }}</router-link>
        <router-link :to="`/${currentLocale}/about`" @click="closeMenuAndScrollTop" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.about') }}</router-link>
        <router-link :to="`/${currentLocale}/faq`" @click="closeMenuAndScrollTop" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.faq') }}</router-link>
        <a href="https://blog.minohcycles.com" target="_blank" rel="noopener noreferrer" @click="closeMenu" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">Blog</a>
        <router-link :to="`/${currentLocale}/food`" @click="closeMenuAndScrollTop" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">Food</router-link>
        <!-- Temporarily removing How To Book nav item -->
        <!-- <router-link :to="`/${currentLocale}/how-to-book`" @click="closeMenuAndScrollTop" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">{{ $t('nav.bookNow') }}</router-link> -->
        <div class="language-selector-mobile p-4">
          <select v-model="currentLocale" @change="changeLanguage" class="lang-select-mobile">
            <option value="en">EN</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'AppHeader',
  setup() {
    const { locale } = useI18n()
    const router = useRouter()
    const route = useRoute()
    const currentLocale = ref(locale.value)
    const menuOpen = ref(false)

    const isHomePage = computed(() => {
      return route.path === `/${currentLocale.value}/` || route.path === '/'
    })

    const changeLanguage = () => {
      const newLocale = currentLocale.value
      const currentPath = route.path

      // Extract the path without language prefix
      const pathWithoutLocale = currentPath.replace(/^\/(en|ja)/, '')

      // Navigate to new language version of current page
      router.push(`/${newLocale}${pathWithoutLocale}`)
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

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

    const closeMenuAndScrollTop = () => {
      closeMenu()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && menuOpen.value) {
        closeMenu()
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleEscapeKey)
      // Sync locale with current route
      currentLocale.value = route.meta.locale || locale.value
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscapeKey)
    })

    return {
      currentLocale,
      isHomePage,
      changeLanguage,
      scrollToTop,
      menuOpen,
      toggleMenu,
      closeMenu,
      closeMenuOnBackdrop,
      closeMenuAndScrollTop
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

/* Mobile Menu Button */
.mobile-menu-button {
  display: none;
}

/* Mobile Menu Styles */
.mobile-menu-backdrop {
  display: none;
}

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

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .desktop-nav {
    display: none;
  }

  .language-selector {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .mobile-menu-backdrop {
    display: block;
  }
}
</style>
