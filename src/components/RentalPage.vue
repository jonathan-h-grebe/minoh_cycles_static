<template>
  <div class="rental-page-wrapper">
    <AppHeader />

    <div class="rental-page">
      <h1>Cycle Hire</h1>
      <p>Coming soon...</p>
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {
  name: 'RentalPage',
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.rental-page-wrapper {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}

.rental-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 120px;
}

.rental-page h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}

.rental-page p {
  font-size: 1.2rem;
  color: #475569;
}

@media (max-width: 768px) {
  .rental-page {
    padding-top: 100px;
  }

  .rental-page h1 {
    font-size: 2rem;
  }
}
</style>
