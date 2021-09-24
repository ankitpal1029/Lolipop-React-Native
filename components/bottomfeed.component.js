import React, {useEffect, useState} from 'react';
import {Text,View,StyleSheet, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';

import joma from '../resources/images/joma.jpg';
import valo from '../resources/images/valo.jpg';
import jeenie from '../resources/images/jeenie.jpg';
import tommy from '../resources/images/tommy.jpg';
import rick from '../resources/images/rick.jpg';

const ENTRIES1 = [
  {
    id: 0,
    title: 'Beautiful and dramatic Antelope Canyon',
    uri: 'BBJa32lCaaY',
    img: rick
  },
  {
    id: 1,
    title: 'Earlier this morning, NYC',
    uri: '8rAyO8ZTkns',
    img: jeenie
  },
  {
    id: 2,
    title: 'White Pocket Sunset',
    uri: 'lpcpsCY4Mco',
    img: joma,
  },
  {
    id: 3,
    title: 'Acrocorinth, Greece',
    uri: 'V1Sqyfy3CT4',
    img: valo,
  },
  {
    id: 4,
    title: 'The lone tree, majestic landscape of New Zealand',
    uri: 'AaMUrxJCZ6Y',
    img: tommy
  },
];

      //{ENTRIES1.map((ele, index) => {

        //return(
          //<Image
            //key={index}
            //source={{uri: `https://img.youtube.com/vi/${ele.uri}/maxresdefault.jpg`}}
            //containerStyle={styles.imageContainer}
            //style={styles.image}
          ///>
        //)
      //})}
export default function BottomFeed({ navigation }){
  const [entries, setEntries] = useState();
  useEffect(() => {
    setEntries(ENTRIES1)
  });


  return(
      <View style={styles.container}>
        <Image
          source={ENTRIES1[0].img}
          style={styles.image}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    position: 'relative',
    marginTop: 100,
    width: 500,
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode:'cover'
  },

  BottomFeed: {
    flexDirection: 'column',
    backgroundColor: '#2b2b2b',
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
  },
  IconBehave: {
    padding: 26
  },
  textStyle: {
    fontWeight: 'bold'
  }
})
