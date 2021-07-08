import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { RouteComponentProps } from "react-router-native";
import { ButtonAddRemove, ButtonWithIcon } from "../components";
import { add, deleteItem, reduce, update } from "../redux/cartSlide";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Cart, Food } from "../redux/models";
import { check, checkInCart } from "../utils";

interface FoodDetailProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
}

export const FoodDetailScreen: React.FC<FoodDetailProps> = (props) => {
  const item = props.history.location.state as Food;
  const carts = useAppSelector((state) => state.cartReducer);
  const [inCart, setInCart] = useState(check(item, carts));

  const dispatch = useAppDispatch();

  const didAddCart = (food: Food, unit: number) => {
    const item: Cart = {
      food,
      unit,
    };
    dispatch(add(item));
    setInCart(true);
  };

  const didUpdateCart = (item: Cart) => {
    dispatch(update(item));
  };

  const didReduceCart = (item: Cart) => {
    dispatch(reduce(item));
  };

  const didDeleteCart = (item: Cart) => {
    dispatch(deleteItem(item));
    setInCart(false);
  };

  const itemInCart = checkInCart(item, carts) as Cart;

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <ButtonWithIcon
          icon={require("../images/back_arrow.png")}
          onTap={() => props.history.goBack()}
          width={40}
          height={40}
        />
        <Text style={{ fontSize: 22, fontWeight: "600", marginLeft: 60 }}>
          {" "}
          {item.name}
        </Text>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={{ uri: `${item.images}` }}
          style={{
            width: Dimensions.get("screen").width,
            height: 300,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              height: 120,
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: 10,
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 30, fontWeight: "700" }}>
              {" "}
              {item.name}
            </Text>
            <Text style={{ color: "#FFF", fontSize: 25, fontWeight: "500" }}>
              {" "}
              {item.category}{" "}
            </Text>
          </View>
        </ImageBackground>
        <View style={{ padding: 20 }}>
          <Text>Food Will be ready within {item.readyTime} Minute(s)</Text>
          <Text>{item.description}</Text>
        </View>
        <View
          style={{
            width: Dimensions.get("screen").width - 40,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#7C7C7C" }}>
            Price: ${item.price}
          </Text>
          {inCart ? (
            <ButtonAddRemove
              onAdd={() => {
                didUpdateCart(itemInCart);
              }}
              onReduce={() => {
                didReduceCart(itemInCart);
              }}
              onRemove={() => {
                didDeleteCart(itemInCart);
              }}
              qty={itemInCart.unit}
            />
          ) : (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => didAddCart(item, 0)}
            >
              <Text style={{ fontSize: 18, color: "#FFF" }}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  navigation: {
    flex: 1,
    marginTop: 43,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingBottom: 160,
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 40,
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#f15b5b",
  },
});
