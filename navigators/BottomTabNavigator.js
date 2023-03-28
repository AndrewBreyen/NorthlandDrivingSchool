import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, ROUTES } from "../constants";
import { Drivers, QuickDetails } from "../screens";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === ROUTES.DRIVERS_TAB) {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === ROUTES.QUICKDETAILS) {
            iconName = focused ? "ios-speedometer" : "ios-speedometer-outline";
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name={ROUTES.DRIVERS_TAB} component={Drivers} />
      <Tab.Screen name={ROUTES.QUICKDETAILS} component={QuickDetails} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

<Tab.Navigator screenOptions={{ headerShown: false }}></Tab.Navigator>;
