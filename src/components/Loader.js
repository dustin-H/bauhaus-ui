import React, {Component} from 'react';
import {getModule} from '../utils/componentLoader/index.js';
import Children from './Children.js';

class Loader extends Component {
	render() {
		const bauhaus = this.props.bauhaus;
		if (bauhaus.components != null && typeof bauhaus.components === 'array' && bauhaus.components.length > 0) {
			var childrenGenerators = [];
			for (var i in bauhaus.components) {childrenGenerators.push(function(props) {
					return React.createElement(Loader, Object.assign({}, props, {
						bauhaus: bauhaus.components[i]
					}));
				}.bind(bauhaus));}
			var props = Object.assign({}, this.props);
			props.bauhaus._childrenGenerators = childrenGenerators;
			props.bauhaus.Children = Children;
			return React.createElement.apply(getModule(bauhaus.name), props);
		} else {return React.createElement(getModule(bauhaus.name), this.props);}
	}
}

export default Loader;
