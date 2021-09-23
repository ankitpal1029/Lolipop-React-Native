import React, {useState} from 'react';
import { SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Dimensions, 
  TouchableWithoutFeedback
} from 'react-native';
//import YoutubePlayer from 'react-native-youtube-iframe';
import somevid from '../resources/pan.mp4';
import { Video } from 'expo-av';
import BottomDeck from '../components/bottomdeck.component';
import Swiper from 'react-native-swiper';

const screen = Dimensions.get('screen');


export default function VideoScreen({ navigation }) {
  const video = React.useRef(null);
  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  }

  const onSwipe =(index) => {
    console.warn(index);
  }

  
  return (
    <View style={styles.container}>
      <Swiper 
        horizontal={false}
        showsButtons={false}
        showsPagination={false}
        onIndexChanged={(index) => onSwipe(index)}
      > 
        <View >
          <TouchableWithoutFeedback 
            onPress={onPlayPausePress}
          >

            <Video
              ref={video}
              style={styles.video}
              //source={{
                //uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                //uri: 'https://youtu.be/pgDOpIm6ozQ'
              //}}
              source={somevid}
              resizeMode="cover"
              shouldPlay={paused}
              isLooping={false}
            />
        </TouchableWithoutFeedback>
        </View>
        <View>
          <Text>sdlfksdf</Text>
        </View>
      </Swiper>
        <BottomDeck navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: screen.width,
    height: screen.height,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
