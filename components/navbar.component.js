import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-ico';


export default function NavBar() {

  return (
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <View>
            <Text style={styles.TextBehave}>Lolipop</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable 
              onPress={() => changeText('Favourites')} 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >
              {/*<Icon name="magnifying-glass" height="26" width="26" color="#448aff"/>*/}
              <Icon name="magnifying-glass" group="font-awesome" color="#fff"/>
            </Pressable>
            <Pressable 
              onPress={() => changeText('Favourites')} 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >
              <Icon name="user-outline" group="material-design" color="#fff"/>
            </Pressable>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  NavContainer: {
    position: 'relative',
    alignItems: 'center',
    //top: 30,
  },
  NavBar: {
    flexDirection: 'row',
    backgroundColor: '#2b2b2b',
    width: '100%',
    justifyContent: 'space-between'
  },
  IconBehave: {
    padding: 14
  },
  TextBehave: {
    paddingLeft:5, 
    color: "#753296", 
    fontSize: 26, 
    fontWeight: "bold"
  }
});
