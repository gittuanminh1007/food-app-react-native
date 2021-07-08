import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link, useLocation } from "react-router-native";

interface IPropsItem {
  tab: string;
  focus: string;
  link: string;
}

const icons = {
  home: {
    focus: require("../images/home_icon.png"),
    unfocus: require("../images/home_n_icon.png"),
  },
  offer: {
    focus: require("../images/offer_icon.png"),
    unfocus: require("../images/offer_n_icon.png"),
  },
  cart: {
    focus: require("../images/cart_icon.png"),
    unfocus: require("../images/cart_n_icon.png"),
  },
  account: {
    focus: require("../images/account_icon.png"),
    unfocus: require("../images/account_n_icon.png"),
  },
};

export const TabBar = () => {
  let location = useLocation();
  let display: string;
  let isNone: boolean =
    location.pathname == "/search" ||
    location.pathname == "/detail" ||
    location.pathname == "/login";
  return (
    <View
      style={{
        display: (display = isNone ? "none" : "flex"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "8%",
        borderTopWidth: 0.5,
        borderTopColor: "red",
      }}
    >
      <Item tab={"Home"} focus={location.pathname} link={"/"} />
      <Item tab={"Offer"} focus={location.pathname} link={"/offer"} />
      <Item tab={"Cart"} focus={location.pathname} link={"/cart"} />
      <Item tab={"Account"} focus={location.pathname} link={"/account"} />
    </View>
  );
};

const Item: React.FC<IPropsItem> = (props) => {
  let icon: any;
  let isFocus: boolean = props.focus == props.link ? true : false;
  if (isFocus == true) {
    switch (props.tab) {
      case "Home":
        icon = icons.home.focus;
        break;
      case "Offer":
        icon = icons.offer.focus;
        break;
      case "Cart":
        icon = icons.cart.focus;
        break;
      case "Account":
        icon = icons.account.focus;
        break;
    }
  } else {
    switch (props.tab) {
      case "Home":
        icon = icons.home.unfocus;
        break;
      case "Offer":
        icon = icons.offer.unfocus;
        break;
      case "Cart":
        icon = icons.cart.unfocus;
        break;
      case "Account":
        icon = icons.account.unfocus;
        break;
    }
  }
  return (
    <TouchableOpacity style={styles.tabButton}>
      <Link to={props.link} underlayColor="#f0f4f7">
        <Image source={icon} style={styles.tabIcon} />
      </Link>
      {isFocus ? (
        <Text style={styles.tabTextFocus}>{props.tab}</Text>
      ) : (
        <Text style={styles.tabTextUnfocus}>{props.tab}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 40,
    height: 40,
  },
  tabButton: {
    width: "25%",
    alignItems: "center",
  },
  tabTextFocus: {
    color: "#ff5050",
  },
  tabTextUnfocus: {
    color: "#5E5E5E",
  },
});
