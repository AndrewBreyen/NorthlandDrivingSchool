import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DriverCard = ({ driver, onPress }) => {
  const { name, phone_number, email, address } = driver;

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phoneNumber}>{phone_number}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
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
  phoneNumber: {
    fontSize: 16,
  },
});

export default DriverCard;