import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { date } from 'firebase/firestore';


const DriverDetails = ({ route }) => {
  const { driver } = route.params;
  const t = driver.birthdate.toDate()
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{driver.name}</Text>
        <Text style={styles.detail}>Address: {driver.address.street}, {driver.address.city}, {driver.address.state}, {driver.address.zip}</Text>
        <Text style={styles.detail}>Phone Number: {driver.phone_number}</Text>
        <Text style={styles.detail}>Permit Number: {driver.permit_number}</Text>
        <Text style={styles.detail}>Permit Expiration: {new Date(driver.permit_expiration.seconds*1000).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</Text>
        <Text style={styles.detail}>Birthdate: {new Date(driver.birthdate.seconds*1000).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DriverDetails;
