import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';

class Link extends Component {
	render() {
      const styles = StyleSheet.create('Link', this.props.activeStyle);
      var style = [styles.link];
      if
		return (
			<a href="#" look={style} onClick="">MyLink</a>
		);
	}
}

//var styles = StyleSheet.create(Link, styleSheet);

export default Look(Link);
