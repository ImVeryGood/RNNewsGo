import { ColorSource } from "../../../sources/ColorSource";
import Recommend from "./Recommend";
import StarPic from "./StarPic";
import NewsPic from "./NewsPic";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
/**
 * createMaterialTopTabNavigator,实现顶部Tab栏的切换
 */
const TobBar = createMaterialTopTabNavigator(
  {
    Recommend: {
      screen: Recommend,
      navigationOptions: {
        tabBarLabel: "推荐"
      }
    },
    NewsPic: {
      screen: NewsPic,
      navigationOptions: {
        tabBarLabel: "新闻"
      }
    },
    StarPic: {
      screen: StarPic,
      navigationOptions: {
        tabBarLabel: "明星"
      }
    }
  },
  {
    tabBarOptions: {
      //tab bar的位置, 可选值： 'top' or 'bottom'
      tabBarPosition: "top",
      swipeEnabled: true,
      allowFontScaling: true,
      scrollEnabled: false,
      style: {
        backgroundColor: ColorSource.blue //设置顶部tab的背景颜色
      },
      //  设置下划线的颜色
      indicatorStyle: {
        backgroundColor: ColorSource.red
      },
      activeTintColor: ColorSource.red, //设置选中字的颜色
      inactiveTintColor: ColorSource.white //设置未选中的颜色样式
    },
    // style: { backgroundColor: ColorSource.red },
    initialRouteName: "Recommend"
  }
);

export default createAppContainer(TobBar);
