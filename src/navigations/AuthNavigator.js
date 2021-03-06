import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"



import LoadingScreen from '../screens/loadingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';
import SetNewPasswordScreen from '../screens/Auth/SetNewPasswordScreen';
import DashboardNavigator from './DashboardNavigator';
import ViewPassanger from '../screens/conductor/ViewPassanger';
import PassangerProfile from '../screens/conductor/PassangerProfile';

const Stack = createStackNavigator();

const AuthNavigator = () => (

    <Stack.Navigator>

        <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
        />

         <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
                headerShown: false,
                headerLeft: null
            }}
        />

        <Stack.Screen
            name="ResetPassword"
            component={ResetPasswordScreen}
            options={{ title: "Forgot Password" }}
        />

        <Stack.Screen
            name="LinkVerify"
            options={{ title: "Reset Password" }}
            component={SetNewPasswordScreen}
        />
        <Stack.Screen
            name="ViewPassanger"
            options={{ title: "Passengers" }}
            component={ViewPassanger}
        />
        <Stack.Screen
            name="Dashboard"
            component={DashboardNavigator}
            options={{ title: "Dashboard", headerShown: false }}
        />
        <Stack.Screen
            name="PassengerProfile"
            component={PassangerProfile}
            options={{ title: "Profile", headerShown: false }}
        />
        

{/*
        <Stack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ title: "Register" }}
        />

       */}

    </Stack.Navigator>
)

export default AuthNavigator;