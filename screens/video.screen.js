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

const screen = Dimensions.get('screen');


export default function VideoScreen() {
  const video = React.useRef(null);
  const [playStatus, setStatus] = useState(true);
  const onPlayPausePress = () => {
    setStatus(!playStatus);
  }
  return (
    <View style={styles.container}>
      <View >
        <TouchableWithoutFeedback 
          onPress={onPlayPausePress}
        >
            <Video
            ref={video}
            style={styles.video}
            //source={{
              //uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            //}}
            source={somevid}
            resizeMode="cover"
            shouldPlay={false}
            isLooping={false}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
      </TouchableWithoutFeedback>
      </View>
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
