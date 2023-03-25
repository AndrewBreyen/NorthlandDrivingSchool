import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const QuickDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Quick Details screen</Text>
    </View>
  );
};

export default QuickDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
