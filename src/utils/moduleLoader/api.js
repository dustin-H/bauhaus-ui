
import {pushLocation} from '../../actions/router.js'
import store from '../../store/store.js'

__GLOBAL__.npm = {
  react: require('react'),
  'react-dom': require('react-dom'),
  superagent: require('superagent'),
  lodash: require('lodash'),
  'react-look': require('react-look')
};

__GLOBAL__.bauhaus = {
  superagentPlugin: require('../helpers/superagentPlugin.js'),
  $: require('../i18n/index.js').$
  pushLocation: function(location){
    store.dispatch(pushLocation(location))
  }
}
