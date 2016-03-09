
import { loadLanguagePacks } from '../utils/i18n/index.js'

const i18n = {
  core: {
    en: {
      complete: true,
      url: "/i18n/en.ln"
    },
    de: {
      complete: true,
      url: "/i18n/de.ln"
    }
  }
}

var registerI18nPackages = function(callback) {
  loadLanguagePacks(i18n, function() {
    if (callback != null && typeof callback === 'function') {
      callback()
    }
  })
}

export default registerI18nPackages
