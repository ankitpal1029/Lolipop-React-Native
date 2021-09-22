import React from 'react-native';
import { View, StyleSheet, Text, Image, Dimension } from 'react-native';

const { screenWidth, screenHeight }  = Dimension.get('window');

const CarouselItem = ({item}) => {
  return(
    <View>
      <Image/>
      <View>
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    flex:1,
    width: screenWidth - 20,
    height: screenHeight/4,
    backgroundColor: white,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0.5, heigh: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: screenWidth - 20,
    height: screenHeight/4,
    borderRadius: 10
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5
  },
  itemDescription: {
    color: 'white',
  }
});
