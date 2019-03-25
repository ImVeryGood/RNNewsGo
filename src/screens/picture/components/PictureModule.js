import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
class PictureModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderSwiper() {
    let itemArr = [];
    let dataArr = this.props.pic;
    if (dataArr.length > 0) {
      for (let i = 0; i < dataArr.length; i++) {
        let pic = {
          uri: dataArr[i]
        };
        itemArr.push(<Image source={pic} style={styles.image} />);
      }
    }
    return itemArr;
  }
  render() {
    return (
      <Swiper showsPagination={true} showsButtons={true}>
        {this._renderSwiper()}
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});
module.exports = PictureModule;
