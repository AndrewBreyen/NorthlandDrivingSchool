import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../constants/styles";

const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
};

export default About;

