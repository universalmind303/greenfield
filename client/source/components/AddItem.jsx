import React from 'react'

export default function AddItem ({handleSubmit,handleInputChange,disabled}) {
  return (
    <form onSubmit={handleSubmit} className="addItem clearfix">
      <input
        className="column half"
        type='text'
        name='name'
        placeholder='Item'
        autoFocus
        onChange={handleInputChange}
        />
      <input
        className="column fourth"
        type='number'
        step='.01'
        name='price'
        placeholder='Price'
        />
      <input
        className="column fourth"
        value='Add'
        type='submit'
        disabled={disabled}
        />
    </form>
  )
}
