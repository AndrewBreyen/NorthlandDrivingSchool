import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AddNewDriver, Settings } from "../screens";
import { ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.DRIVERS_TAB} component={BottomTabNavigator} />
      <Drawer.Screen name={ROUTES.ADDNEWDRIVER} component={AddNewDriver} />
      <Drawer.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;