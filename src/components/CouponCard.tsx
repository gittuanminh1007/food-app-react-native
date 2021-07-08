import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Coupon } from "../redux/models";

interface CouponCardProps {
  item: Coupon;
}

export const CouponCard: React.FC<CouponCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ display: "flex", flex: 7, padding: 10 }}>
          <Text style={{ fontSize: 18 }}>{props.item.name}</Text>
          <Text style={{ fontWeight: "600", color: "#7C7C7C" }}>
            {props.item.description}
          </Text>
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
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#7C7C7C" }}>
            {props.item.value * 100}%
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
