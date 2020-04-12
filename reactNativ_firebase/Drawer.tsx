import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient'
import { Block, Button, Text } from 'expo-ui-kit';
import React from 'react';
import { Image } from 'react-native';

import Contact from './screens/Contact';
import Dashboard from './screens/Dashboard';
import Messages from './screens/Messages';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Screens: any = ({ navigation, style  }) => {
    return (
        <Animated.View style={[{overflow: 'hidden', flex: 1}, style]}>
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
        </Animated.View>

    )

}

const DrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
            <Block>
                <Block flex={0.4} margin={20} bottom>
                    <Image
                        source={{
                            uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png', height: 60, width: 60
                        }}
                        resizeMode='center'
                        style={{ borderRadius: 30}}
                    />
                    <Text title marginTop='2x' >MENU REACT NATIVE</Text>
                    <Text size={9} marginTop>sidebar</Text>
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

            <Block noflex>
                <DrawerItem
                    label="Logout"
                    labelStyle={{marginLeft: -16}}
                    onPress={() => alert('Are you sure?')}
                    icon={()=> <Feather name="log-out" color="red" size={16} />}
                />
            </Block>
            
        </DrawerContentScrollView>
        );
}

export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0)) as any;

    const scale = Animated.interpolate(progress, {
        inputRange: [0,1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0,1],
        outputRange: [0, 10]
    })

    const screenStyles = {borderRadius, transform: [{scale}]};

    return(
            <LinearGradient style={{flex: 1}} colors={['white', 'gray']}>
                <Drawer.Navigator
                    drawerType="slide"
                    overlayColor="transparent"
                    initialRouteName="Dashboard"
                    drawerStyle={{ width: '50%', backgroundColor: 'transparent' }}
                    drawerContentOptions={{
                        activeBackgroundColor: "transparent",
                        activeTintColor: 'green',
                        inactiveTintColor: 'green',
                    }}
                    sceneContainerStyle={{backgroundColor: "transparent"}}
                    drawerContent ={ props => {
                        setProgress(props.progress);
                        return <DrawerContent {...props }/>
                    }}>
                    <Drawer.Screen name="Screens">
                        {props => <Screens {...props} style={screenStyles} />}
                    </Drawer.Screen>
                </Drawer.Navigator>
            </LinearGradient>

    )
}
