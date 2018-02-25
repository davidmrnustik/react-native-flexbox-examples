import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

const Header = ({ navigation, title }) => {
  const goBack = () => {
    const backAction = NavigationActions.back();
    navigation.dispatch(backAction)
  }
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => goBack()}>
          <MaterialIcons
            name='arrow-back'
            color={'black'}
            size={35}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
      <View style={styles.right}>
        <MaterialIcons
          name='close'
          color={'black'}
          size={35}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 50,
    justifyContent: 'space-between',
    backgroundColor: 'yellow'
  },
  left: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  right: {
    marginRight: 5, 
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 2,
    // flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20
  }
})

export default Header;