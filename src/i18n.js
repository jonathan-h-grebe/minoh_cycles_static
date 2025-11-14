import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ja from './locales/ja.json'

// Detect browser language
function getBrowserLocale() {
  const browserLanguage = navigator.language || navigator.userLanguage
  const languageCode = browserLanguage.split('-')[0] // Get 'ja' from 'ja-JP' or 'en' from 'en-US'

  // Return 'ja' if Japanese is detected, otherwise default to 'en'
  return languageCode === 'ja' ? 'ja' : 'en'
}

export default createI18n({
  legacy: false, // Use Composition API mode
  locale: getBrowserLocale(), // Set locale based on browser language
  fallbackLocale: 'en',
  messages: {
    en,
    ja
  }
})