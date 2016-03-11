
import { parseLanguage } from 'bauhaus-ui-module-utils'
import en from './en.js'
import de from './de.js'

const ln = en.concat(de)

parseLanguage(ln, 'Core-Module: InputFiles')

export default true
