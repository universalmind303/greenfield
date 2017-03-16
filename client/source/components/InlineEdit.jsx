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
    this.setState({editing: false})
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
      if(this.props.action){
        this.props.action(e.target.value)
      } else {
        cosole.warn('No action set for', this)
      }
      this.setState({editing: false})
    }
  }

  renderElement() {
    if(this.state.editing) {
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
    } else {
      return(
        <span onClick={this.editElement} className="inlineEdit">
          <span className="prefix">{this.props.prefix}</span>
          {this.props.value}
        </span>
      )
    }
  }

  render() {
    return this.renderElement();
  }
}
