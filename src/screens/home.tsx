import React, { useEffect } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useAppDispatch } from '../store/hook';
import { loadItems } from '../store/items/item.actions';
import { useAppSelector } from '../store/hook';
import { selectShirt, selectShoes, selectpants } from '../store/items/item.slice';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }:{ navigation: any }) {

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
    dispatch(loadItems())
    };

    fetchData();
  }, []);



  // Navigate to the SavedSet screen
  const pressHandler = () => {
    navigation.navigate('SavedSets');
  };

  const navigateFunc = (path: string) => {
    navigation.navigate('Outfit', { path })
  };



      return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}>Pick an outfit</Text>
    <CustomButton title="Saved Outfits" onPress={pressHandler} />
        <View style={styles.imageStyle}>
        <TouchableOpacity onPress={() => navigateFunc('shirt')}>
          <Image source={require('../assets/shirt.png')} style={styles.imageShirt}/>
        </TouchableOpacity>
        </View>
        <View style={styles.imageStyle}>
        <TouchableOpacity onPress={() => navigateFunc('pants')}>
          <Image source={require('../assets/pants.png')} style={styles.imagePants} />
        </TouchableOpacity>
        </View>
        <View style={styles.imageStyle}>
        <TouchableOpacity onPress={() => navigateFunc('shoes')}>
          <Image source={require('../assets/shoes.png')} style={styles.imageShoes} />
        </TouchableOpacity>
        </View>
    </View>
  );
};

const CustomButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageShirt: {
    width: 160,
    height: 200,
    flex: 1,
  },
  imagePants: {
    width: 220,
    height: 200,
    flex: 1,
  },
  imageShoes: {
    width: 160,
    height: 130,
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 2,
    flex: 1,
    margin: 3,
    padding: 2,
    borderColor: '#333',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },

  button: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 50,
    height: 50,
    backgroundColor: '#7FFF00',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 1,
  },
});