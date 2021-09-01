import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import AppointmentDetails from '../screens/AppointmentDetails';
import AppointmentCreate from '../screens/AppointmentCreate';


const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.secondary90
                }
            }}
        >
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen 
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    );
};