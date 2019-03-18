import React from "react";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { bindActionCreators } from "redux";
import index_action from "../../action/index_action";
import { connect } from "react-redux";
import { getNewsData } from "../../action/news_action";
class News extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  _getNews() {
    console.log("触发");
    this.props.actions.getNewsData();
  }
  render() {
    const { data } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => this._getNews()}>
          <Text>{data}</Text>
          <Text>121121</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
const mapStateToProps = state => {
  console.log("state=" + JSON.stringify(state));
  return {
    data: state.news_reducer.get("news")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(index_action, dispatch)
  };
};
module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
