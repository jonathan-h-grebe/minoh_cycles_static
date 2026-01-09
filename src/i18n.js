import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ja from './locales/ja.json'
import zh from './locales/zh.json'
import ko from './locales/ko.json'

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en', // Default locale, will be overridden by router
  fallbackLocale: 'en',
  messages: {
    en,
    ja,
    zh,
    ko
  }
})

// Export i18n instance globally for router access
window.i18nGlobal = i18n.global

export default i18n
