import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MyCarousel from '../components/carousel.component';
import NavBar from '../components/navbar.component';
//import YoutubePlayer from 'react-native-youtube-iframe';
import TopBar from '../components/topbar.component';
import BottomDeck from '../components/bottomdeck.component';
//import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


export default function FeedScreen() {
  return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="auto"/>
        <View style={styles.container}>
          <NavBar/>
          <TopBar/>
          <MyCarousel />
          <BottomDeck/>
          <View>
            {/*<YoutubePlayer
              height={300}
              play={true}
              videoId={'84WIaK3bl_s'}
            />*/}

          </View>
        </View>
      </SafeAreaView>
  );
};

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
