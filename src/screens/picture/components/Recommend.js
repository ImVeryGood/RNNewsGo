import {
  View,
  Text,
  FlatList,
  Button,
  Modal,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";
import { bindActionCreators } from "redux";
import index_action from "../../../action/index_action";
import { connect } from "react-redux";
import PictureListComponent from "./PictureListComponent";
class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: [],
      isShowModule: false,
      pic: []
    };
  }
  componentDidMount() {
    this.props.actions.getRecommend(0);
  }
  render() {
    const { recommend } = this.props;

    return (
      <View>
        <PictureListComponent data={recommend} />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
const mapStateToProps = state => {
  return { recommend: state.picture_reducer.get("recommend") };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(index_action, dispatch)
  };
};
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend);
