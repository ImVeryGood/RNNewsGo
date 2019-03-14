import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Image, StyleSheet } from "react-native";
import { News } from "../news/News";
import React from "react";
import { Mine } from "../mine/Mine";
const tabBottom = createBottomTabNavigator(
  {
    News: {
      screen: News,
      navigationOptions: {
        header: null,
        tabBarLabel: "新闻",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.tabBarIcon}
              source={
                focused
                  ? require("./image/b_newhome_tabbar_press.png")
                  : require("./image/b_newhome_tabbar.png")
              }
            />
          );
        }
      }
    },
    Picture: {
      screen: News,
      navigationOptions: {
        header: null,
        tabBarLabel: "图片",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.tabBarIcon}
              source={
                focused
                  ? require("./image/b_newcare_tabbar_press.png")
                  : require("./image/b_newcare_tabbar.png")
              }
            />
          );
        }
      }
    },
    Video: {
      screen: News,
      navigationOptions: {
        header: null,
        tabBarLabel: "视频",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.tabBarIcon}
              source={
                focused
                  ? require("./image/b_newdiscover_tabbar_press.png")
                  : require("./image/b_newdiscover_tabbar.png")
              }
            />
          );
        }
      }
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        header: null,
        tabBarLabel: "我的",
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              style={styles.tabBarIcon}
              source={
                focused
                  ? require("./image/b_newmine_tabbar_press.png")
                  : require("./image/b_newmine_tabbar.png")
              }
            />
          );
        }
      }
    }
  },
  {
    initialRouteName: "News",
    swipeEnabled: true,
    indicatorStyle: { height: 0 },
    tabBarOptions: {
      //当前选中的tab bar的文本颜色和图标颜色
      activeTintColor: "red",
      //当前未选中的tab bar的文本颜色和图标颜色
      inactiveTintColor: "#000"
    }
  }
);
const App = createStackNavigator({
  Main: {
    screen: tabBottom,
    navigationOptions: {
      header: null,
      indicatorStyle: { height: 0 }
    }
  }
});

export default createAppContainer(App);
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 30,
    height: 30
  }
});
