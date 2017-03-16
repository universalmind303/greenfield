import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default ({budget, updateBudget, total}) => {
  let header = 'onBudget header'
  if(budget) {
    if(total >= (budget * .9) && total < budget) {
      header = "warningBudget header";
    } else if( total >= budget) {
      header = 'overBudget header'
    }
  }

  return (
    <div className={header}>
      <div className="statBlock half">
        <div className="label">Budget</div>
        <div className="value">
          <InlineEdit
            value={budget}
            action={updateBudget}
            type="number"
            prefix="$ "
          />
        </div>
      </div>
      <div className="statBlock half right">
        <div className="label">Total</div>
        <div className="value">$ {total}</div>
      </div>
    </div>
  )
}
