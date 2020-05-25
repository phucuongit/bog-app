import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <AntDesign
                    name="delete"
                    style={styles.icon}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
IndexScreen.navigationOptions = () => {
  return {
    headerRight: () => <AntDesign name="plus" size={24} color="black" />,
  };
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
