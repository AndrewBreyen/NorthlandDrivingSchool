import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { React, useEffect, useState } from "react";
import { db } from "../../firebase";
import COLORS from "../../constants/colors";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import DriverCard from "../../components/DriverCard";

const Drivers = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const [drivers, setDrivers] = useState([]);
  const driversCollectionRef = collection(db, "drivers");

  useEffect(() => {
    fetchDrivers();
  }, []);

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

  const handlePress = (driver) => {
    navigation.navigate("Home", {
      screen: "DriverDetails",
      params: { driver },
    });
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchDrivers();
    setRefreshing(false);
  };

  return (
    <View style={Styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {drivers.map((driver) => (
            <DriverCard
              style={Styles.container}
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
    flex: 1,
  },
});
