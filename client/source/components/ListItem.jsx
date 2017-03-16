import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default function ListItem (props){
  return (
    <li className="listItem">
      <div className="half">
        <InlineEdit
          value={props.item.name}
          action={(value) => {props.updateName(value, props.item)}}
          type="text"
        />
      </div>
      <div className="half right">
        <InlineEdit
          value={props.item.price}
          action={(value) => {props.updatePrice(value, props.item)}}
          type="number"
          prefix="$ "
        />
        <button onClick={() => {props.handleRemove(props.item)}}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  )
}
