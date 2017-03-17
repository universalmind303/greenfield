import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'

export default function ListItem (props){
  return (
    <tr className="listItem">
      <td className="action">
        <button onClick={() => {props.handleRemove(props.item)}}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
      <td className="name">
        <InlineEdit
          value={props.item.name}
          action={(value) => {props.updateName(value, props.item)}}
          type="text"
          />
      </td>
      <td className="price">
        <InlineEdit
          value={props.item.price}
          action={(value) => {props.updatePrice(value, props.item)}}
          type="number"
          prefix="$&nbsp;"
          />
      </td>
    </tr>
  )
}
