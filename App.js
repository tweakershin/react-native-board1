import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import TabBarIcon from "./src/components/TabBarIcon";

import BoardStack from "./src/navigations/BoardStack";
import SettingsStack from "./src/navigations/SettingsStack";

/*** 3. NAVIGATOR 옵션 정의 ***/
const bottomTabNavigator = createBottomTabNavigator({
  Home: BoardStack,
  Settings: SettingsStack
});
export default createAppContainer(bottomTabNavigator);
