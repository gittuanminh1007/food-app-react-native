import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useHistory } from "react-router-native";
import { ButtonWithTitle, FoodCartInfo } from "../components";
import { useAppSelector } from "../redux/hook";

export const CartScreen = () => {
  const history = useHistory();
  const [totalAmount, setTotalAmount] = useState(0);
  const carts = useAppSelector((state) => state.cartReducer.list);

  useEffect(() => {
    onCalculateAmount();
  }, [carts]);

  const onCalculateAmount = () => {
    let total = 0;
    carts.map((item) => {
      total += item.food.price * item.unit;

      setTotalAmount(total);
    });
  };

  const onValidateOrder = () => {
    history.push("/login");
  };

  if (carts.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <View
            style={{
              display: "flex",
              height: 60,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "500" }}>My Cart</Text>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image
                source={require("../images/orders.png")}
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={carts}
            renderItem={({ item }) => <FoodCartInfo item={item} />}
            keyExtractor={(item) => `${item.food._id}`}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.amountDetails}>
            <Text style={{ fontSize: 18 }}> Total</Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              $ {totalAmount}
            </Text>
          </View>
          <ButtonWithTitle
            height={50}
            width={320}
            title="Order Now"
            onTap={onValidateOrder}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your Cart is Empty!!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  navigation: {
    flex: 1,
    marginTop: 43,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
  },
  emptyContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 30,
    fontWeight: "700",
  },
});
