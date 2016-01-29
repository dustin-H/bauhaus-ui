import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';
import {$} from '../../utils/i18n/index.js';
import _ from 'lodash';

class JsonForm extends Component {
   constructor(){
      super();
      this.state = {

      }
   }
   setValue(path){
      var path = 'test.look.seven';
      var arr = path.split('.');
      var dataObject = {};
      var data = dataObject;
      for(var i in arr){
         var key = arr[i];
         if(data)
      }

   }
   render() {
		const {bauhaus} = this.props;
		return (
			<div>
				{_
					.map(bauhaus._childrenGenerators, function(component, key) {
						return component({some: 'props HAHA', key: key})
					})}
			</div>
		);
	}
}

import styleSheet from './style.js';
var styles = StyleSheet.create(JsonForm, styleSheet);

export default Look(JsonForm);
