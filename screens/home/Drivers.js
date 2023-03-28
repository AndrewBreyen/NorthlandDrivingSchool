import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { React, useEffect, useState } from "react";
import { db } from "../../firebase";
import styles from "../../constants/styles";
import { collection, getDocs } from "firebase/firestore";
import { Card, Button } from "@rneui/themed";

const Drivers = () => {
  const navigation = useNavigation();
  const [drivers, setDrivers] = useState([]);
  const driversCollectionRef = collection(db, "drivers");

  const fetchDrivers = async () => {
    await getDocs(collection(db, "drivers")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDrivers(newData);
    });
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <ScrollView>
      {drivers.map((d) => {
        return (
          <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{d.name}</Card.Title>
            <Card.Divider />
            <Text>
              {d.phone_number}
            </Text>
            <TouchableOpacity><Text></Text></TouchableOpacity>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default Drivers;

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
});
