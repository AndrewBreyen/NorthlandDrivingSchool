import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { React, useEffect, useState } from "react";
import { db } from "../../firebase";
import styles from "../../constants/styles";
import COLORS from "../../constants/colors";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import DriverCard from "../../components/DriverCard";

const Drivers = () => {
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const handlePress = (driver) => {
    navigation.navigate("DriverDetails", { driver });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary}/>
      ) : (
        <ScrollView>
          {drivers.map((driver) => (
            <DriverCard style={styles.container}
              key={driver.id}
              driver={driver}
              onPress={() => handlePress(driver)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Drivers;

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
    width: 15
  },
});
