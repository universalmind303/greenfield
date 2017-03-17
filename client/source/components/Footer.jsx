import React from 'react'
import App from './App.jsx'

export default function ({example, clear}) {
  return (
    <div className='footer'>
      <input type="submit" value="Clear all" onClick={clear}/>
    </div>
  )
}
