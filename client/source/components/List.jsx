import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'
import ListItem from './ListItem.jsx'

export default function List (props) {
  return (
    <ul className="listItems">
      {props.list.map(function(item) {
        return (
          <ListItem 
            item={item} 
            key={Math.random()} 
            handleRemove={props.handleRemove} 
            updateName={props.updateName}
            updatePrice={props.updatePrice}
          />
        )
      })}
    </ul>
  )
}

/*-------------------
22  updateName={props.updateName}
28  updatePrice={props.updatePrice}
-------------------*/
