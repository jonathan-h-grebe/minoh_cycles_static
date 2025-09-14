import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ja from './locales/ja.json'

export default createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages: {
    en,
    ja
  }
})