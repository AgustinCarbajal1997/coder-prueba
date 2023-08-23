import { View, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Introduzca el paquete" />
    </View>
  );
};

export default Input;
