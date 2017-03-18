import React from 'react'
// any function that doesnt directly affect state can go into here.


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

export const save = (budget, list) => {
  let listName = prompt("list name?")
  var listObj = {
    listName:listName,
    budget: budget,
    list: list
  } 
  var lists = JSON.parse(localStorage.getItem('lists')) || []
  lists.push(listName)
  localStorage.setItem('lists', JSON.stringify(lists))
  localStorage.setItem(listName, JSON.stringify(listObj))
}
export const savedLists = () => {
  return JSON.parse(localStorage.getItem('lists')) || []

}

export const remove = listName => {
  if(confirm("are you sure?")){
    localStorage.removeItem(listName)
    var lists = JSON.parse(localStorage.getItem('lists'))
    for (var i = 0; i < lists.length; i++) {
      if(lists[i] === listName) {
        lists.splice(i, 1)
      }
    }
    localStorage.setItem('lists', JSON.stringify(lists))
  }
}

export const retrieve = listName => JSON.parse(localStorage.getItem(listName)) || []