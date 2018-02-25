import React from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, AppRegistry, ScrollView, Image, TouchableOpacity, Title, Animated } from 'react-native';
import Header from './Header';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

function CustomHeader ({ navigation }) {
  <View style={{height: 80, marginTop: 20}}>
    <View>
      <Text>Back</Text>
    </View>
    <View>
      <Title>Title</Title>
    </View>
    <View>
      <Text>Right</Text>
    </View>
  </View>
}
function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HOME VIEW</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Text>Open drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Text>Go to dashboard</Text>
      </TouchableOpacity>
    </View>
  )
}
function Dashboard( { navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Text>Open drawer from Dashboard</Text>
      </TouchableOpacity>
      <Text>Navigation state params: {navigation.state.params}</Text>
    </View>
  )
}
const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home',
      drawerIcon: () => <FontAwesome name='home' size={20} color='red' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      drawerLabel: 'Dashboard',
      drawerIcon: () => <FontAwesome name='dashboard' size={20} color='red' />
    },
  }
})
const Stack = StackNavigator({
  Home: {
    screen: Drawer,
    title: 'Home',
    navigationOptions: {
      header: (props) => <Header {...props} title='Home' />,
    }
  },
  Dashboard: {
    screen: Dashboard,
    title: 'Dashboard',
    navigationOptions: {
      header: (props) => <Header {...props} title='Dashboard' />,
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
