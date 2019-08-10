import React from 'react';
import { 
  View, FlatList, Text, TouchableOpacity 
} from 'react-native';

export default class BoardList extends React.Component{

  renderBoard({item}){
    
    return(
      <View style={{flex:1, flexDirection:'row'}}>
      <TouchableOpacity style={{
        flex:4, width:"100%", flexDirection:'row',
        borderWidth: 1
      }}
        onPress={
          ()=>this.props.navigation.push('Detail', {item:item} )
        }
      >
        <Text style={{
          fontSize: 24,
          flex:2
        }}>
          {item.key}
        </Text>

        <Text style={{
          fontSize: 24,
          flex:10
        }}>
          {item.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={
          // ()=>console.log('delete')
          ()=>this.props.deleteFunc(item.key)
          }
        style={{
          flex:1
        }}>
        <Text style={{fontSize:24, color:'red'}}>X</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        ()=>this.props.navigation.push(
          'Edit', {item:item, editFunc:this.props.editFunc}
          )
      }>
        <Text>Edit</Text>
      </TouchableOpacity>
      </View>
    )
  }

  render(){
    
    return(
      <View style={{
        marginTop: 20,
        width: "100%"
      }}>
        <Text style={{
          fontSize:20,
          fontWeight: 'bold'
        }}>
          게시물
        </Text>

        <FlatList 
          data={this.props.board}
          renderItem={this.renderBoard.bind(this)}
        />
      </View>
    )
  }
}



// import React, {Component} from 'react';
// import { View, FlatList, Text} from 'react-native';

// import BoardItem from './BoardItem'

// export default class BoardList extends Component{

//   renderItem({item}){
//     return(
//       <BoardItem
//         {...this.props}
//         item={item}
//       />
//     )
//   }
//   render(){
//     return(
//       <View style={{flex:1, justifyContent:"flex-start", width:'100%', marginTop:20}}>
//         <Text style={{fontSize:20, fontWeight:"900", marginBottom:20, marginLeft:20}}>
//           게시물
//         </Text>
//         <FlatList
//           data={this.props.data}
//           renderItem={this.renderItem.bind(this)}
//         />
//       </View>
//     )
//   }
// }