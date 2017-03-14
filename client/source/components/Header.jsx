import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default ({budget, updateBudget, total}) => {
  return (
    <div className="header">
      <div className="statBlock half">
        <div className="label">Budget</div>
        <div className="value">
          <InlineEdit text={'$ ' + budget} updateBudget={updateBudget}/>
        </div>
      </div>
      <div className="statBlock half right">
        <div className="label">Total</div>
        <div className="value">$ {total}</div>
      </div>
    </div>
  )
}
