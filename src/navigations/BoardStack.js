import { createStackNavigator } from "react-navigation-stack";

import { BoardListScreen, BoardCreateScreen, BoardEditScreen} from "../screens/board";
import TabBarIcon from "../components/TabBarIcon";

/*** 1. CONFIG(PLATFORM등) 설정 ***/
const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "tomato" }
};
/*** 2. Navigator정의 ***/
const BoardStack = createStackNavigator(
  {
    BoardList: BoardListScreen,
    BoardCreate: BoardCreateScreen,
    BoardEdit: BoardEditScreen
  },
  defaultNavigationOptions
);
/*** 3. NAVIGATOR 옵션 정의 ***/
BoardStack.navigationOptions = {
  tabBarLabel: "게시판",
  tabBarIcon: ({ focused, horizontal, tintColor }) => (
    <TabBarIcon focused={focused}
      name={Platform.OS === "ios" ? "ios-clipboard" : "md-clipboard"} />
  )
};
export default BoardStack;
