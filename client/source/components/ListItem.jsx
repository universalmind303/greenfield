import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'


export default function ListItem (props){
  var itemInfo = {
    itemName: props.item.name,
    itemPrice: props.item.price
  }

  return (
    <li className="listItem">
      <div className="half">
        <InlineEdit
          text={props.item.name}
        />
      </div>
      <div className="half right">
        <InlineEdit
          text={'$ ' + props.item.price}
        />
        <button onClick={function(){props.handleRemove(props.item)}}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  )
}

/*-------------------
22  updateName={props.updateName}
28  updatePrice={props.updatePrice}
-------------------*/
