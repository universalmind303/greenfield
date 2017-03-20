import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default ({budget, updateBudget, total}) => {
  let status = 'onBudget';
  budget = Number(budget);
  if(budget) {
    if(total >= (budget * .9) && total < budget) {
      status = "warningBudget";
    } else if( total >= budget) {
      status = 'overBudget';
    }
  }

  return (
    <div className={"header " + status}>
        <div className="column half">
          <div className="statLabel">Budget</div>
          <div className="statValue">
            <InlineEdit
              value={budget}
              action={updateBudget}
              type="number"
              prefix="$&nbsp;"
              />
          </div>
        </div>
        <div className="column half right">
          <div className="statLabel">Total</div>
          <div className="statValue">$ {total}</div>
        </div>
    </div>
  )
}
