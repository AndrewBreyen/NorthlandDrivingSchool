import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../../constants/styles";

const QuickDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Quick Details screen</Text>
    </View>
  );
};

export default QuickDetails;