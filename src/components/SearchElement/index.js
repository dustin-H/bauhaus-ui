import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';

class SearchElement extends Component {
   handleClick(){
      const {actions, pathname} = this.props;
		actions
			.router
			.pushLocation({pathname: pathname});
   }
	render() {
		const {state, actions, title, description} = this.props;

		return (
			<div look={styles.resultFrame}>
				<div look={styles.resultTitle} onMouseDown={this.handleClick.bind(this)}>{title}</div>
				<div look={styles.resultDescription}>{description}</div>
			</div>
		);
	}
}

SearchElement.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(SearchElement, styleSheet);

export default look(SearchElement);
