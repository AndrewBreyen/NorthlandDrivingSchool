import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ROUTES } from "../../constants";
import styles from "../../constants/styles";

const ForgotPassword = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        if (Platform.OS == "web") {
          alert(
            "Password Reset Successfully. Please check your email and reset your password at the link provided."
          );
        } else {
          Alert.alert(
            "Password Reset Successfully",
            "Please check your email and reset your password at the link provided."
          );
        }
        navigation.goBack();
      })
      .catch((error) => {
        alert("Error occurred. Error message: " + error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text>
          Please enter the email of the account to send a password reset email
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleForgotPassword}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Send Reset Password Link</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
