import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register, ForgotPassword } from "../screens";
import { COLORS, ROUTES } from "../constants";
import DrawerNavigator from "./DrawerNavigator";
import HomeNavigator from "./HomeNavigator";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      {/* <Stack.Screen
        name={ROUTES.DRIVERS}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;
