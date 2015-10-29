import React, { Component } from 'react';
import ContentWrapper from './ContentWrapper.js';
import MaxWidthBox from './MaxWidthBox.js';
import Look from 'react-look/dom';
import styles from './Welcome.styles.js';

class Welcome extends Component {
  render(look) {
    const data = this.props.data;
    const s = styles;
    return (
      <MaxWidthBox boxcolor={data.boxcolor} color={data.color}>
				<ContentWrapper>
					<div look="modernweb">
                  <br/><br/><img look="logo" src="Logo.svg"/><br/>
						<span look="dh">{data.textA}</span><br/>{data.textB}<br/><br/><br/>
					</div>
				</ContentWrapper>
			</MaxWidthBox>
      );
  }
}

export default Look(Welcome, styles);
