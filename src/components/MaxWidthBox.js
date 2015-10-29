import React, {
	Component
} from 'react';
import styles from './MaxWidthBox.styles.js';
import Look from 'react-look/dom';

class MaxWidthBox extends Component {
	render() {
		styles.maxBox.backgroundColor = this.props.boxcolor;
		styles.maxBox.color = this.props.color;
		return (
			<div look="maxBox">
				{this.props.children}
			</div>
		);
	}
}

export default Look(MaxWidthBox, styles);
