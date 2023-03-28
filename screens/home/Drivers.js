import { useNavigation } from "@react-navigation/core";
import { Text, TouchableOpacity, View } from "react-native";
import { React, useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import styles from "../../constants/styles";
import { collection, getDocs } from "firebase/firestore";
import { breakpoints } from "@mui/system";

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
      console.log(drivers[0].name);
    });
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Drivers Screen</Text>
        {drivers.map((d) => {
          return <Text>{d.name}</Text>;
        })}
    </View>
  );
};

export default Drivers;
