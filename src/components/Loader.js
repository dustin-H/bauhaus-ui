import React, {
	Component
}
from 'react';
import {
	getModule
}
from '../utils/moduleLoader/index.js';

class Loader extends Component {

	createSetStateAction(key) {
		const {
         actions
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

	/*shouldComponentUpdate(newProps, newState) {
		//var shouldUpdate = !(JSON.stringify(this.props.bauhaus) === JSON.stringify(newProps.bauhaus));
		var props = Object.assign({}, newProps);
		props.bauhaus._path += '.' + props.bauhaus.name;
		props.bauhaus._state = props.bauhaus._contentState[props.bauhaus._path] ||  {};

		var isEqual1 = _.isEqual(this.props.bauhaus._path, props.bauhaus._path);
		var isEqual2 = _.isEqual(this.props.bauhaus._state, props.bauhaus._state);
		console.log('Should Update', isEqual1, isEqual2);
		//console.log(this.props.bauhaus._contentState, newProps.bauhaus._contentState);
		return !(isEqual1 && isEqual2);
	}*/

	render() {
		const {
			bauhaus
		} = this.props;
		var props = Object.assign({}, this.props);
		props.bauhaus._path += '.' + props.bauhaus.name;
		props.bauhaus._state = props.bauhaus._contentState[props.bauhaus._path] ||  {};
		props.bauhaus._setState = this.createSetStateAction(props.bauhaus._path);
		if(props.bauhaus.components != null && typeof props.bauhaus.components === 'object' && props.bauhaus.components.length > 0) {
			var childrenGenerators = [];
			for(var i in props.bauhaus.components) {
				var component = props.bauhaus.components[i];
				component._contentState = props.bauhaus._contentState;
				component._path = props.bauhaus._path + '.' + i;
				component._state = component._contentState[component._path] ||  {};
				component._setState = this.createSetStateAction(component._path);
				childrenGenerators.push(this.createChild(component));
			}
			props.bauhaus._childrenGenerators = childrenGenerators;
			return React.createElement(getModule(props.bauhaus.name), props);
		}
		else {
			return React.createElement(getModule(props.bauhaus.name), props);
		}
	}
}

export default Loader;
