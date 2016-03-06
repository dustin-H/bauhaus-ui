
import MaterialUiDate from '../MaterialUiDate'
import BrowserDate from '../BrowserDate'
import { $, mobile } from 'bauhaus-ui-module-utils'

const getComponent = () => {
  if (mobile === true) {
    return BrowserDate
  }
  return MaterialUiDate
}

export default getComponent()
