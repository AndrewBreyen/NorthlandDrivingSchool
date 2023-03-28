import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ROUTES } from "../../constants";
import styles from "../../constants/styles";

const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate(ROUTES.DRIVERS);
      }
    });

    return unsubscribe;
  }, []);

  // const handleRegister = () => {
  //   createUserWithEmailAndPassword(authentication, email, password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log(user.email);
  //       alert(user.email + " registered successfully!");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate(ROUTES.DRIVERS);
      })
      .catch((error) => {
        if (Platform.OS == "web") {
          alert("Error occurred. Error message: " + error.message);
        } else {
          Alert.alert("Error occurred", "Error message: " + error.message);
        }
      });
  };

  const handleLoginDemo = () => {
    signInWithEmailAndPassword(auth, "a@a.com", "qwerty")
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate(ROUTES.DRIVERS);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.headerText}>Welcome!</Text>
      <Text style={styles.subheaderText}>Please log in.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        {/* LOGIN BUTTON */}
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* REGISTER BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

        {/* FORGOT PASSWORD BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Forgot Password</Text>
        </TouchableOpacity>

        {/* LOGIN AS a@a.com BUTTON */}
        <TouchableOpacity onPress={handleLoginDemo} style={styles.button}>
          <Text style={styles.buttonText}>REMOVEME: Login as a@a.com</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
