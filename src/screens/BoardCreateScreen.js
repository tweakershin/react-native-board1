import React from 'react';
import { View, Text, TextInput } from 'react-native';
import MyButton from '../components/MyButton';

export default class BoardCreateScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      contennt:''
    }
  }

  submitBoard(){
    const createFunc = this.props.navigation.getParam('createFunc')
    const boardItem = {
      title: this.state.title,
      content: this.state.content
    }
    createFunc(boardItem)
    return this.props.navigation.navigate('Home')
  }

  render(){
    return(
      <View>
        <Text
          style={{fontSize:30, color:'blue', textAlign:'center'}}
        >
          글 작성 스크린
        </Text>

        <TextInput
          style={{
            borderWidth:1,
            fontSize:20,
            height:50,
            margin:20,
            marginTop:30
          }}
          placeholder="제목"
          onChangeText={(text)=>this.setState({title:text})}
        />
        <Text>{this.state.title}</Text>
        <TextInput
          style={{
            borderWidth:1,
            minHeight:300,
            fontSize:20,
            margin:20,
            marginTop:30
          }}
          placeholder="내용"
          multiline={true}
          onChangeText={
            (text)=>this.setState({content:text})
            }
        />
        <Text>{this.state.content}</Text>
        <View style={{
          margin:20,
          alignSelf:'flex-end'
        }}>
          <MyButton title="제출하기" onPress={this.submitBoard.bind(this)}/>
        </View>
      </View>
    )
  }
}


// import React from 'react';
// import {View, Text}  from 'react-native';

// import BoardCreate from '../components/BoardCreate'

// export default class BoardCreateScreen extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text style={{fontSize:30, textAlign:'center', color:'blue'}}>글 작성</Text>
//         <BoardCreate {...this.props}></BoardCreate>
//       </View>
//     )
//   }
// }