// import { useNavigation } from "@react-navigation/core";
// import { Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import styles from "../../constants/styles";

// const AddNewDriver = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text>Add New Driver screen</Text>
//     </View>
//   );
// };

// export default AddNewDriver;

import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { CheckBox } from 'react-native-elements';


const AddNewDriver = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [permitNumber, setPermitNumber] = useState("");
  const [permitExpiration, setPermitExpiration] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [notes, setNotes] = useState("");
  const [whiteCardGiven, setWhiteCardGiven] = useState(false);
  const [lesson1Date, setLesson1Date] = useState("");
  const [lesson1AmountPaid, setLesson1AmountPaid] = useState("");
  const [lesson2Date, setLesson2Date] = useState("");
  const [lesson2AmountPaid, setLesson2AmountPaid] = useState("");
  const [lesson3Date, setLesson3Date] = useState("");
  const [lesson3AmountPaid, setLesson3AmountPaid] = useState("");


  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "drivers"), {
        name,
        phone_number,
      });
      console.log("Driver added with ID: ", docRef.id);
      setName("");
      setPhoneNumber("");
    } catch (e) {
      console.error("Error adding driver: ", e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone_number}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthdate"
        value={birthdate}
        onChangeText={setBirthdate}
      />
      <TextInput
        style={styles.input}
        placeholder="Permit Number"
        value={permitNumber}
        onChangeText={setPermitNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Permit Expiration"
        value={permitExpiration}
        onChangeText={setPermitExpiration}
      />
      <TextInput
        style={styles.input}
        placeholder="Restrictions"
        value={restrictions}
        onChangeText={setRestrictions}
      />
      <TextInput
        style={styles.input}
        placeholder="Total Hours"
        value={totalHours}
        onChangeText={setTotalHours}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />
      <View style={styles.checkboxContainer}>
        <Text>White Card Given?</Text>
        <CheckBox value={whiteCardGiven} onValueChange={setWhiteCardGiven} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Lesson 1 Date"
        value={lesson1Date}
        onChangeText={setLesson1Date}
      />
      <TextInput
        style={styles.input}
        placeholder="Lesson 1 Amount Paid"
        value={lesson1AmountPaid}
        onChangeText={setLesson1AmountPaid}
      />
      <TextInput
        style={styles.input}
        placeholder="Lesson 2 Date"
        value={lesson2Date}
        onChangeText={setLesson2Date}
      />
      <TextInput
        style={styles.input}
        placeholder="Lesson 2 Amount Paid"
        value={lesson2AmountPaid}
        onChangeText={setLesson2AmountPaid}
      />
      <TextInput
        style={styles.input}
        placeholder="Lesson 3 Date"
        value={lesson3Date}
        onChangeText={setLesson3Date}
      />
      <TextInput
        style={styles.input}
        placeholder="Lesson 3 Amount Paid"
        value={lesson3AmountPaid}
        onChangeText={setLesson3AmountPaid}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );  
};

export default AddNewDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    backgroundColor: '#f2f2f2',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  checkboxText: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#2E64FE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

