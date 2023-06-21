import React from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useAppSelector } from '../store/hook';
import { selectSavedItems } from '../store/items/item.slice';
import { ScrollView } from 'react-native-gesture-handler';

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
  

console.log(displaySet)

return (
  <View style={globalStyles.container}>
  <Button title="Go back" onPress={pressHandlerGoBack} />
  <ScrollView style={styles.scrollView}>

    {displaySet.length > 0 ? (
      displaySet.map((index: any) => (
        <View key={index} style={styles.savedSetContainer}>
            <FlatList
              data={displaySet}
              renderItem={renderSet}
              keyExtractor={(item) => item[0].id.toString()}
              horizontal
            />
        </View>
      ))
    ) : (
      <Text style={globalStyles.titleText}>No saved sets found.</Text>
    )}
  </ScrollView>
</View>
);
}

const styles = StyleSheet.create({
scrollView: {
flex: 1,
},
savedSetContainer: {
padding: 16,
marginBottom: 8,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
},
});