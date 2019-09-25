import React, { Component } from "react";
import { Text, View } from "react-native";

class BoardCreateScreen extends Component {
  render() {
    return (
      <View>
        <Text> BoardCreateScreen </Text>
      </View>
    );
  }
}

BoardCreateScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "글쓰기"
  };
};

export default BoardCreateScreen;
