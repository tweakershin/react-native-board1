import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BoardItem extends React.Component{
  touchBoardItem(){
    return this.props.navigation.push('Detail',{
      item:this.props.item
    })
  }

  render(){
    return (
      <TouchableOpacity 
        style={[styles.container, (this.props.item.key==='1') ? styles.firstContainer:{}]}
        onPress={this.touchBoardItem.bind(this)}
      >
          <Text style={styles.number}>{this.props.item.key}</Text>
          <Text style={styles.title}>{this.props.item.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  firstContainer:{
    borderTopWidth:1
  },
  container:{
    flex:1,
    borderBottomWidth:1,
    flexDirection: 'row',
    width: '100%',
    borderColor:'gray',
    padding: 2
  },
  number:{
    paddingLeft:10,
    flex:1,
    fontSize:15
  },
  title:{
    flex:5,
    fontSize:20
  }
})