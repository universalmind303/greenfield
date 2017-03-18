import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'
import ListItem from './ListItem.jsx'

export default function List ({handleRemove, updateName,updatePrice, list}) {
  return (
    <table className="list">
      <tbody>
        {list.map(function(item) {
          return (
            <ListItem
              item={item}
              key={Math.random()}
              handleRemove={handleRemove}
              updateName={updateName}
              updatePrice={updatePrice}
              />
          )
        })}
      </tbody>
    </table>
  )
}
