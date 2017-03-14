import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'


export default function ListItem (props) {
  return (
    <ul className="listItems">
      {props.list.map(function(item) {
        return (
          <li className="listItem">
            <div className="half">
              <InlineEdit
                text={item.name}
                updateName={props.updateName}
                />
            </div>
            <div className="half right">
              <InlineEdit
                text={'$ ' + item.price}
                updatePrice={props.updatePrice}
                />
            </div>
        </li>
        )
      })}
    </ul>
  )
}
