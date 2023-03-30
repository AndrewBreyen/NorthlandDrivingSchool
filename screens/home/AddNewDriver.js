import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  CheckBox,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";
import Checkbox from "expo-checkbox";

const AddNewDriver = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [phone_number, set_phone_number] = useState("");
  const [address, set_address] = useState("");
  const [birthdate, set_birthdate] = useState("");
  const [permit_number, set_permit_number] = useState("");
  const [permit_expiration, set_permit_expiration] = useState("");
  const [restrictions, set_restrictions] = useState("");
  const [total_hours, set_total_hours] = useState("");
  const [notes, set_notes] = useState("");
  const [white_card_given, set_white_card_given] = useState(false);
  const [lesson_1_date, set_lesson_1_date] = useState("");
  const [lesson_1_amount_paid, set_lesson_1_amount_paid] = useState("");
  const [lesson_2_date, set_lesson_2_date] = useState("");
  const [lesson_2_amount_paid, set_lesson_2_amount_paid] = useState("");
  const [lesson_3_date, set_lesson_3_date] = useState("");
  const [lesson_3_amount_paid, set_lesson_3_amount_paid] = useState("");

  const setChecked = () => {
    set_white_card_given(!white_card_given);
  };

  const handleSubmit = async () => {
    const newDriver = {
      name,
      phone_number,
      address,
      birthdate,
      permit_number,
      permit_expiration,
      restrictions,
      total_hours,
      notes,
      white_card_given,
      lesson_1_date,
      lesson_1_amount_paid,
      lesson_2_date,
      lesson_2_amount_paid,
      lesson_3_date,
      lesson_3_amount_paid,
    };
    try {
      const driverRef = collection(db, "drivers");
      await addDoc(driverRef, newDriver);
      alert("Success Driver added successfully");
      navigation.navigate("Drivers");
    } catch (err) {
      console.log(err);
      alert("Error Failed to add driver");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phone_number}
            onChangeText={set_phone_number}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            value={address}
            onChangeText={set_address}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Birthdate:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            value={birthdate}
            onChangeText={set_birthdate}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Permit Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter permit number"
            value={permit_number}
            onChangeText={set_permit_number}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Permit Expiration:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            value={permit_expiration}
            onChangeText={set_permit_expiration}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Restrictions:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter restrictions"
            value={restrictions}
            onChangeText={set_restrictions}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Total Hours:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter total hours"
            value={total_hours}
            onChangeText={set_total_hours}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Notes:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter notes"
            value={notes}
            onChangeText={set_notes}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>White Card Given?</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={white_card_given}
              onValueChange={setChecked}
              style={styles.checkbox}
              tintColors={{ true: COLORS.primary, false: "black" }}
            />
            <Text style={styles.checkboxLabel}>Yes</Text>
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lesson 1 Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            value={lesson_1_date}
            onChangeText={set_lesson_1_date}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lesson 1 Amount Paid:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount paid"
            value={lesson_1_amount_paid}
            onChangeText={set_lesson_1_amount_paid}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lesson 2 Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            value={lesson_2_date}
            onChangeText={set_lesson_2_date}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lesson 2 Amount Paid:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount paid"
            value={lesson_2_amount_paid}
            onChangeText={set_lesson_2_amount_paid}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lesson 3 Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/DD/YYYY"
            value={lesson_3_date}
            onChangeText={set_lesson_3_date}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Lesson 3 Amount Paid:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount paid"
            value={lesson_3_amount_paid}
            onChangeText={set_lesson_3_amount_paid}
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddNewDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  formGroup: {
    padding: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxLabel: {
    margin: 8,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    padding: 30,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
