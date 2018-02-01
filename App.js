import React from 'react';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, AppRegistry, ScrollView, Image } from 'react-native';
import Header from './Header';

const dummy = key => (
  <Text key={key}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi eveniet? Ratione deserunt beatae reprehenderit neque ab asperiores. Pariatur ullam consequuntur cum accusamus, tempore voluptatem similique aliquam veniam eaque non.</Text>
);

const FlexBoxExamples = props => (
  <View style={styles.container}>
    <Header />
    <View style={{justifyContent: 'space-between', flexDirection: 'row',paddingTop: 5, paddingBottom: 5, backgroundColor: 'orange', minHeight: 60}}>
      <View style={{backgroundColor: 'green', width: 60, alignItems: 'center', justifyContent: 'center'}}>
        <Text>LEFT</Text>
      </View>
      <View style={{backgroundColor: 'pink', flex: 1, paddingTop: 5, paddingBottom: 5, justifyContent: 'space-around'}}>
        <Text>Event description</Text>
        <Text style={{paddingTop:5, paddingBottom: 5, fontSize: 20}}>Selection Title</Text>
        <Text>Market Title</Text>
      </View>
      <View style={{backgroundColor: 'grey', width: 60, alignItems: 'center', justifyContent: 'center'}}>
        <Text>RIGHT</Text>
      </View>
    </View>
    <View style={styles.innerContainer}>
      <Image source={require('./malaga.jpg')}/>
      <ScrollView style={{flex:1}}>
        <Text>Zacatek...</Text>
        {[...Array(10)].map((_, i) => dummy(i))}
        <Text>Konec...</Text>
      </ScrollView>
      <View style={{flex:1, flexDirection: 'column', alignItems: 'flex-end'}}>
        <Text style={{backgroundColor: 'red'}}>
          {['Spodek, '].concat([...Array(1)].map((_, i) => dummy(i)))}
        </Text>
      </View>
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