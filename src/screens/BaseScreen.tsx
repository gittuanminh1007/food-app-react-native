import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import { TabBar } from "../components";
import { AccountScreen } from "./AccountScreen";
import { CartScreen } from "./CartScreen";
import { HomeScreen } from "./HomeScreen";
import { OfferScreen } from "./OfferScreen";
import { FoodDetailScreen } from "./FoodDetailScreen";
import { SearchScreen } from "./SearchScreen";
import { LoginScreen } from "./LoginScreen";

export const BaseScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={"height"}>
      <NativeRouter>
        <View style={styles.body}>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/offer" component={OfferScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/account" component={AccountScreen} />
          <Route path="/detail" component={FoodDetailScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/login" component={LoginScreen} />
        </View>

        <TabBar />
      </NativeRouter>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 9,
    justifyContent: "center",
  },
});
