import React from "react";
import { View, Button, Text, Image, StyleSheet, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import index_action from "../../action/index_action";
import { connect } from "react-redux";
import TobNavigation from "./components/TopNavigation";

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _navigationStateChange = index => {
    this.props.actions.getRecommend(index);
  };
  render() {
    return (
      <TobNavigation
        onNavigationStateChange={(prevState, currentState) => {
          this._navigationStateChange(currentState.index);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({});
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(index_action, dispatch)
  };
};
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Picture);
