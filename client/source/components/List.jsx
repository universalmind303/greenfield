import React from 'react'
import App from './App.jsx'
import InlineEdit from './InlineEdit.jsx'
import ListItem from './ListItem.jsx'

export default function List ({handleRemove, updateName,updatePrice, list, autoFocus}) {
  return (
    <table className="list">
      <tbody>
        {list.map((item, index, array) => {
          return (
            <ListItem
              item={item}
              key={Math.random()}
              handleRemove={handleRemove}
              updateName={updateName}
              updatePrice={updatePrice}
              autoFocus={index === array.length-1 && autoFocus}
              />
          )
        })}
      </tbody>
    </table>
  )
}
