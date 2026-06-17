<template>
  <div class="booking-widget-container">
    <button
      class="bokunButton"
      :class="buttonClass"
      disabled
      :id="widgetId"
      :data-src="`https://widgets.bokun.io/online-sales/90f34eac-f5ea-4226-9dfa-234c305a93df/experience/${experienceId}?partialView=1`"
      data-testid="widget-book-button"
    >
      {{ buttonText || 'Book Now' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BookingWidget',
  props: {
    buttonText: {
      type: String,
      default: 'Book Now'
    },
    buttonClass: {
      type: String,
      default: ''
    },
    widgetId: {
      type: String,
      default: 'bokun_e9774066_d681_4fa1_ac19_19e60cdefba8'
    },
    experienceId: {
      type: String,
      default: '1138472'
    }
  },
  mounted() {
    // Load Bokun widget script if not already loaded
    if (!document.getElementById('bokun-widget-loader')) {
      const script = document.createElement('script')
      script.id = 'bokun-widget-loader'
      script.type = 'text/javascript'
      script.src = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=90f34eac-f5ea-4226-9dfa-234c305a93df'
      script.async = true
      document.head.appendChild(script)
    }
  }
}
</script>

<style scoped>
.booking-widget-container {
  display: inline-block;
}

.bokunButton {
  display: inline-block;
  padding: 1rem 1.5rem;
  background: #408C3D;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(64, 140, 61, 0.3);
  font-weight: 600;
  font-size: 1.1rem;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bokunButton:hover {
  background: #285726;
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -2px rgba(64, 140, 61, 0.4);
}

.bokunButton:active {
  background: #30682e;
}
</style>
