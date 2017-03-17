import React from 'react'
import App from './App.jsx'

export default function ({list, clear, save}) {
  return (
    <div className='footer'>
      <input type="submit" value="Save" onClick={save(list)}/>

      <input type="submit" value="Clear all" onClick={clear}/>
    </div>
  )
}
