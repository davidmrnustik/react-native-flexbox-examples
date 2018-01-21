import React from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Header from './Header';

const FlexBoxExamples = props => (
  <View style={styles.container}>
    <Header />
    <View style={styles.innerContainer}>
      <Text>Loremihsadfb alhsv bhdflsbv lsdfb vsdhfb l</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: 'yellow',
  },
  box: {
    // height: 50,
    // width: 50,
    backgroundColor: '#e76e63',
    // margin: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FlexBoxExamples;