import React from "react";
import {
  View,
  VirtualizedList,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  Platform,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal
} from "react-native";
import PictureModule from "./PictureModule";
import { ColorSource } from "../../../sources/ColorSource";
type Props = {
  data?: Array<any>
};
class PictureListComponent extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowModule: false,
      pic: []
    };
  }
  _showPic(item, index) {
    this.setState({
      isShowModule: !this.state.isShowModule,
      pic: item.pics
    });
  }
  _emptyView = () => {
    return (
      <View style={styles.emptyView}>
        <Text>暂无数据</Text>
      </View>
    );
  };
  _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => this._showPic(item, index)}>
        <View style={styles.item}>
          <Image
            source={{
              uri: item.scover
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{item.setname}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  _ModalPic() {
    if (this.state.pic.length > 0) {
      return (
        <Modal
          onRequestClose={() => {
            this.setState({
              isShowModule: false
            });
          }}
          visible={this.state.isShowModule}
        >
          <PictureModule pic={this.state.pic} />
        </Modal>
      );
    }
  }
  render() {
    return (
      <View>
        <FlatList
          renderItem={this._renderItem}
          data={this.props.data}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          ListEmptyComponent={this._emptyView()}
          disableVirtualization={true}
        />
        {this._ModalPic()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
    alignItems: "center"
  },
  item: {
    height: 180,
    marginBottom: 10
  },
  name: {
    position: "absolute",
    marginLeft: "5%",
    marginRight: "5%",
    height: 50,
    lineHeight: 50,
    bottom: 0,
    width: "90%",
    backgroundColor: ColorSource.grey
  },
  image: {
    height: 180,
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%"
  }
});
module.exports = PictureListComponent;
