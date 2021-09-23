import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';


export default function Categories() {

  return (
      <View style={styles.TopBarContainer}>
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'}}>
            
            <Pressable 
              onPress={() => changeText('Favourites')} 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >
              {/*<Icon name="magnifying-glass" height="26" width="26" color="#448aff"/>*/}
              
            </Pressable>
            <Pressable 
              onPress={() => changeText('Favourites')} 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >
            </Pressable>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  TopBarContainer: {
    position: 'relative',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#3d3b3b',
    //top: 30,
  },
  TopBar: {
    flexDirection: 'row',
    backgroundColor: '#2b2b2b',
    width: '100%',
    justifyContent: 'space-around',
  },
  IconBehave: {
    padding: 26
  },
});
