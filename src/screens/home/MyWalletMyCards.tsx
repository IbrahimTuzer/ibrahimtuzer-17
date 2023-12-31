import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getMyCards, selectMyCards } from '../../slices/myCards';
import { getMyCardsBottom, selectMyCardsBottom } from '../../slices/myCardsBottom';

const MyWalletMyCards = () => {

  const myCards = useSelector(selectMyCards)
  const myCardsBottom = useSelector(selectMyCardsBottom)
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(getMyCards())

    //@ts-ignore
    dispatch(getMyCardsBottom())
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.istanbulkartImage} source={{uri: myCards}} />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Kredi / Banka Kartlarım</Text>
          <Text style={styles.text2}>MasterPass'te kayıtlı kartların var. Kayıtlı kartınla ödeme yapmak için hesabını ilişkilendirmelisin.</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.masterpass}>
        <Image style={styles.masterpassImage} source={{uri: myCardsBottom}}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default MyWalletMyCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    marginHorizontal: 10,
    marginVertical: 10,
    position: 'relative',
  },
  istanbulkartImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
    borderRadius: 12,
  },
  textContainer: {
    position: 'absolute',
    top: '70%',
    left: 0,
    right: 0,
    alignItems: 'flex-start', 
  },
  text1: {
    padding: 10,
    fontWeight: 'bold',
    color: '#595959' ,
    fontSize: 16
  },
  text2: {
    paddingHorizontal: 10,
    color: '#555555' ,
    fontSize: 10
  },
  masterpass: {
    alignItems: 'center',
    marginTop: 20
  },
  masterpassImage: {
    width: 357,
    height: 80,
    resizeMode: 'contain'
  }
});
