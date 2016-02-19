import { registerModule, defineModuleUrl } from '../utils/moduleLoader'

import modules from '../coreModules.js'

/*
import InputText from './InputText'
import Label from './Label'
import JsonForm from './JsonForm'
import Section from './Section'
import InputPassword from './InputPassword'
import InputTextarea from './InputTextarea'
import Validator from './Validator'
import Condition from './Condition'
import InputScribe from './InputScribe'
import InputCheckbox from './InputCheckbox'
import InputSelect from './InputSelect'
*/

var registerModules = function() {
  /*
  registerModule('InputText', InputText)
  registerModule('Label', Label)
  registerModule('JsonForm', JsonForm)
  registerModule('Section', Section)
  registerModule('InputPassword', InputPassword)
  registerModule('InputTextarea', InputTextarea)
  registerModule('Validator', Validator)
  registerModule('Condition', Condition)
  registerModule('InputScribe', InputScribe)
  registerModule('InputCheckbox', InputCheckbox)
  registerModule('InputSelect', InputSelect)
  */

  for (var i in modules) {
    var name = modules[i]
    defineModuleUrl(name, 'modules/'+name+'.js')
  }
}

export default registerModules
