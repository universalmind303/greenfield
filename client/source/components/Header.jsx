import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default ({budget, updateBudget, total}) => {
  let header = 'onBudget'
  if(budget) {
    if(total >= (budget * .9) && total < budget) {
      header = "warningBudget";
    } else if( total >= budget) {
      header = 'overBudget'
    } 
  }

  return (
    <div className={header}>
      <div className="statBlock half">
        <div className="label">Budget</div>
        <div className="value">
          $ <InlineEdit text={budget} updateBudget={updateBudget}/>
        </div>
      </div>
      <div className="statBlock half right">
        <div className="label">Total</div>
        <div className="value">$ {total}</div>
      </div>
    </div>
  )
}
