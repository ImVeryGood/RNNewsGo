import React, { Component } from "react";
import Navigations from "./src/screens/base/Navigations";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/configStore";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "react-native-router-flux";
import scenes from "./src/scenes";
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
