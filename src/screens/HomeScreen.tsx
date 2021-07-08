import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import {
  ButtonWithIcon,
  CategoryCard,
  FoodCard,
  SearchBar,
} from "../components";
import { useAppSelector } from "../redux/hook";
import { useHistory } from "react-router";
import { Food } from "../redux/models";

export const HomeScreen = () => {
  const history = useHistory();
  const categories = useAppSelector((state) => state.shopReducer.categories);
  const foods = useAppSelector((state) => state.shopReducer.foods);

  const onTapFood = (item: Food) => {
    history.push({ pathname: "/detail", state: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.searchBar}>
          <SearchBar
            didTouch={() => {
              history.push("/search");
            }}
            onTextChange={() => {}}
          />
          <ButtonWithIcon
            onTap={() => {}}
            icon={require("../images/hambar.png")}
            width={40}
            height={40}
          />
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              color: "#f15b5d",
              marginLeft: 20,
            }}
          >
            {" "}
            Categories
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }) => (
              <CategoryCard
                item={item}
                onTap={() => {
                  alert("Category tapped");
                }}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "600",
                color: "#f15b5d",
                marginLeft: 20,
              }}
            >
              {" "}
              Foods
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={foods}
            renderItem={({ item }) => (
              <FoodCard item={item} onTap={onTapFood} />
            )}
            keyExtractor={(item) => `${item._id}`}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 1.5,
  },
  searchBar: {
    display: "flex",
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
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
