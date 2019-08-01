import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class BoardDetail extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text style={styles.content}>{this.props.item.content}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 2,
    padding: 10,
    borderColor: 'black',
    flex:1,
    width:'95%',
    margin:20
  },
  title:{
    fontSize:25,
    fontWeight: '800'

  },
  content:{
    fontSize:15,
    paddingTop: 20
  }
})