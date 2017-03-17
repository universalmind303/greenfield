import React from 'react'

export const roundToTwo = num => Math.round(num * 100)/100;


  //Helper function to find index of an item in list
  //Takes the list array and a name as a target
export const nestedIndexOf = (arr, itemName, itemPrice) => {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].name === itemName && arr[i].price === itemPrice){
      return i;
    }
  }
}

export const save = list => localStorage.setItem('savedList', JSON.stringify(list));


