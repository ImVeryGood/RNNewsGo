import { View, Text } from "react-native";
import React from "react";
import { bindActionCreators } from "redux";
import index_action from "../../../action/index_action";
import { connect } from "react-redux";

class PicDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>PicDetail</Text>
      </View>
    );
  }
}

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
)(PicDetail);
