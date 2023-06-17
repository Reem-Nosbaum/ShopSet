import React from 'react';
import {Text, View} from 'react-native';
import { globalStyles } from '../styles/global';
import { useAppSelector } from '../store/hook';
import { selectSavedItems } from '../store/items/item.slice';

export default function SavedSets() {
  const savedItems = useAppSelector(selectSavedItems)
console.log(savedItems)
  return (
    <View style={globalStyles.container}>
      <Text>this is SavedSets screen</Text>

    </View>
  );
}
