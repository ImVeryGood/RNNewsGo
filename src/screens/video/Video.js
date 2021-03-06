import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import index_action from "../../action/index_action";
import { connect } from "react-redux";

class Video extends React.Component {
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
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(index_action, dispatch)
  };
};
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);
