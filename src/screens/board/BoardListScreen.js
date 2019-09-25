import React, { Component } from "react";
import { Text, View } from "react-native";

class BoardListScreen extends Component {
  render() {
    return (
      <View>
        <Text> BoardListScreen </Text>
      </View>
    );
  }
}

BoardListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "글쓰기"
  };
};

export default BoardListScreen;
