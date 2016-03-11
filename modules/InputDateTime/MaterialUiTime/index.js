import React, { PropTypes, Component } from 'react'
import TimePicker from 'material-ui/lib/time-picker/time-picker'
import Look, { StyleSheet } from 'react-look'

class MaterialUiTime extends Component {
  handleChange(nope, value) {
    const {onChange} = this.props
    onChange(value)
  }
  componentWillReceiveProps(newProps) {
    this.refs.picker.setTime(newProps.value)
  }
  componentDidMount() {
    this.refs.picker.setTime(this.props.value)
  }
  render() {
    const {value, valid, onChange, hint} = this.props
    return (
      <TimePicker hintText={ hint } ref="picker" onChange={ this.handleChange.bind(this) } underlineShow={ false } fullWidth={ true } style={ {  width: '100%'} }
        hintStyle={ {  bottom: '16px',  left: '16px'} } format="24hr" inputStyle={ inputStyles } />
    )
  }
}

const inputStyles = {
  padding: '8px !important',
  paddingLeft: '16px !important',
  paddingRight: '16px !important',
  borderRadius: '5px !important', // 4px
  border: '1px solid rgb(210, 210, 210) !important',
  boxSizing: 'border-box !important',
  backgroundColor: 'transparent !important',
  outline: 'none !important',
  color: '#4E4E4E !important',
  font: 'initial !important',
  fontSize: '14px !important',
  fontFamily: 'Open Sans !important',
  width: '100% !important',
  height: 'auto !important',
  ':focus': {
    border: '1px solid #20C753 !important', // F96331 6E00FF
    color: '#000000 !important'
  }
}

export default MaterialUiTime
