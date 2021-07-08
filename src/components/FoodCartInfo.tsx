import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { add, deleteItem, reduce, update } from "../redux/cartSlide";
import { useAppDispatch } from "../redux/hook";
import { Cart, Food } from "../redux/models";
import { ButtonAddRemove } from "../components";

interface FoodCardInfoProps {
  item: Cart;
}

export const FoodCartInfo: React.FC<FoodCardInfoProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const didAddCart = (food: Food, unit: number) => {
    const item: Cart = {
      food,
      unit,
    };
    dispatch(add(item));
  };

  const didUpdateCart = (item: Cart) => {
    dispatch(update(item));
  };

  const didReduceCart = (item: Cart) => {
    dispatch(reduce(item));
  };

  const didDeleteCart = (item: Cart) => {
    dispatch(deleteItem(item));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            display: "flex",
            flex: 8,
            padding: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {item.food.name}
          </Text>
          <Text style={{ fontSize: 16, color: "#616161" }}>
            {item.food.category}
          </Text>
          <Text style={{ fontSize: 14, color: "#616161" }}>
            {item.food.description}
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#7C7C7C" }}>
            ${item.food.price}
          </Text>
          <ButtonAddRemove
            onAdd={() => {
              didUpdateCart(item);
            }}
            onRemove={() => {
              didDeleteCart(item);
            }}
            onReduce={() => {
              didReduceCart(item);
            }}
            qty={item.unit}
          />
        </View>
      </View>
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
