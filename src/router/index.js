import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ToursListPage from '../components/ToursListPage.vue'
import KatsuojiMinohTourPage from '../components/KatsuojiMinohTourPage.vue'
import KatsuojiVisitorCenterTourPage from '../components/KatsuojiVisitorCenterTourPage.vue'
import SatsukiyamaSkyTourPage from '../components/SatsukiyamaSkyTourPage.vue'
import BikesPage from '../components/BikesPage.vue'
import RentalPage from '../components/RentalPage.vue'
import AboutPage from '../components/AboutPage.vue'
import InsurancePage from '../components/InsurancePage.vue'
import HowToBookPage from '../components/HowToBookPage.vue'
import FaqPage from '../components/FaqPage.vue'
import FoodPage from '../components/FoodPage.vue'

// Define base routes (without language prefix)
const baseRoutes = [
  {
    path: '',
    name: 'Home',
    component: HomePage
  },
  {
    path: 'tours',
    name: 'Tours',
    component: ToursListPage
  },
  {
    path: 'tours/katsuoji-minoh-falls',
    name: 'KatsuojiMinohTour',
    component: KatsuojiMinohTourPage
  },
  {
    path: 'tours/katsuoji-visitor-center',
    name: 'KatsuojiVisitorCenterTour',
    component: KatsuojiVisitorCenterTourPage
  },
  {
    path: 'tours/satsukiyama-sky',
    name: 'SatsukiyamaSkyTour',
    component: SatsukiyamaSkyTourPage
  },
  {
    path: 'bikes',
    name: 'Bikes',
    component: BikesPage
  },
  {
    path: 'rentals',
    name: 'Rentals',
    component: RentalPage
  },
  {
    path: 'about',
    name: 'About',
    component: AboutPage
  },
  {
    path: 'insurance',
    name: 'Insurance',
    component: InsurancePage
  },
  {
    path: 'how-to-book',
    name: 'HowToBook',
    component: HowToBookPage
  },
  {
    path: 'faq',
    name: 'Faq',
    component: FaqPage
  },
  {
    path: 'food',
    name: 'Food',
    component: FoodPage
  }
]

// Generate routes for all languages
function generateLocalizedRoutes() {
  const routes = []
  const languages = ['en', 'ja', 'zh', 'ko']

  languages.forEach(lang => {
    baseRoutes.forEach(route => {
      routes.push({
        path: `/${lang}/${route.path}`,
        name: `${route.name}_${lang}`,
        component: route.component,
        meta: { locale: lang }
      })
    })
  })

  return routes
}

// Helper to get preferred language
function getPreferredLanguage() {
  // Check localStorage first
  const savedLocale = localStorage.getItem('preferredLocale')
  if (savedLocale === 'ja' || savedLocale === 'en') {
    return savedLocale
  }

  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage
  const langCode = browserLang.split('-')[0]

  return langCode === 'ja' ? 'ja' : 'en'
}

const routes = [
  // Root redirect based on language preference
  {
    path: '/',
    redirect: () => {
      const lang = getPreferredLanguage()
      return `/${lang}/`
    }
  },
  // Localized routes
  ...generateLocalizedRoutes(),
  // Redirects for old URLs without language prefix
  {
    path: '/tours',
    redirect: () => `/${getPreferredLanguage()}/tours`
  },
  {
    path: '/tours/katsuoji-minoh-falls',
    redirect: () => `/${getPreferredLanguage()}/tours/katsuoji-minoh-falls`
  },
  {
    path: '/tours/katsuoji-visitor-center',
    redirect: () => `/${getPreferredLanguage()}/tours/katsuoji-visitor-center`
  },
  {
    path: '/tours/satsukiyama-sky',
    redirect: () => `/${getPreferredLanguage()}/tours/satsukiyama-sky`
  },
  {
    path: '/bikes',
    redirect: () => `/${getPreferredLanguage()}/bikes`
  },
  {
    path: '/rentals',
    redirect: () => `/${getPreferredLanguage()}/rentals`
  },
  {
    path: '/about',
    redirect: () => `/${getPreferredLanguage()}/about`
  },
  {
    path: '/insurance',
    redirect: () => `/${getPreferredLanguage()}/insurance`
  },
  {
    path: '/how-to-book',
    redirect: () => `/${getPreferredLanguage()}/how-to-book`
  },
  {
    path: '/faq',
    redirect: () => `/${getPreferredLanguage()}/faq`
  },
  {
    path: '/food',
    redirect: () => `/${getPreferredLanguage()}/food`
  },
  // Catch-all redirect to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Sync locale with route
router.beforeEach((to, from, next) => {
  const locale = to.meta.locale || 'en'

  // Update i18n locale (will be set from i18n instance)
  if (window.i18nGlobal) {
    window.i18nGlobal.locale.value = locale
  }

  // Save preference
  localStorage.setItem('preferredLocale', locale)

  next()
})

export default router
