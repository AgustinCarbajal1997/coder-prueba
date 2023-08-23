import { View, Text } from "react-native";
import React from "react";
import Item from "../Item";
import styles from "./styles";

const DATA = [
  { name: "Paquete Bariloche", id: "adadas1" },
  { name: "Paquete Buzios", id: "adadas2" },
  { name: "Paquete Chalten", id: "adadas3" },
  { name: "Paquete Mar del Plata", id: "adadas4" },
  { name: "Paquete Milan Italia", id: "adadas5" },
  { name: "Paquete Dubrovnik Croacia", id: "adadas6" },
  { name: "Paquete Las Toninas", id: "adadas7" },
];

const List = () => {
  return (
    <View style={styles.listSection}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lista de paquetes de viaje</Text>
      </View>
      <View style={styles.listContainer}>
        {DATA.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default List;
