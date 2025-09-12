<template>
  <div class="desktop-landing">
    <header class="header flex justify-between items-center rounded-b-lg shadow-sm">
      <div class="text-2xl font-bold text-gray-800">
        Minoh Cycles
      </div>
      <nav class="space-x-4">
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Tours</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Bikes</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors duration-200">Book Now</a>
      </nav>
    </header>

    <main class="container mx-auto mt-10 p-6 text-center">
      <div class="p-8 rounded-lg fade-in">
        <p class="mt-4 mb-4 text-4xl text-white">Minoh Cycles</p>
        <h1 class="text-6xl font-extrabold text-white">
          Minoh Falls & Katusuoji Bike Tours
        </h1>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DesktopLanding'
}
</script>

<style scoped>
.desktop-landing {
  /* Use the background image */
  background-image: url('/assets/deep_image.jpg');
  
  /* Background properties for a full-page photo */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed; /* Optional: adds a parallax effect */
  
  /* Set a fallback background color for when the image is loading */
  background-color: #f8fafc;
  
  /* Set a default font for the body */
  font-family: 'Inter', sans-serif;
  color: white; /* Changed text color for better contrast with the background image */
  min-height: 100vh;
}

.header {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white header */
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
}

.cycles {
  color: blue;
  font-family: 'Montserrat', sans-serif;
}

/* You might want to add a semi-transparent overlay to make the text more readable */
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out forwards;
}
</style>