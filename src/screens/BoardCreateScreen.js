import React from 'react';
import { View, Text, TextInput } from 'react-native';
import MyButton from '../components/MyButton';

export default class BoardCreateScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>글 작성 스크린</Text>

        <TextInput></TextInput>
        <TextInput></TextInput>

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