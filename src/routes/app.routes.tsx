import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClientPage } from '../screens/ClientPage';
import { Dashboard } from '../screens/Dashboard'

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Clientes" component={ClientPage} />
        </Tab.Navigator>
    );
}