import { useNavigation } from "@react-navigation/core";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { ROUTES } from "../../constants";
import styles from "../../constants/styles";
import { authentication } from "../../firebase";

const Settings = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(authentication)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: ROUTES.LOGIN}],
        });
        if (Platform.OS == "web"){
          alert("Signed out! Goodbye!")
        }
        else{
          Alert.alert('Signed out!', 'Goodbye!')
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;