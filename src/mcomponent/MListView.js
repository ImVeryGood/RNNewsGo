import {
  View,
  VirtualizedList,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  Platform
} from "react-native";
import React from "react";
type Props = {
  style?: Object,
  dataArray?: Array<any>,
  color?: Object,
  progressBackgroundColor?: Object
};

export class MListView extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  _renderItem = ({ item }) => {
    return <Text>{item}</Text>;
  };
  _emptyView = () => {
    return (
      <View style={styles.emptyView}>
        <Text>暂无数据</Text>
      </View>
    );
  };
  // 这里指定使用数组下标作为唯一索引
  _keyExtractor = (item, index) => index.toString();
  render() {
    let rendrList = (
      <VirtualizedList
        {...this.props}
        style={{ ...this.props.style }}
        renderItem={this._renderItem}
        data={this.props.dataArray}
        keyExtractor={this._keyExtractor}
        refreshing={true}
        getItemCount={items => {
          return items == null ? 0 : items.length;
        }}
        getItem={(items, index) => {
          return items[index];
        }}
        ListEmptyComponent={this._emptyView()}
      />
    );
    return Platform.OS === "android" ? (
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={this.props.color}
            progressBackgroundColor={this.props.progressBackgroundColor}
            refreshing={false}
          />
        }
      >
        {rendrList}
      </ScrollView>
    ) : (
      { rendrList }
    );
  }
}
const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
    alignItems: "center"
  }
});
