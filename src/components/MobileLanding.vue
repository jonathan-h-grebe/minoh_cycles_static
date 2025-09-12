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
        <a href="#" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">Tours</a>
        <a href="#" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">Bikes</a>
        <a href="#" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100 border-b border-gray-200">About</a>
        <a href="#" class="text-center block w-full p-4 text-gray-600 hover:bg-gray-100">Book Now</a>
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="container mx-auto pt-20 p-6 text-center relative">
      <div class="p-8 rounded-lg bg-black bg-opacity-40 backdrop-blur-sm">
        <p class="mt-4 text-lg text-white">Minoh Cycles</p>
        <h1 class="text-4xl font-extrabold text-white">
          Minoh Falls & Katusuoji Bike Tours
        </h1>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'MobileLanding',
  setup() {
    const menuOpen = ref(false)

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
      closeMenuOnBackdrop
    }
  }
}
</script>

<style scoped>
.mobile-landing {
  /* Use a placeholder gradient for demonstration */
  background-image: url('/assets/deep_image.jpg');
  background-attachment: fixed;
  font-family: 'Inter', sans-serif;
  color: white;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: #f8fafc;
}
</style>