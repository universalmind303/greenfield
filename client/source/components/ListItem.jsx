import React from 'react';
import App from './App.jsx';
import InlineEdit from './InlineEdit.jsx';

export default function ListItem ({item, removeItem, updateItem, autoFocus,focused}){
  return (
    <tr className="listItem">
      <td className="delete">
        <button onClick={() => removeItem(item.key)}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
      <td className="name">
        <InlineEdit
          value={item.name}
          action={value => updateItem(item.key, "name", value)}
          type="text"
          placeholder="Item"
          autoFocus={autoFocus}
          />
      </td>
      <td className="price">
        <InlineEdit
          value={item.price}
          action={value => updateItem(item.key, "price", value)}
          type="number"
          prefix="$&nbsp;"
          placeholder="$ 0"
          />
      </td>
    </tr>
  )
}
