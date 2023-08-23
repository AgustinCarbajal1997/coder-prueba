import { View, Text } from "react-native";
import React from "react";
import TextInput from "../../components/Input";
import styles from "./styles";
import Button from "../../components/Button";
import List from "../../components/List";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAddItem}>
        <TextInput />
        <Button />
      </View>
      <View>
        <List />
      </View>
    </View>
  );
};

export default Home;
