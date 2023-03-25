import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SettingsDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Settings Detail screen</Text>
    </View>
  );
};

export default SettingsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
