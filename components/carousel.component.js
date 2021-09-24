import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Image, Pressable, TouchableOpacity, Video} from 'react-native';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    id: 0,
    title: 'Beautiful and dramatic Antelope Canyon',
    uri: 'BBJa32lCaaY'
  },
  {
    id: 1,
    title: 'Earlier this morning, NYC',
    uri: '8rAyO8ZTkns'
  },
  {
    id: 2,
    title: 'White Pocket Sunset',
    uri: 'lpcpsCY4Mco'
  },
  {
    id: 3,
    title: 'Acrocorinth, Greece',
    uri: 'V1Sqyfy3CT4'
  },
  {
    id: 4,
    title: 'The lone tree, majestic landscape of New Zealand',
    uri: 'AaMUrxJCZ6Y'
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = ({props, navigation})=> {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    const storyClick = (videoInfo) => {
      //console.warn(index);
      navigation.navigate("Video",{
        vidId: index
      });
      //console.warn(navigation);
    }
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {storyClick("sdlf")}}
      >
          <Image
            source={{uri: `https://img.youtube.com/vi/${item.uri}/maxresdefault.jpg`}}
            containerStyle={styles.imageContainer}
            style={styles.image}
          />

        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        layout={'default'}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth/2 - 50}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 10
  },
  item: {
    width: screenWidth /2 - 65,
    height: screenWidth - 150,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: 'white'
  }
});
