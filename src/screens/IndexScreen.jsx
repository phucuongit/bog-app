import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  console.log(addBlogPost);
  return (
    <View style={styles.container}>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <AntDesign
                name="delete"
                style={styles.icon}
                size={24}
                color="black"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
export default IndexScreen;
