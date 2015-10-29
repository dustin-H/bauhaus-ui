import React, { Component } from 'react';
import ContentWrapper from './ContentWrapper.js';
import MaxWidthBox from './MaxWidthBox.js';
import Look from 'react-look/dom';
import styles from './GrayBox.styles.js';

class GrayBox extends Component {
  bla() {
    console.log('bla');
  }
  test() {
    console.log('test');
  }
  render() {
    const data = this.props.data;
    styles.box.backgroundColor = data.backgroundColor;
    if (data.color) {
      styles.box.color = data.color;
    }
    var skew = 'skew(0deg, 0deg)';
    if (data.skew != null && typeof data.skew === 'number') {
      styles.box.transform = 'skew(0deg, ' + data.skew + 'deg)';
      skew = 'skew(0deg, ' + (data.skew * (-1)) + 'deg)';
    }
    /*return (
    	<img look="tri" src="Triangle.svg"/>
    );*/
    return (
      <div look="box">
				<div style={{transform: skew}}>
					<br/><br/><span look="header">{data.title}</span><br/><br/>
					{data.list.map(function(element, i) {
        return (<span key={i}>{element}<br/></span>);
      })}
					<br/><br/>
				</div>
			</div>
      );
  }
}

export default Look(GrayBox, styles);
