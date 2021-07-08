import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  Text,
} from "react-native";
import { Food } from "../redux/models";

const screenWidth = Dimensions.get("screen").width;

interface FoodProps {
  item: Food;
  onTap: Function;
}

export const FoodCard: React.FC<FoodProps> = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => props.onTap(props.item)}
      >
        <Image
          style={{
            width: screenWidth - 20,
            height: 220,
            borderRadius: 20,
            backgroundColor: "#EAEAEA",
          }}
          source={{ uri: `${props.item.images}` }}
        />
      </TouchableOpacity>
      <View style={styles.foodName}>
        <Text style={{ fontSize: 20, marginTop: 10, color: "#858585" }}>
          {props.item.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 230,
    justifyContent: "space-around",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  foodName: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 15,
  },
  addBtn: {
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f15b5d",
    borderRadius: 10,
    marginTop: 10,
  },
});
