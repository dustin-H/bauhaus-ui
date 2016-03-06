
import MaterialUiTime from '../MaterialUiTime'
import BrowserTime from '../BrowserTime'
import { $, mobile } from 'bauhaus-ui-module-utils'

const getComponent = () => {
  if (mobile === true) {
    return BrowserTime
  }
  return MaterialUiTime
}

export default getComponent()
