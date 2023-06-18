import React from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useAppSelector } from '../store/hook';
import { selectSavedItems } from '../store/items/item.slice';

export default function SavedSets({ navigation }: { navigation: any }) {
  const savedItems = useAppSelector(selectSavedItems);
  const displaySet = JSON.parse(JSON.stringify(savedItems));

  const pressHandlerGoBack = () => {
    navigation.navigate('Home');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null, // Remove the header back button
    });
  }, [navigation]);

  const renderSet = ({ item }: { item: any }) => (
    <View style={globalStyles.container}>
      {item.map((item: any) => (
        <View key={item.id}>
          <Text>Type: {item.type}</Text>
          <Text>Brand: {item.brand}</Text>
          <Text>Size: {item.size}</Text>
          <Text>Color: {item.color}</Text>
        </View>
      ))}
    </View>
  );
  
  return (
    <View style={globalStyles.container}>
      <Button title="Go back" onPress={pressHandlerGoBack} />
      <Text style={globalStyles.titleText}>All saved set: </Text>
      <FlatList
        data={displaySet}
        renderItem={renderSet}
        keyExtractor={(item) => item[0].id.toString()}
        numColumns={2}
      />
    </View>
  );
}
