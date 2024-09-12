import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/home'
import {Passwords} from './pages/passwords'

import { Ionicons } from '@expo/vector-icons'




const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            /* tabBarShowLabel= "false"  - in case don't wanna the name EXO: "home" */ 
            name="Home"component={Home}  options={{headerShown: false, tabBarIcon:({focused, size, color}) =>{
                if(focused){
                    return <Ionicons size={size} color={color} nome="home" />
                }

                return <Ionicons size={size} color={color} name="home-outline" />
            } }}  />
            <Tab.Screen name="Passwords" component={Passwords} options={{headerShown: false, tabBarIcon:({focused, size, color}) =>{
                if(focused){
                    return <Ionicons size={size} color={color} nome="lock-closed" />
                }

                return <Ionicons size={size} color={color} name="lock-closed-outline" />
            }}}/>
        </Tab.Navigator>
    )
}

