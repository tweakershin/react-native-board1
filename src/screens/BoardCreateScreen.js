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
        />

        <MyButton title="글 작성"/>
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