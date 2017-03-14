import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'


export default function ListItem (props) {
  return (
    <div className="listItems">
      {props.list.map(function(item) {
        return (
          <div className="listItem">
            <InlineEdit
              text={item.name}
              updateName={props.updateName}
            />
          <InlineEdit
              text={'$ ' + item.price}
              updatePrice={props.updatePrice}
            />
          </div>
        )
      })}
    </div>
  )
}
