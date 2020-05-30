import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Entypo name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};
export default ShowScreen;
