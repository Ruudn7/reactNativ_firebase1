import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import { Block, Text, Button } from 'expo-ui-kit';

import Contact from './screens/Contact';
import Dashboard from './screens/Dashboard';
import Messages from './screens/Messages';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Screens: any = ({ navigation  }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
                <Button primary padding marginHorizontal onPress={() => navigation.openDrawer()}>
                    <Text white small>Menu</Text>
                </Button>
            )
        }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    )

}

export default () => {
    return(
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="Screens" component={Screens} />
        </Drawer.Navigator>
    )
}
