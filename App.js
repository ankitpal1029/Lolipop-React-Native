import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MyCarousel from './components/carousel.component';
import NavBar from './components/navbar.component';
import YoutubePlayer from 'react-native-youtube-iframe';
import TopBar from './components/topbar.component';


export default function App() {

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        {/*<StatusBar style="light" />*/}
        <StatusBar style="dark"/>
        <NavBar/>
        <TopBar/>
        {/*<MyCarousel/>*/}
        <MyCarousel />
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
