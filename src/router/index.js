import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ToursPage from '../components/ToursPage.vue'
import BikesPage from '../components/BikesPage.vue'
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
    component: ToursPage
  },
  {
    path: '/bikes',
    name: 'Bikes',
    component: BikesPage
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