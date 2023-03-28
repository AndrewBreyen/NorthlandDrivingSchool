import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { authentication } from "../../firebase";
import styles from "../../constants/styles";

const Drivers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.subheaderText}>Register has not been implemented.</Text>
    </View>
  );
};

export default Drivers;