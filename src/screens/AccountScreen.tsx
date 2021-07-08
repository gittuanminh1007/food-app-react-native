import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={styles.body}>
        <Text>Account Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
    backgroundColor: "red",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
