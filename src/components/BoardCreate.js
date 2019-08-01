import React from 'react';
import {
  View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView 
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BoardCreate extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      title: '',
      content: '',
    }
  }

  titleChanged(text){
    this.setState({title: text})
  }

  contentChanged(text){
    this.setState({'content': text})
  }

  submitContent(){
    const board = this.props.navigation.getParam('board')
    const item = {
        key: (parseInt(board.length) + 1).toString(),
        title: this.state.title,
        content:this.state.content
      }

    func = this.props.navigation.getParam('createFunc')

    console.log(func(item))
    this.props.navigation.navigate('Home')
  }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container}>
        {/* <Text>{this.state.item.key}</Text> */}
        <TextInput 
            style={{width:'90%', height:50, borderWidth:1}}
            placeholder="제목"
            onChangeText={this.titleChanged.bind(this)}
        />

        <View style={{width:'90%', minHeight:200, marginTop:20, flexDirection:'row', position:'relative'}}>
          <TextInput 
            style={styles.input}
            multiline={true}
            placeholder="내용"
            onChangeText={this.contentChanged.bind(this)}
          />
        </View>

        <View style={{height:50, marginTop:20, position:'relative', flexDirection:'row'}}>
          <TouchableOpacity 
            onPress={this.submitContent.bind(this)}
            style={{height:50}}>
              <Text style={{fontSize:20}}>제출하기</Text>
          </TouchableOpacity>
        </View>

          
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    borderColor: 'black',
    flex:1,
    width:'100%',
    margin:10,
    minHeight:500
  },
  input:{
    minHeight: 200,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    borderWidth:1,
    alignSelf:'flex-start',
    width:'100%'
  }
})