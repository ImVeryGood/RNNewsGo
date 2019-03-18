/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Navigations from "./src/screens/base/Navigations";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/configStore";
import { PersistGate } from "redux-persist/integration/react";
type Props = {};
export default class App extends Component<Props> {
  onBeforeLift = () => {
    // take some action before the gate lifts
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.onBeforeLift()}>
          <Navigations />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
