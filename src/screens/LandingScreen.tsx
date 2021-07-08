import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useHistory } from "react-router";

import * as Location from "expo-location";

const screenWidth = Dimensions.get("screen").width;

export const LandingScreen = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState(null);
  const [displayAddress, setDisplayAddress] = useState(
    "Waiting for Current Location"
  );
  let history = useHistory();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location is not granted");
      }

      let location: any = await Location.getCurrentPositionAsync({});

      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;

        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        for (let item of addressResponse) {
          setAddress(item);
          let currentAdress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country}`;
          setDisplayAddress(currentAdress);
          if (currentAdress.length > 0) {
            setTimeout(() => {
              history.push("/base");
            }, 1000);
          }
          return;
        }
      } else {
        //notify user something went wrong with location
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>

        <Text style={styles.adressText}>{displayAddress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#7D7D7D",
  },
  adressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4F4F4F",
  },
  footer: {
    flex: 1,
  },
});
