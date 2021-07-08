import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import { Provider } from "react-redux";
import { LandingScreen } from "./src/screens/LandingScreen";
import { BaseScreen } from "./src/screens/BaseScreen";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          {/* <Route exact path="/" component={LandingScreen} /> */}
          <Route exact path="/" component={BaseScreen} />
        </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
