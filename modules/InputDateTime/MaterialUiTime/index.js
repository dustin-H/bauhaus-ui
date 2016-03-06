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
        hintStyle={ {  bottom: '16px',  left: '16px'} } format="24hr" />
    )
  }
}

export default MaterialUiTime
