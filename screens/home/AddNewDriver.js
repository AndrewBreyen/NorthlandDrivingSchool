import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../../constants/styles";

const AddNewDriver = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Add New Driver screen</Text>
    </View>
  );
};

export default AddNewDriver;
