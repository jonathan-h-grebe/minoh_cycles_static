<template>
  <div class="rental-page-wrapper">
    <AppHeader />

    <div class="rental-page">
      <div class="rental-content">
        <div ref="widgetContainer">
          <div class="bokunWidget" data-src="https://widgets.bokun.io/online-sales/90f34eac-f5ea-4226-9dfa-234c305a93df/experience/1241039"></div>
          <noscript>Please enable javascript in your browser to book</noscript>
        </div>
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
  },
  mounted() {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=90f34eac-f5ea-4226-9dfa-234c305a93df'
    script.async = true
    document.head.appendChild(script)
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
  padding: 8rem 2rem 4rem;
}

.rental-content {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  .rental-page {
    padding: 6rem 1rem 4rem;
  }
}
</style>
