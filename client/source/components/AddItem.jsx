import React from 'react'

export default function AddItem ({action}) {
  return <a className="addItem clearfix" onClick={action} href="#">Add Item</a>;
}
