import React from "react";
import { View, Button, Text, Image, StyleSheet, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import index_action from "../../action/index_action";
import { connect } from "react-redux";

export class Mine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({});
const mapStateToProps = state => {
  return {};
};
const matchDispactchToProps = dispatch => {
  return {
    actions: bindActionCreators(index_action, dispatch)
  };
};
module.exports = connect(
  mapStateToProps,
  matchDispactchToProps
)(Mine);
