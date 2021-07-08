import React, { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import { RouteComponentProps } from "react-router-native";

import { ButtonWithIcon, FoodCardInSearch, SearchBar } from "../components";
import { useAppSelector } from "../redux/hook";
import { Food } from "../redux/models";

interface SearchScreenProps {
  onUpdateCart: Function;
  history: RouteComponentProps["history"];
}

export const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const foods = useAppSelector((state) => state.shopReducer.foods);
  const [isEditing, setIsEditing] = useState(false);
  const [keyword, setKeyword] = useState("");

  const onTapFood = (item: Food) => {
    props.history.push({ pathname: "/detail", state: item });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navigation}>
          <View
            style={{
              display: "flex",
              height: 60,
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 4,
            }}
          >
            <ButtonWithIcon
              icon={require("../images/back_arrow.png")}
              onTap={() => props.history.goBack()}
              width={40}
              height={40}
            />
            <SearchBar
              onTextChange={setKeyword}
              onEndEditing={() => setIsEditing(false)}
              didTouch={() => setIsEditing(true)}
            />
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={
              isEditing
                ? foods.filter((item) => {
                    return item.name.includes(keyword);
                  })
                : foods
            }
            renderItem={({ item }) => (
              <FoodCardInSearch onTap={onTapFood} item={item} />
            )}
            keyExtractor={(item) => `${item._id}`}
          />
        </View>
      </ScrollView>
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
  },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
