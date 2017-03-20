// Any function that doesnt directly affect state can go into here.
import React from 'react'

// use `number.toFixed(2)` instead of `roundtoTwo(number)`
export const retrieveLists = () =>  JSON.parse(localStorage.getItem('lists')) || []
export const retrieveListName = listName => JSON.parse(localStorage.getItem(listName)) || []
