import React from 'react'
import App from './App.jsx'

export default class InlineEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }

    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.focus();
  }

  editElement() {
    this.setState({editing: true}, function() {
      this.focus()
    })
  }

  keyAction(e) {
    if(e.keyCode === 13) {
      if(this.props.updateBudget) {
        this.props.updateBudget(eval(e.target.value))
      }
      if(this.props.updateItemInfo) {
        this.props.updateItemInfo(e.target.value, e.target.ref)
      }
      this.setState({editing: false})
    }
  }

  renderElement() {
    if(this.state.editing) {
      return(
        <div>
          <input type="text" onKeyDown={this.keyAction.bind(this)} ref={input => this.textInput = input} />
        </div>

      )
    } else {
      return(
        <div onClick={this.editElement.bind(this)}>
          {this.props.text}
        </div>
      )
    }
  }

  render() {
    return this.renderElement();
  }
}