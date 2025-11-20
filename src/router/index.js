import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ToursListPage from '../components/ToursListPage.vue'
import KatsuojiMinohTourPage from '../components/KatsuojiMinohTourPage.vue'
import KatsuojiVisitorCenterTourPage from '../components/KatsuojiVisitorCenterTourPage.vue'
import SatsukiyamaSkyTourPage from '../components/SatsukiyamaSkyTourPage.vue'
import BikesPage from '../components/BikesPage.vue'
import RentalPage from '../components/RentalPage.vue'
import AboutPage from '../components/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/tours',
    name: 'Tours',
    component: ToursListPage
  },
  {
    path: '/tours/katsuoji-minoh-falls',
    name: 'KatsuojiMinohTour',
    component: KatsuojiMinohTourPage
  },
  {
    path: '/tours/katsuoji-visitor-center',
    name: 'KatsuojiVisitorCenterTour',
    component: KatsuojiVisitorCenterTourPage
  },
  {
    path: '/tours/satsukiyama-sky',
    name: 'SatsukiyamaSkyTour',
    component: SatsukiyamaSkyTourPage
  },
  {
    path: '/bikes',
    name: 'Bikes',
    component: BikesPage
  },
  {
    path: '/rentals',
    name: 'Rentals',
    component: RentalPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router