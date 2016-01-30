import React, {
	Component
}
from 'react';
import {
	getModule
}
from '../utils/moduleLoader/index.js';
import Children from './Children.js';

class Loader extends Component {

	createSetStateAction(key) {
		const {
			state, actions
		} = this.props;
		return function(newState) {
			actions.router.setContentState(key, newState);
		}
	}

	createChild(component) {
		return function(props) {
			return React.createElement(Loader, Object.assign({}, props, {
				bauhaus: component
			}));
		}
	}

	render() {
		const {
			bauhaus
		} = this.props;
		var props = Object.assign({}, this.props);
		props.bauhaus._path += '.' + bauhaus.name;
		props.bauhaus._state = props.bauhaus._contentState[props.bauhaus._path] ||  {};
      props.bauhaus._setState = this.createSetStateAction(props.bauhaus._path);
		if(bauhaus.components != null && typeof bauhaus.components === 'object' && bauhaus.components.length > 0) {
			var childrenGenerators = [];
			for(var i in bauhaus.components) {
				var component = bauhaus.components[i];
				component._contentState = props.bauhaus._contentState;
				component._path = props.bauhaus._path + '.' + i;
				component._state = component._contentState[component._path] ||  {};
            component._setState = this.createSetStateAction(component._path);
				childrenGenerators.push(this.createChild(component));
			}
			props.bauhaus._childrenGenerators = childrenGenerators;
			return React.createElement(getModule(bauhaus.name), props);
		}
		else {
			return React.createElement(getModule(bauhaus.name), props);
		}
	}
}

export default Loader;
