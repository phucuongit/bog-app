import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});
export default CreateScreen;
