import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClientPage } from '../screens/ClientPage';
import { Dashboard } from '../screens/Dashboard'
import theme from '../global/styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.divider,

            }}>
            <Screen
                name="Home"
                component={Dashboard}
                options={{ 
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                        <Feather 
                            name='home'
                            size={size}
                            color={color}
                        />
                    ))
                 }}
            />
            <Screen
                name="Clientes"
                component={ClientPage} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                        <Feather 
                            name='user'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}