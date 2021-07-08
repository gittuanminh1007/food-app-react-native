import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Food } from "../redux/models";

interface FoodCardProps {
  item: Food;
  onTap: Function;
}

export const FoodCardInSearch: React.FC<FoodCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${props.item.images}` }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          backgroundColor: "#EAEAEA",
        }}
      />
      <TouchableOpacity
        onPress={() => props.onTap(props.item)}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ display: "flex", flex: 7, padding: 10 }}>
          <Text>{props.item.name}</Text>
          <Text>{props.item.category}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flex: 5,
            padding: 10,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#7C7C7C" }}>
            ${props.item.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: Dimensions.get("screen").width - 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#FFF",
    height: 100,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    flexDirection: "row",
  },
  navigation: { flex: 2, backgroundColor: "red" },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  footer: { flex: 1, backgroundColor: "cyan" },
});
