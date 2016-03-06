
import { pushLocation } from '../../actions/router.js'
import store from '../../store/store.js'



__GLOBAL__.npm = {
  react: require('react'),
  'react-lib-ReactTransitionGroup': require('react/lib/ReactTransitionGroup'),
  'react-lib-update': require('react/lib/update'),
  'react-lib-ReactComponentWithPureRenderMixin': require('react/lib/ReactComponentWithPureRenderMixin'),
  'react-lib-ReactFragment': require('react/lib/ReactFragment'),
  'react-dom': require('react-dom'),
  superagent: require('superagent'),
  lodash: require('lodash'),
  'react-look': require('react-look')
}

var state = store.getState()

__GLOBAL__.bauhaus = {
  mobile: state.responsive.mobile,
  superagentPlugin: require('../helpers/superagentPlugin.js'),
  $: require('../i18n/index.js').$,
  pushLocation: function(location) {
    store.dispatch(pushLocation(location))
  }
}
