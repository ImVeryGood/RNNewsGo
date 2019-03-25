import React from "react";
import {
  View,
  Button,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";
import { bindActionCreators } from "redux";
import index_action from "../../action/index_action";
import { connect } from "react-redux";
import { getNewsData } from "../../action/news_action";
import { TobBarNavigation } from "../../mcomponent/TobBarNavigation";
import { Actions } from "react-native-router-flux";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ["新闻", "体育", "动漫", "新闻1", "体育1", "动漫1"],
      position: 0,
      marginLeft: 0,
      indexMargin: new Animated.Value(0),
      itemWidth: 120
    };
  }
  componentDidMount() {}
  _getNews() {
    this.props.actions.getNewsData();
  }
  render() {
    return (
      <View>
        <TobBarNavigation data={this.state.array} isShowLine={true} />
        <Button
          title="跳转"
          onPress={() => {
            //Actions.detail();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topList: {
    width: "100%",
    height: 60,
    backgroundColor: "#F2F2F2"
  },
  title: {
    width: 120,
    height: 60,
    lineHeight: 60,
    textAlign: "center",
    color: "#292929"
  },
  title_chosed: {
    width: 120,
    height: 60,
    lineHeight: 60,
    textAlign: "center",
    color: "#1C86EE"
  },
  title_container: {
    flexDirection: "column"
  },
  line: {
    height: 1,
    width: 120,
    backgroundColor: "#1C86EE"
  }
});
const mapStateToProps = state => {
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
