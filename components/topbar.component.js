import React from 'react';
import { StyleSheet, View, Pressable, Text, ScrollView} from 'react-native';

let topbarData = [
  {
    data: "All",
  },
  {
    data: "Recommend"
  },
  {
    data: "Week"
  },
  {
    data: "Last 24hrs"
  },
  {
    data: "Year"
  },
  {
    data: "All Time"
  }
]

export default function TopBar() {

  return (
      <View style={styles.TopBarContainer}>
        <View style={styles.TopBar}>
          {/*<View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>*/}
            {/*<Pressable 
              onPress={() => changeText('Favourites')} 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >*/}
              {/*<Icon name="magnifying-glass" height="26" width="26" color="#448aff"/>*/}
              
            {/*</Pressable>
            <Pressable 
              onPress={() => changeText('Favourites')} 
              style={styles.IconBehave} 
              android_ripple={{borderless:true, radius: 50}}
            >*/}

          <ScrollView
            horizontal={true}>
          {
            topbarData.map((ele, index) => {
              if((index+1) %2 == 0){
              return (
                <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 10,
                      borderRadius: 30,
                      backgroundColor: 'white',
                      height: 30,
                      width: 100
                  }}>
                  <Text style={styles.textStyle}> {ele.data}</Text>
                </View>
              )

          }
              return (
                <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 10,
                      borderRadius: 30,
                      backgroundColor: 'white',
                      height: 30,
                      width: 50
                  }}>
                  <Text style={styles.textStyle}> {ele.data}</Text>
                </View>
              )
          })
          }
          </ScrollView>
            {/*</Pressable>*/}
          {/*</View>*/}
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
  circButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    height: 30
  },
  textStyle: {
    fontWeight: 'bold'
  }
});
