import React from 'react'
import App from './App.jsx'

export default class InlineEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }

    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.keyAction = this.keyAction.bind(this)
    this.editElement = this.editElement.bind(this)
  }

  focus() {
    this.textInput.focus();
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
      if(this.props.updateBudget) {
        this.props.updateBudget('' + e.target.value)
      } else if(this.props.updateName) {
        this.props.updateName('' + e.target.value)
      } else if(this.props.updatePrice) {
        this.props.updatePrice('' + e.target.value)
      }
      this.setState({editing: false})
    }
  }

  renderElement() {
    if(this.state.editing) {
      return(
        <span className ="inlineEdit">
          <input 
          	type="text" 
          	onBlur={this.blur} 
          	onKeyDown={this.keyAction} 
          	ref={input => this.textInput = input} 
          	defaultValue={this.props.text}
          />
        </span>
      )
    } else {
      return(
        <span onClick={this.editElement}>
          {this.props.text}
        </span>
      )
    }
  }

  render() {
    return this.renderElement();
  }
}
