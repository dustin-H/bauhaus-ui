import React, {
	Component
} from 'react';
import Look from 'react-look/dom';
import styles from './ContentWrapper.styles.js';

class ContentWrapper extends Component {
	render() {
		return (
			<div look={"wrapper"}>
				{this.props.children}
			</div>
		);
	}
}

export default Look(ContentWrapper, styles);
