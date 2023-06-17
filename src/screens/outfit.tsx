import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, Image, StyleSheet, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { selectShirt, selectShoes, selectpants } from '../store/items/item.slice';
import { Item, Route } from '../types';
import { saveSet } from '../store/items/item.actions';



export default function Outfit({ route, navigation }:{route: Route, navigation: any}) {
  const dispatch = useAppDispatch();       

  const shirtItems = useAppSelector(selectShirt)

  const pantsItems = useAppSelector(selectpants)

  const shoesItems = useAppSelector(selectShoes)

  const [savedSet, setSavedSet] = useState<Item[]>([])

  const [selectedItems, setSelectedItems] = useState<null | Item[]>(null)
  useEffect(() => {
    if(route.params.path === 'shirt'){
      setSelectedItems(shirtItems)}
    else if(route.params.path === 'pants'){
      setSelectedItems(pantsItems)}
    else if(route.params.path === 'shoes'){
      setSelectedItems(shoesItems)
    }
  },[route.params.path] )

  const pressHandler = (item: Item) => {
    let newSavedSet = [...savedSet];
    const similarItemIndex = newSavedSet.findIndex((currItem) => currItem.type === item.type);
    if (similarItemIndex === -1) {
      newSavedSet = [...newSavedSet, item];
    } else {
      newSavedSet.splice(similarItemIndex, 1, item);
    }
    setSavedSet(newSavedSet);
  
    if(newSavedSet.length === 3){
      dispatch(saveSet(newSavedSet))
      navigation.navigate('SavedSets');

    }
    else{
    switch (route.params.path) {
      case 'shirt':
        navigation.navigate('Outfit', {path: 'pants'});
        break;
      case 'pants':
        navigation.navigate('Outfit', {path: 'shoes'});
        break;
      case 'shoes':
        navigation.navigate('Outfit', {path: 'shirt'});
        break;
      default:
        break;
    }
    }
  }


  const RenderItem = ({ item, changePage }: { item: Item, changePage: Function}) => {



    let imageSource = null

    if (item.type === 'shirt') {
      imageSource = require('../assets/shirt.png');
    } else if (item.type === 'pants') {
      imageSource = require('../assets/pants.png');
    } else if (item.type === 'shoes') {
      imageSource = require('../assets/shoes.png');
    }

    let textColorStyle = { color: item.color };
    if (item.color === 'white') {
      textColorStyle = { color: 'gray' };
    }

    return (
      <TouchableOpacity onPress={() => changePage(item)} style={styles.itemContainer}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <Text style={styles.selectedItemText}>brand: {item.brand}</Text>
        <Text style={[styles.selectedItemText, styles.textColor, textColorStyle]}>color: {item.color} </Text>
        <Text style={styles.selectedItemText}>Size: {item.size}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.container}>
      <Text>This is the Outfit screen</Text>
      <FlatList
        data={selectedItems}
        renderItem={({ item }) => <RenderItem item={item} changePage={pressHandler} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectedItemText: {
    fontSize: 16,
  },
  textColor: {
    fontSize: 16,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 5,
  },
});
