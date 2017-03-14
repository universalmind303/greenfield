import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default function Header (props) {
  return (
    <div className="header">
      <h1> Budget </h1>
      <InlineEdit text={'$ ' + props.budget} updateBudget={props.updateBudget}/>

      <h1> Total </h1>
      <p>{'$ ' + props.total}</p>
    </div>
  )
}
