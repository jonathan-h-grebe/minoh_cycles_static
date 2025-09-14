<template>
  <div class="desktop-landing">
    <header class="header flex justify-between items-center rounded-b-lg shadow-sm">
      <div class="text-2xl font-bold text-gray-800">
        Minoh Cycles
      </div>
      <nav class="space-x-4">
        <a href="#tours" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Tours</a>
        <a href="#bikes" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Bikes</a>
        <a href="#about" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a>
        <a href="#book" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Book Now</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text fade-in">
          <p class="brand-name">Minoh Cycles</p>
          <h1 class="hero-title">
            Minoh Falls & Katsuoji Bike Tours
          </h1>
          <p class="hero-subtitle">
            Experience the beauty of Osaka's hidden gem - just 30 minutes from Umeda
          </p>
          <button class="cta-button">Book Your Adventure</button>
        </div>
      </div>
    </section>

    <!-- Tours Section -->
    <section id="tours" class="tours-section">
      <div class="container">
        <h2 class="section-title">Discover Nature & Culture</h2>
        
        <!-- Waterfall & Temple Feature -->
        <div class="feature-row">
          <div class="feature-content">
            <h3>Beautiful Waterfall & Sacred Temple</h3>
            <p>Visit the stunning Minoh Falls and the historic Katsuoji Temple, where tradition meets natural beauty. Experience the spiritual atmosphere among thousands of daruma dolls and enjoy breathtaking mountain views.</p>
          </div>
          <div class="feature-images">
            <img src="/assets/view_of_pond_at_katsuoji.jpg" alt="Katsuoji Temple pond" class="feature-img">
            <img src="/assets/lots_of_darumas.jpg" alt="Daruma dolls at temple" class="feature-img">
          </div>
        </div>

        <!-- Cultural Experience -->
        <div class="feature-row reverse">
          <div class="feature-images">
            <img src="/assets/water_god_shrine.jpg" alt="Water god shrine" class="feature-img">
            <img src="/assets/boys_at_katsuoji_with_mountain_view.jpg" alt="Visitors at temple with mountain view" class="feature-img">
          </div>
          <div class="feature-content">
            <h3>Cultural & Historical Experience</h3>
            <p>Immerse yourself in Japanese culture and history as you explore ancient temples and shrines. Learn about local traditions and the significance of these sacred places while enjoying the peaceful mountain setting.</p>
          </div>
        </div>

        <!-- E-Bike Adventure -->
        <div class="feature-row">
          <div class="feature-content">
            <h3>Active Fun Without the Strain</h3>
            <p>Enjoy an active adventure on our premium e-bikes that take the strain out of the hills. Perfect for all fitness levels - experience the thrill of cycling through mountain roads while the electric assist makes it effortless.</p>
          </div>
          <div class="feature-images">
            <img src="/assets/trek_fx_+_ebikes.jpg" alt="Trek e-bikes" class="feature-img">
            <img src="/assets/riding_bikes_on_mountain_road.jpg" alt="Riders on mountain road" class="feature-img">
          </div>
        </div>

        <!-- Efficiency -->
        <div class="feature-row reverse">
          <div class="feature-images">
            <img src="/assets/group_picture_with_view.jpg" alt="Group photo with scenic view" class="feature-img">
            <img src="/assets/riders_together.jpg" alt="Riders together" class="feature-img">
          </div>
          <div class="feature-content">
            <h3>Half Day Tour - Amazing Efficiency</h3>
            <p>Experience the best of Minoh in just half a day without feeling rushed. Our carefully planned route maximizes your time, letting you see waterfalls, temples, and stunning mountain scenery in one perfect adventure.</p>
          </div>
        </div>

        <!-- Accessibility -->
        <div class="feature-row">
          <div class="feature-content">
            <h3>Easily Accessible from Osaka</h3>
            <p>Just 30 minutes by train from Umeda Station - escape the city and find yourself in nature faster than you thought possible. The perfect day trip that feels like a world away from urban life.</p>
          </div>
          <div class="feature-images">
            <img src="/assets/road_alongside_hankyu_train.jpg" alt="Road alongside Hankyu train" class="feature-img">
            <img src="/assets/road_alongside_hankyu_train_2.jpg" alt="Cycling route near train line" class="feature-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Bikes Section -->
    <section id="bikes" class="bikes-section">
      <div class="container">
        <h2 class="section-title">Premium E-Bikes</h2>
        <div class="bikes-content">
          <div class="bike-info">
            <h3>Trek FX+ E-Bikes</h3>
            <p>Ride our premium Trek FX+ electric bikes, perfectly suited for mountain terrain. With professional fitting and safety briefing, you'll be comfortable and confident on every ride.</p>
          </div>
          <img src="/assets/fitting_rider_to_trek_bike.jpg" alt="Professional bike fitting" class="bike-img">
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="book" class="cta-section">
      <div class="container">
        <h2>Ready for Your Adventure?</h2>
        <p>Book your Minoh Falls & Katsuoji bike tour today</p>
        <button class="cta-button-large">Book Now</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DesktopLanding'
}
</script>

<style scoped>
.desktop-landing {
  font-family: 'Inter', sans-serif;
  color: #333;
}

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

/* Hero Section */
.hero-section {
  background-image: url('/assets/deep_image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

.brand-name {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background-color: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #1d4ed8;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Tours Section */
.tours-section {
  background-color: #f8fafc;
  padding: 6rem 0;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #1e293b;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
  padding: 3rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.feature-row.reverse {
  direction: rtl;
}

.feature-row.reverse > * {
  direction: ltr;
}

.feature-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.feature-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
}

.feature-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feature-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-img:hover {
  transform: scale(1.05);
}

/* Bikes Section */
.bikes-section {
  background-color: white;
  padding: 6rem 0;
}

.bikes-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.bike-info h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
}

.bike-info p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
}

.bike-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
}

/* CTA Section */
.cta-section {
  background-color: #1e293b;
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button-large {
  background-color: #2563eb;
  color: white;
  padding: 1.5rem 3rem;
  border: none;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button-large:hover {
  background-color: #1d4ed8;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out forwards;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .feature-row,
  .bikes-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .feature-images {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>