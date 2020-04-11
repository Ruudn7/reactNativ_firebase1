import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Block, Button, Text } from 'expo-ui-kit';
import React from 'react';
import { Image } from 'react-native';

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
                <Button
                    padding
                    transparent
                    marginHorizontal
                    onPress={() => navigation.openDrawer()}
                >
                    <Feather name="menu" size={18} />
                </Button>
            )
        }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    )

}

const DrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}>
            <Block>
                <Block flex={0.4} margin={20} bottom>
                    <Image
                        source={{
                            uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png', height: 60, width: 60
                        }}
                        resizeMode='center'
                        style={{ borderRadius: 30}}
                    />
                    <Text title>MENU REACT NATIVE</Text>
                    <Text size={9}>sidebar</Text>
                </Block>
                <DrawerItem
                    label="Dashboard"
                    labelStyle={{marginLeft: -16}}
                    onPress={() => props.navigation.navigate("Dashboard")}
                    icon={()=> <Feather name="target" color="red" size={16} />}
                />
                <DrawerItem
                    label="Messages"
                    labelStyle={{marginLeft: -16}}
                    onPress={() => props.navigation.navigate("Messages")}
                    icon={()=> <Feather name="message-circle" color="red" size={16} />}
                />
                <DrawerItem
                    label="Contact"
                    labelStyle={{marginLeft: -16}}
                    onPress={() => props.navigation.navigate("Contact")}
                    icon={()=> <Feather name="phone" color="red" size={16} />}
                />
            </Block>
            
        </DrawerContentScrollView>
        );
}

export default () => {
    return(
        <Drawer.Navigator initialRouteName="Dashboard" drawerContent={props => <DrawerContent {...props } />}>
            <Drawer.Screen name="Screens" component={Screens} />
        </Drawer.Navigator>
    )
}
