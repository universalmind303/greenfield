import React from 'react'
import App from './App.jsx'
import {save, savedLists} from './utils.jsx'
import Dropdown from 'react-dropdown'



export default class Footer extends React.Component {
    constructor(props) {
    super(props)
    this.state ={
      budget: null,
      list: null
    }
  }


  render() {
    const budget = this.props.budget
    const list = this.props.list
    const lists = [...new Set(savedLists())]
    console.log(lists)

    return (
      <div className='footer'>
      <Dropdown options={
        lists.map(({listName}) => listName)

      }  value=""placeholder="Your Lists" />

        <input type="submit" value="Save" onClick={() => save(budget, list)}/>
        <input type="submit" value="Clear all" onClick={() => this.props.clear()}/>
      </div>
    )
  }
}
