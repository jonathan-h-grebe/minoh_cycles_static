<template>
  <div class="food-page">
    <AppHeader />
    <header class="food-header">
      <h1>Local Food Recommendations</h1>
      <p class="subtitle">Great places to eat near the end of your tour</p>
    </header>

    <div class="food-container">
      <div class="food-item">
        <h3 class="restaurant-name">Curry Punk</h3>
        <p class="cuisine-type">Indian Curry with Japanese rice</p>
        <p class="description">Unique, artistic interior - owner/chef is Minoh radio DJ</p>
        <a href="https://share.google/ZkJIXSaRl1h4z8YIx" target="_blank" rel="noopener noreferrer" class="map-link">
          View on Google Maps
        </a>
      </div>

      <div class="food-item">
        <h3 class="restaurant-name">Musubi</h3>
        <p class="cuisine-type">Japanese lunch set - Miso soup, salad, meat or fish dish</p>
        <p class="description">Run by veteran caterer for local Nurseries</p>
        <a href="https://share.google/thunwm0Z1oyyiME4p" target="_blank" rel="noopener noreferrer" class="map-link">
          View on Google Maps
        </a>
      </div>

      <div class="food-item">
        <h3 class="restaurant-name">VitaminYa</h3>
        <p class="cuisine-type">Japanese food: plate sets, tempura</p>
        <p class="description">Hole-in-the-wall / "hidden gem" style, friendly owner. Also a bar specializing in fruit/beer cocktails</p>
        <a href="https://maps.app.goo.gl/AaFHf1QedpzVt95y6" target="_blank" rel="noopener noreferrer" class="map-link">
          View on Google Maps
        </a>
      </div>

      <div class="food-item">
        <h3 class="restaurant-name">Tai-meshi Saiyo</h3>
        <p class="cuisine-type">Seabream / Chicken Ramen</p>
        <p class="description">Unique and delicious.</p>
        <a href="https://maps.app.goo.gl/DnPacYKCqawY6E9v6" target="_blank" rel="noopener noreferrer" class="map-link">
          View on Google Maps
        </a>
      </div>

      <div class="food-item">
        <h3 class="restaurant-name">Nakamuraya</h3>
        <p class="cuisine-type">Sichuan Chinese Food</p>
        <p class="description">Authentic, friendly, very popular with residents of Sakurai.</p>
        <a href="https://maps.app.goo.gl/XpuTpLGH2GitDdM8A" target="_blank" rel="noopener noreferrer" class="map-link">
          View on Google Maps
        </a>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'FoodPage',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
.food-page {
  min-height: 100vh;
  background-color: #f8fafc;
  padding-top: 80px;
}

.food-header {
  background-color: #1e293b;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.food-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.food-header .subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.food-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.food-item {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.food-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.15);
}

.restaurant-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.cuisine-type {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2563eb;
  margin: 0 0 0.75rem 0;
}

.description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 1rem 0;
}

.map-link {
  display: inline-block;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.map-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .food-header h1 {
    font-size: 1.75rem;
  }

  .food-header .subtitle {
    font-size: 1rem;
  }

  .food-container {
    padding: 2rem 1rem;
  }

  .food-item {
    padding: 1.5rem;
  }

  .restaurant-name {
    font-size: 1.2rem;
  }

  .cuisine-type {
    font-size: 1rem;
  }

  .description {
    font-size: 0.95rem;
  }
}
</style>
