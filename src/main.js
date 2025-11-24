import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n.js'
import './assets/main.css'

// Import fonts
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

createApp(App).use(router).use(i18n).mount('#app')