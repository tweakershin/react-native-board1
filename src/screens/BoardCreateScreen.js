import React from 'react';
import {View, Text}  from 'react-native';

import BoardCreate from '../components/BoardCreate'

export default class BoardCreateScreen extends React.Component{
  render(){
    return(
      <View>
        <Text style={{fontSize:30, textAlign:'center', color:'blue'}}>글 작성</Text>
        <BoardCreate {...this.props}></BoardCreate>
      </View>
    )
  }
}