import React from 'react'
import App from './App.jsx'

export default class InlineEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      editing: false
    }
    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
    this.keyAction = this.keyAction.bind(this)
    this.editElement = this.editElement.bind(this)
  }

  focus() {
    this.textInput.focus()
    this.textInput.select()
  }

  blur(e) {
    console.log('blur')
    this.setState({editing: false})
    if(this.props.action){ this.props.action(e.target.value) }
  }

  editElement() {
    this.setState({editing: true}, function() {
      this.focus()
    })
  }

  keyAction(e) {
    if(e.keyCode === 27) {
      this.setState({editing: false})
    } else if(e.keyCode === 13) {
      this.blur(e);
    }
  }

  renderElement() {
    if(this.state.editing) {
      // if the input is being edited
      return(
        <span className="inlineEdit">
          <input
            className="inlineEditInput"
            type={this.props.type || 'text'}
            onBlur={this.blur}
            onKeyDown={this.keyAction}
            ref={input => this.textInput = input}
            defaultValue={this.props.value}
            step=".01"
            />
        </span>
      )
    } else if(this.props.value || this.props.value === 0) {
      // if value has been set
      return(
        <span onClick={this.editElement} className="inlineEdit">
          <span className="prefix">{this.props.prefix}</span>{this.props.value}
        </span>
      )
    } else {
      // use placeholder text
      return(
        <span onClick={this.editElement} className="inlineEdit">
          <span className="placeholder">{this.props.placeholder}</span>
        </span>
      )
    }
  }

  render() {
    return this.renderElement();
  }
}
