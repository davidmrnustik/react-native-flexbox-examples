import React from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, AppRegistry, ScrollView, Image, TouchableOpacity, Title, Animated } from 'react-native';
import Header from './Header';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

function Home() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  )
}

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )
}

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='home' size={30} color="black" />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='dashboard' size={30} color="black" />
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    )
  }
}

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
