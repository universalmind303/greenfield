import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default function AddItem ({action}) {
  return  <Text onClick={action}>Add Item</Text>;
}
