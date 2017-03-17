import React from 'react'
import App from './App.jsx'
import {save} from './utils.jsx'


export default function ({list, clear}) {
  return (
    <div className='footer'>
      <input type="submit" value="Save" onClick={() => save(list)}/>
      <input type="submit" value="Clear all" onClick={clear}/>
    </div>
  )
}
