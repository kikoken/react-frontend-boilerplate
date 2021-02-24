import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Languages
import es from './es.json'
import pt from './pt.json'
import en from './en.json'

// the translations
const resources = {
  es: { translation: es },
  en: { translation: es },
  pt: { translation: es }
}

// eslint-disable-next-line import/prefer-default-export
export const defaultLanguage = 'es'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLanguage: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  })

export const lang = [
  { value: 'es', name: 'Espanol' },
  { value: 'en', name: 'English' },
  { value: 'pt', name: 'Portuguese' }
]

export default i18n
