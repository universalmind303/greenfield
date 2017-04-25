import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import App from './App.js'
import InlineEdit from './InlineEdit.js'

export default ({budget, updateBudget, total}) => {
  let status = 'onBudget';
  budget = Number(budget);
  if(budget) {
    if(total >= (budget * .9) && total < budget) {
      status = "warningBudget";
    } else if( total >= budget) {
      status = 'overBudget';
    }
  }

  return (
    <View >      
    <InlineEdit
      value={budget}
      action={updateBudget}
      type="number"
      prefix="$&nbsp;"
      />
    </View>
  )
}
