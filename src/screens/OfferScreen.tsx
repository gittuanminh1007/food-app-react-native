import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { CouponCard } from "../components";
import { useAppSelector } from "../redux/hook";

export const OfferScreen = () => {
  const coupons = useAppSelector((state) => state.couponReducer.list);

  if (coupons.length > 0) {
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
            <Text style={{ fontSize: 30, fontWeight: "500" }}>My Coupons</Text>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={coupons}
            renderItem={({ item }) => <CouponCard item={item} />}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>You don't have coupon!!</Text>
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
