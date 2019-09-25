import React, { Component } from "react";
import { Text, View } from "react-native";

class BoardEditScreen extends Component {
  render() {
    return (
      <View>
        <Text> BoardEditScreen </Text>
      </View>
    );
  }
}

BoardEditScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "글쓰기"
  };
};

export default BoardEditScreen;
