import React from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, AppRegistry, ScrollView, Image, TouchableOpacity, Title, Animated } from 'react-native';
import Header from './Header';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 200,
    height: 200
  }
})

// decay - initial velocity and slow to a stop
// spring - spring physics model
// timing - animated a value over time

export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }
  componentDidMount() {
    const { opacity, width, height } = this.state;

    Animated.timing(opacity, { toValue: 1, duration: 1000 })
      .start()

    Animated.spring(width, { toValue: 300, speed: 5}).start()
    Animated.spring(height, { toValue: 300, speed: 5}).start()
  }
  render() {
    const { opacity, width, height } = this.state;
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, { opacity, width, height }]}
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
        />
      </View>
    )
  }
}
