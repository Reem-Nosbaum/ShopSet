import React from 'react';
import {Button, Text, View} from 'react-native';
import { globalStyles } from '../styles/global';
import { useAppSelector } from '../store/hook';
import { selectSavedItems } from '../store/items/item.slice';

export default function SavedSets({ navigation }:{ navigation: any }) {
  const savedItems = useAppSelector(selectSavedItems)
console.log(savedItems)

const pressHandlerGoBack = () => {
  navigation.navigate('Home')
};

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerLeft: () => null, // Remove the header back button
  });
}, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Button title='Go back' onPress={pressHandlerGoBack} />
      <Text style={globalStyles.titleText}>this is SavedSets screen</Text>
    </View>
  );
}
