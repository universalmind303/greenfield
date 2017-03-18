import React from 'react'
import App from './App.jsx'
import {save, savedLists, retrieve, remove} from './utils.jsx'
import Dropdown from 'react-dropdown'


// need to convert this to have state for the list
export default function ({budget, handleListChange, list, clear, listName}) {
    const saved = savedLists()
    return (
      <div className='footer'>
        <Dropdown 
        onChange= {handleListChange}
        options= {saved}
        placeholder="Your Lists" 
        />

        <input type="submit" value="Save" onClick={() => save(budget, list)}/>
        <input type="submit" value="Clear all" onClick={() => clear()}/>
        <input type="submit" value="Delete list" onClick={() => remove(listName)}/>

      </div>
    )
  
}
