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
import DriverCard from "../../components/DriverCard";

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

  const handlePress = (driver) => {
    navigation.navigate('DriverDetails', { driver });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} onPress={() => handlePress(driver)}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default Drivers;

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
});
