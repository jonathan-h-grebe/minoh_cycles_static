<template>
  <div>
    <!-- Desktop view -->
    <DesktopLanding v-if="!isMobile" />
    <!-- Mobile view -->
    <MobileLanding v-else />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import DesktopLanding from './components/DesktopLanding.vue'
import MobileLanding from './components/MobileLanding.vue'

export default {
  name: 'App',
  components: {
    DesktopLanding,
    MobileLanding
  },
  setup() {
    const isMobile = ref(false)

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768
    }

    onMounted(() => {
      checkMobile()
      window.addEventListener('resize', checkMobile)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkMobile)
    })

    return {
      isMobile
    }
  }
}
</script>