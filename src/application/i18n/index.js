import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Languages
import es from './language/es.json'
import pt from './language/pt.json'
import en from './language/en.json'

// the translations
const resources = {
  es: { translation: es },
  en: { translation: en },
  pt: { translation: pt }
}

// eslint-disable-next-line import/prefer-default-export
export const defaultLanguage = 'es'

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  keySeparator: false,
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
