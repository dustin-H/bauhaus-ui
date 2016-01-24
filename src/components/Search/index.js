import React, {PropTypes, Component} from 'react';
import look, {StyleSheet} from 'react-look';
import _ from 'lodash';
import SideBarListElement from '../SideBarListElement';
import {$} from '../../utils/i18n/index.js';

class Search extends Component {
	render() {
		const {state, actions} = this.props;

		return (
			<div look={styles.popup}>
				<input look={styles.input}></input>
				<br/><br/>
				<div look={styles.resultFrame}>
					<div look={styles.resultTitle}>Result A</div>
					<div look={styles.resultDescription}>This is a nice description of the Result, which contains everything you need!</div>
				</div>
				<div look={styles.resultFrame}>
					<div look={styles.resultTitle}>Result B</div>
					<div look={styles.resultDescription}>This is a nice description of the Result, which contains everything you need!</div>
				</div>
				<div look={styles.resultFrame}>
					<div look={styles.resultTitle}>Result C</div>
					<div look={styles.resultDescription}>This is a nice description of the Result, which contains everything you need!</div>
				</div>
				<div look={styles.resultFrame}>
					<div look={styles.resultTitle}>Result D</div>
					<div look={styles.resultDescription}>This is a nice description of the Result, which contains everything you need!</div>
				</div>
				<div look={styles.resultFrame}>
					<div look={styles.resultTitle}>Result E</div>
					<div look={styles.resultDescription}>This is a nice description of the Result, which contains everything you need!</div>
				</div>
				<div look={styles.resultFrame}>
					<div look={styles.resultTitle}>Result F</div>
					<div look={styles.resultDescription}>This is a nice description of the Result, which contains everything you need!</div>
				</div>
			</div>
		);
	}
}

Search.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Search, styleSheet);

export default look(Search);
