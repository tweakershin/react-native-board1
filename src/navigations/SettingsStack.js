import { createStackNavigator } from "react-navigation-stack";
import TabBarIcon from "../components/TabBarIcon";
import SettingsScreen from "../screens/SettingsScreen";
/*** 1. CONFIG(PLATFORM등) 설정 ***/
const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "tomato" }
};

/*** 2. Navigator정의 ***/
const SettingsStack = createStackNavigator(
  {
    SettingsScreen
  },
  defaultNavigationOptions
);
/*** 3. NAVIGATOR 옵션 정의 ***/
SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
    />
  )
};
export default SettingsStack;
