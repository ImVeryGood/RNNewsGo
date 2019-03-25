import { View, Text } from "react-native";
import React from "react";
import { bindActionCreators } from "redux";
import index_action from "../../../action/index_action";
import { connect } from "react-redux";
import PictureListComponent from "./PictureListComponent";
class NewsPic extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    alert("news");
    this.props.actions.getRecommend(1);
  }
  render() {
    const { news } = this.props;
    return (
      <View>
        <PictureListComponent data={news} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { news: state.picture_reducer.get("news") };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(index_action, dispatch)
  };
};
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPic);
