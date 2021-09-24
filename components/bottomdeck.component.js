import React from 'react';
import { StyleSheet, View, Pressable} from 'react-native';
import Icon from 'react-native-ico'


export default function BottomDeck({navigation, stopPlay}) {

  const deckButtonPress = (deckvalue) => {
    if(deckvalue == "home"){
      //navigation.navigate("Feed");
      try{
        stopPlay(-1);
      }catch{
        navigation.navigate("Feed");
      }
      navigation.navigate("Feed");
    }
  }

  return (
      <View style={styles.BottomDeckContainer}>
        <View style={styles.BottomDeck}>
          <View style={{flexDirection: 'row'}}>
            <Pressable 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
              onPress={() => deckButtonPress("home")}
            >
              <Icon 
                name="home" 
                group="universalicons" 
                style={styles.IconStyle}
                color="white"
              />
              
            </Pressable>
            <Pressable 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >
              <Icon 
                name="magnifying-glass"
                group="font-awesome" 
                style={styles.IconStyle}
                color="white"
              />
              
            </Pressable>
            <Pressable 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >
              
              <Icon 
                name="user-outline" 
                group="material-design" 
                style={styles.IconStyle}
                color="white"
              />
            </Pressable>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  BottomDeckContainer: {
    flex:1,
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    left: '20%',
    right: '20%'
  },
  BottomDeck: {
    flexDirection: 'row',
    backgroundColor: '#2b2b2b',
    width: '80%',
    borderRadius: 40,
    justifyContent: 'space-evenly'
  },
  IconBehave: {
    padding: 15
  },
  IconStyle: {
    height:20,
    width:20,
    color:"#fff"
  }
});
