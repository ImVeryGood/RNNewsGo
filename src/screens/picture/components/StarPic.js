import { View, Text } from "react-native";
import React from "react";
import { bindActionCreators } from "redux";
import index_action from "../../../action/index_action";
import { connect } from "react-redux";
import PictureListComponent from "./PictureListComponent";

class StarPic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { star } = this.props;
    return (
      <View>
        <PictureListComponent data={star} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { star: state.picture_reducer.get("star") };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(index_action, dispatch)
  };
};
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarPic);
