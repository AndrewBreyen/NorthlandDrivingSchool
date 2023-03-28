import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AddNewDriver, Settings } from "../screens";
import { COLORS, ROUTES } from "../constants";
import BottomTabNavigator from "./BottomTabNavigator";
import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: "",
        headerTintColor: COLORS.white,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.DRIVERS_DRAWER}
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="ios-person" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.ADDNEWDRIVER}
        component={AddNewDriver}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="ios-add-circle" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="ios-settings" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
