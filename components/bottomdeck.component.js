import React from 'react';
import { StyleSheet, View, Pressable} from 'react-native';
import Icon from 'react-native-ico'


export default function BottomDeck() {

  return (
      <View style={styles.BottomDeckContainer}>
        <View style={styles.BottomDeck}>
          <View style={{flexDirection: 'row'}}>
            <Pressable 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >
              <Icon name="magnifying-glass" height="20" width="20" color="#448aff"/>
              
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
    borderRadius: 40
  },
  IconBehave: {
    padding: 15
  },
});
