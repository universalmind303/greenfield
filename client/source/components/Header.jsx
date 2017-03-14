import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default ({budget, updateBudget, total}) => {
  return (
    <div className="header">
      <h1> Budget </h1>
      <InlineEdit text={'$ ' + budget} updateBudget={updateBudget}/>

      <h1> Total </h1>
      <p>$ {total}</p>
    </div>
  )
}
