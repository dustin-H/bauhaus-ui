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
	createChild(component) {
		return function(props) {
			return React.createElement(Loader, Object.assign({}, props, {
				bauhaus: component
			}));
		}
	}

	render() {
		const {bauhaus} = this.props;
		var props = Object.assign({}, this.props);
		if(bauhaus.components != null && typeof bauhaus.components === 'object' && bauhaus.components.length > 0) {
			var childrenGenerators = [];
			for(var i in bauhaus.components) {
				var component = bauhaus.components[i];
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
