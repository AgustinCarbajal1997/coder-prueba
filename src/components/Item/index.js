import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const Item = ({ data }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{data.name}</Text>
    </View>
  );
};

export default Item;
