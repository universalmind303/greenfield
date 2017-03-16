import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'
import ListItem from './ListItem.jsx'

export default function List (props) {
  return (
    <table className="list">
      <tbody>
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
      </tbody>
    </table>
  )
}
