<template>
  <div class="homepage">
    <DesktopLanding v-if="!isMobile" />
    <MobileLanding v-else />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import DesktopLanding from './DesktopLanding.vue'
import MobileLanding from './MobileLanding.vue'

export default {
  name: 'HomePage',
  components: {
    DesktopLanding,
    MobileLanding
  },
  setup() {
    const isMobile = ref(false)

    const checkScreenSize = () => {
      isMobile.value = window.innerWidth < 768
    }

    onMounted(() => {
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkScreenSize)
    })

    return {
      isMobile
    }
  }
}
</script>

<style scoped>
.homepage {
  min-height: 100vh;
}
</style>