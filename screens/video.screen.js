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
import rick from '../resources/rick.mp4';
import jeenie from '../resources/jeenie.mp4'
import joma from '../resources/joma.mp4';
import valo from '../resources/valo.mp4';
import tommy from '../resources/tommy.mp4';


import { Video } from 'expo-av';
import BottomDeck from '../components/bottomdeck.component';
import Swiper from 'react-native-swiper';

const screen = Dimensions.get('screen');

let VideoStream = [
  {
    id: 0,
    vid: rick
  },
  {
    id: 0,
    vid: jeenie,
  },
  {
    id: 0,
    vid: joma,
  },
  {
    id: 0,
    vid: valo,
  },
  {
    id: 0,
    vid: tommy
  }
]

export default function VideoScreen({ route, navigation }) {
  const { vidId } = route.params;
  const video = React.useRef(null);
  const [playing, setPlaying] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const onPlayPausePress = () => {
    if(playing == -1){
      setPlaying(currentPage);
    }
    if(currentPage == playing){
      setPlaying(-1);
    }
  }

  const onSwipe =(index) => {
    setCurrentPage(index);
    setPlaying(index);
  }

  const stopPlay = (val) => {
    setPlaying(-1);
  }

  
  return (
    <View style={styles.container}>
      <Swiper 
        horizontal={false}
        showsButtons={false}
        showsPagination={false}
        onIndexChanged={(index) => { return onSwipe(index)}}
      > 

        <View >
          <TouchableWithoutFeedback 
            onPress={onPlayPausePress}
          >
            <Video
              ref={video}
              style={styles.video}
              source={VideoStream[vidId].vid}
              resizeMode="cover"
              shouldPlay={playing == 0? true: false}
              isLooping={true}
            />
          </TouchableWithoutFeedback>
        </View>


        <View >
          <TouchableWithoutFeedback 
            onPress={onPlayPausePress}
          >
            <Video
              ref={video}
              style={styles.video}
              source={rick}
              resizeMode="cover"
              shouldPlay={playing == 1? true: false}
              isLooping={true}
            />
          </TouchableWithoutFeedback>
        </View>

        <View >
          <TouchableWithoutFeedback 
            onPress={onPlayPausePress}
          >
            <Video
              ref={video}
              style={styles.video}
              source={jeenie}
              resizeMode="cover"
              shouldPlay={playing == 2? true: false}
              isLooping={true}
            />
          </TouchableWithoutFeedback>
        </View>

        <View >
          <TouchableWithoutFeedback 
              onPress={onPlayPausePress}
            >
              <Video
                ref={video}
                style={styles.video}
                source={joma}
                resizeMode="cover"
                shouldPlay={playing == 3? true: false}
                isLooping={true}
              />
          </TouchableWithoutFeedback>
        </View>

        <View >
          <TouchableWithoutFeedback 
              onPress={onPlayPausePress}
            >
              <Video
                ref={video}
                style={styles.video}
                source={valo}
                resizeMode="cover"
                shouldPlay={playing == 4? true: false}
                isLooping={true}
              />
          </TouchableWithoutFeedback>
        </View>
        
        <View >
          <TouchableWithoutFeedback 
              onPress={onPlayPausePress}
            >
              <Video
                ref={video}
                style={styles.video}
                source={tommy}
                resizeMode="cover"
                shouldPlay={playing == 5? true: false}
                isLooping={true}
              />
          </TouchableWithoutFeedback>
        </View>
     </Swiper>
        <BottomDeck 
          navigation={navigation}
          stopPlay={stopPlay}
      />
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
