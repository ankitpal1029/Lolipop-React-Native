import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MyCarousel from './components/carousel/carousel.component';
import NavBar from './components/navbar.component';

const { statusWidth, statusHeight } = StatusBar;

export default function App() {
  const [screentext, changeScreenText] = useState('some text');

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      {/*<StatusBar style="light" />*/}
      <StatusBar style="dark"/>
      <NavBar/>
      {/*<MyCarousel/>*/}
      <MyCarousel />
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
