import React from 'react'
// any function that doesnt directly affect state can go into here.


export const roundToTwo = num => Math.round(num * 100)/100;
export const retrieveLists = () =>  JSON.parse(localStorage.getItem('lists')) || []
export const retrieveListName = listName => JSON.parse(localStorage.getItem(listName)) || []

export const nestedIndexOf = (arr, itemName, itemPrice) => {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].name === itemName && arr[i].price === itemPrice){
      return i;
    }
  }
}
