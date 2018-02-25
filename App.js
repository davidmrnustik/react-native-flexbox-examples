import React from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, AppRegistry, ScrollView, Image, TouchableOpacity, Title, Animated } from 'react-native';
import Header from './Header';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HOME VIEW</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>To Dashboard</Text>
      </TouchableOpacity>
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
const Stack = StackNavigator({
  Home: {
    screen: Home,
    title: 'Home',
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  },
})
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Stack />
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