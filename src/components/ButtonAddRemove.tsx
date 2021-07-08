import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface ButtonProps {
  onAdd: Function;
  qty: number;
  onReduce: Function;
  onRemove: Function;
}

export const ButtonAddRemove: React.FC<ButtonProps> = (props) => {
  return (
    <View style={styles.optionsView}>
      <TouchableOpacity
        style={styles.btnPlusMinus}
        onPress={() => props.onReduce()}
      >
        <Text style={{ fontSize: 30, color: "#f15b5d" }}>-</Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 40,
        }}
      >
        <Text style={styles.unitText}>{props.qty}</Text>
      </View>
      <TouchableOpacity
        style={styles.btnPlusMinus}
        onPress={() => props.onAdd()}
      >
        <Text style={{ fontSize: 30, color: "#f15b5d" }}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onRemove()}>
        <AntDesign name="delete" size={24} color="#f15b5d" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnPlusMinus: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#f15b5d",
    height: 58,
    width: 38,
  },
  optionsView: {
    width: Dimensions.get("screen").width / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  unitText: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
  },
  btnDelete: {
    margin: 10,
  },
});
