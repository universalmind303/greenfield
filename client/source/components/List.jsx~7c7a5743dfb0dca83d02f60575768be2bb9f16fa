import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'
import ListItem from './ListItem.jsx'

export default function List (props) {
  return (
    <ul className="listItems">
      {props.list.map(function(item) {
        return <ListItem
          item={item}
          handleRemove={props.handleRemove}
        />
      })}
    </ul>
  )
}
