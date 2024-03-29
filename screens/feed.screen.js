import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import MyCarousel from '../components/carousel.component';
import NavBar from '../components/navbar.component';
//import YoutubePlayer from 'react-native-youtube-iframe';
import TopBar from '../components/topbar.component';
import BottomDeck from '../components/bottomdeck.component';
//import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomFeed from '../components/bottomfeed.component';


export default function FeedScreen({navigation}) {
  return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="auto"/>
        <View style={styles.container}>
          <NavBar/>
          <TopBar/>
          <ScrollView>
          <MyCarousel navigation={navigation}/>
            </ScrollView>
          <BottomDeck navigation={navigation}/>

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
  },
});
