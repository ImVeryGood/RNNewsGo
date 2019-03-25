import {
  Animated,
  findNodeHandle,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
type Props = {
  data?: Array<any>,
  isShowLine?: boolean
};
export class TobBarNavigation extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      position: 0,
      marginLeft: 0,
      indexMargin: new Animated.Value(0),
      itemWidth: 120
    };
  }
  _topClick(index, item) {
    this.setState({
      marginLeft: index * this.state.itemWidth,
      position: index
    });
    this.starAnimated(index, item);
  }
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this._topClick(index)}>
        <View style={styles.title_container}>
          <Text
            style={
              this.state.position === index ? styles.title_chosed : styles.title
            }
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  _onViewChange = changed => {
    console.log(changed);
  };
  _topBar = () => {
    let list = () => {
      return (
        <FlatList
          style={styles.topList}
          renderItem={this._renderItem}
          data={this.props.data}
          extraData={this.state}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={this._keyExtractor}
        />
      );
    };
    let bottomLine = () => {
      return this.props.isShowLine ? (
        <Animated.View
          style={{
            height: 1,
            width: 120,
            backgroundColor: "#1C86EE",
            marginLeft: this.state.marginLeft
          }}
        />
      ) : null;
    };
    return (
      <View>
        {list()}
        {bottomLine()}
      </View>
    );
  };
  starAnimated(index, item) {
    const nextValue = this.state.indexMargin + index * this.state.itemWidth;
    Animated.timing(this.state.indexMargin, {
      toValue: nextValue,
      duration: 150
    }).start();
  }
  //获取组件的宽高
  layout(ref) {
    const handle = findNodeHandle(ref);
    return new Promise(resolve => {
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {});
    });
  }
  render() {
    return <View>{this._topBar()}</View>;
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
