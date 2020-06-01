import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Home from './pages/home'
import Pay from './pages/pay'
import Wallet from './pages/wallet'
import PayButton from './components/payButton'

const Tab = createBottomTabNavigator()
const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    },
}

export default function Navigation() {
    return (
        <Tab.Navigator 
        initialRouteName="Wallet"
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size, focused }) => {
                if (route.name === 'Pay') {
                    return (
                        <PayButton 
                            focused={focused}
                            onPress={() => navigation.navigate('Pay')}/>
                    )
                }

                const { lib: Icon, name } = icons[route.name]
                return <Icon name={name} size={size} color={color}/>
            }
        })}
        tabBarOptions={{
            style: {
                backgroundColor: '#131418',
                borderTopColor: 'rgba(255, 255, 255, 0.2)'
            },
            activeTintColor: '#fff',
            inactiveTintColor: '#92929c'
        }}>
            <Tab.Screen options={{ title: 'Home' }} name="Home" component={Home}/>
            <Tab.Screen options={{ title: 'Carteira' }} name="Wallet" component={Wallet}/>
            <Tab.Screen options={{ title: '' }} name="Pay" component={Pay}/>
            <Tab.Screen options={{ title: 'Notificacoes' }} name="Notifications" component={Pay}/>
            <Tab.Screen options={{ title: 'Ajustes' }} name="Settings" component={Pay}/>
        </Tab.Navigator>
    )
}