import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BoardDetail from '../components/BoardDetail';

export default class DetailScreen extends Component{
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={{color:'black', fontSize:40}}>상세 스크린!</Text>

        <BoardDetail
          item = {this.props.navigation.getParam('item')}
        ></BoardDetail>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
})