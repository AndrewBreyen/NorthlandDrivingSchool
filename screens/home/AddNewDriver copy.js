// // import { useNavigation } from "@react-navigation/core";
// // import { Text, TouchableOpacity, View } from "react-native";
// // import React from "react";
// // import styles from "../../constants/styles";

// // const AddNewDriver = () => {
// //   const navigation = useNavigation();

// //   return (
// //     <View style={styles.container}>
// //       <Text>Add New Driver screen</Text>
// //     </View>
// //   );
// // };

// // export default AddNewDriver;

// import React, { useState } from "react";
// import {
//   View,
//   ScrollView,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { useNavigation } from "@react-navigation/core";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../firebase";
// import Checkbox from "expo-checkbox";
// import { COLORS } from "../../constants";

// const AddNewDriver = () => {
//   const navigation = useNavigation();
//   const [name, set_name] = useState("");
//   const [phone_number, set_phone_number] = useState("");
//   const [address, set_address] = useState("");
//   const [birthdate, set_birthdate] = useState("");
//   const [permit_number, set_permit_number] = useState("");
//   const [permit_expiration, set_permit_expiration] = useState("");
//   const [restrictions, set_restrictions] = useState("");
//   const [total_hours, set_total_hours] = useState("");
//   const [notes, set_notes] = useState("");
//   const [white_card_given, set_white_card_given] = useState(false);
//   const [lesson_1_date, set_lesson_1_date] = useState("");
//   const [lesson_1_amount_paid, set_lesson_1_amount_paid] = useState("");
//   const [lesson2Date, set_lesson_2_date] = useState("");
//   const [lesson2AmountPaid, set_lesson_2_amount_paid] = useState("");
//   const [lesson3Date, set_lesson_3_date] = useState("");
//   const [lesson3AmountPaid, set_lesson_3_amount_paid] = useState("");

//   const handleSubmit = async () => {
//     const newDriver = {
//       name,
//       phone_number,
//       address,
//       birthdate,
//       permitNumber,
//       permitExpiration,
//       restrictions,
//       totalHours,
//       notes,
//       whiteCardGiven,
//       lesson1Date,
//       lesson1AmountPaid,
//       lesson2Date,
//       lesson2AmountPaid,
//       lesson3Date,
//       lesson3AmountPaid,
//     };
  //   try {
  //     const driverRef = collection(db, "drivers");
  //     await addDoc(driverRef, newDriver);
  //     alert("Success Driver added successfully");
  //     navigation.navigate("Drivers");
  //   } catch (err) {
  //     console.log(err);
  //     alert("Error Failed to add driver");
  //   }
  // };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.formContainer}>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Name:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter name"
//             onChangeText={(text) => set_name(text)}
//             value={name}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Phone Number:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter phone number"
//             onChangeText={(text) => set_phone_number(text)}
//             value={phone_number}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Address:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter address"
//             onChangeText={(text) => set_address(text)}
//             value={address}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Birthdate:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter birthdate"
//             onChangeText={(text) => set_birthdate(text)}
//             value={birthdate}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Permit Number:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter permit number"
//             onChangeText={(text) => set_permit_number(text)}
//             value={permit_number}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Permit Expiration:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter permit expiration"
//             onChangeText={(text) => set_permit_expiration(text)}
//             value={permit_expiration}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Restrictions:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter restrictions"
//             onChangeText={(text) => set_restrictions(text)}
//             value={restrictions}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Total Hours:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter total hours"
//             onChangeText={(text) => set_total_hours(text)}
//             value={total_hours}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Notes:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter notes"
//             onChangeText={(text) => set_notes(text)}
//             value={notes}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>White Card Given?</Text>
//           <Checkbox
//             value={white_card_given}
//             onValueChange={(newValue) => set_white_card_given(newValue)}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Lesson 1 Date:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter lesson 1 date"
//             onChangeText={(text) => set_lesson_1_date(text)}
//             value={lesson_1_date}
//           />
//         </View>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Lesson 1 Amount Paid:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter lesson 1 amount paid"
//             onChangeText={(text) => set_lesson_1_amount_paid(text)}
//             value={lesson_1_amount_paid}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default AddNewDriver;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     alignContent: "center",
//   },
//   input: {
//     backgroundColor: COLORS.white,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   checkboxContainer: {
//     backgroundColor: COLORS.white,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   checkboxText: {
//     fontSize: 14,
//   },
//   button: {
//     position: "absolute",
//     bottom: 20,
//     left: 20,
//     right: 20,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: COLORS.primary,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: COLORS.white,
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });
