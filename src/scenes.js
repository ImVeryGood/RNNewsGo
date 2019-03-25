import { Actions, Scene, Router } from "react-native-router-flux";
import PicDetail from "./screens/picture/components/PicDetail";
import React from "react";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="PicDetail" component={PicDetail} hideNavBar={true} />
  </Scene>
);
module.exports = scenes;
