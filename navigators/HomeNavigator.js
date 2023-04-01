import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../constants/routes';

import Drivers from '../screens/home/Drivers';
import DriverDetails from '../screens/home/DriverDetails';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.DRIVERS}
        component={DrawerNavigator}
        options={{ title: 'Drivers', headerShown: false}}
      />
      <Stack.Screen
        name="DriverDetails"
        component={DriverDetails}
        options={{ title: 'Driver Details' }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
