import React, {Component} from 'react';
import _ from 'lodash';

class Children extends Component {
	render() {
		const bauhaus = this.props.bauhaus;
		return (
			<div>{_
					.map(this.props.bauhaus.children, function(value, key) {
						return value(this.props)
					})}
			</div>
		);
	}
}

export default Children;
