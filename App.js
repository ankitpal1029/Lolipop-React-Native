import React  from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from './screens/feed.screen';
import VideoScreen from './screens/video.screen'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Video" component={VideoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Feed" component={FeedScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
      {/*<SafeAreaView style={{flex:1}}>
        <StatusBar style="auto"/>
        <View style={styles.container}>
          <NavBar/>
          <TopBar/>
          <MyCarousel />
          <BottomDeck/>
          <View>*/}
            {/*<YoutubePlayer
              height={300}
              play={true}
              videoId={'84WIaK3bl_s'}
            />*/}

      {/*</View>
        </View>
      </SafeAreaView>*/}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3b3b',
    justifyContent: 'flex-start',
    paddingTop: 30 
    //backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
