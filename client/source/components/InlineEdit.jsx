import React from 'react';
import App from './App.jsx';

export default class InlineEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      focus: props.autoFocus || false
    };
    this.blur = this.blur.bind(this);
    this.focus = this.focus.bind(this);
    this.keyAction = this.keyAction.bind(this);
  }

  focus() {
    this.setState({focus: true});
    // see `componentDidMount`
  }

  blur(e) {
    this.setState({focus: false});
    if(this.props.action){
      this.props.action(e.target.value);
    }
  }

  keyAction(e) {
    if(e.keyCode === 27) {
      this.setState({focus: false});
    } else if(e.keyCode === 13) {
      this.blur(e);
    }
  }

  componentDidUpdate() {
    if(this.state.focus) {
      this.refs.input.focus();
      this.refs.input.select();
    }
  }

  render() {
    if(this.state.focus) {
      // if the input is being edited
      return(
        <span className="inlineEdit">
          <input
            className="inlineEditInput"
            type={this.props.type || 'text'}
            onBlur={this.blur}
            onKeyDown={this.keyAction}
            ref="input"
            defaultValue={this.props.value}
            step=".01"
            autoFocus={this.props.autoFocus}
            />
        </span>
      )
    } else if(this.props.value || this.props.value === 0) {
      // if value has been set
        // NOTE: 0 is normally falsy, but it's a valid input, so include it
      return(
        <span onClick={this.focus} className="inlineEdit">
          <span className="prefix">{this.props.prefix}</span>{this.props.value}
        </span>
      )
    } else {
      // otherwise, use placeholder text
      return(
        <span onClick={this.focus} className="inlineEdit">
          <span className="placeholder">{this.props.placeholder}</span>
        </span>
      )
    }
  }
}
