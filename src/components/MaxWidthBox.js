import React, {Component} from 'react';

class MaxWidthBox extends Component {
	render() {
		const Children = this.props.bauhaus.Children;
		return (
			<Children data={8} bauhaus={this.props.bauhaus}></Children>
		);
	}
}

export default function() {
	return MaxWidthBox;
};
