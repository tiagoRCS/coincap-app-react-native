import React from "react"
import { List, Details } from '../views/screens/assets';
import { MyAssets } from '../views/screens/store';
import { Order } from '../views/screens/order';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

 
export type RootTabParamList = {
    List: undefined;
    Details: undefined;
    MyAssets: undefined;
    Order: undefined;
}
 
const Tab = createBottomTabNavigator<RootTabParamList>();
 
const Theme = {
    ...DefaultTheme,
     dark: true,
     colors: {
        ...DefaultTheme.colors,
         card:'#131a20',
         primary: '#518ef1',
         background: '#131a20',
         text: '#dde4eb',
         border: '#1c2329',
         notification: '#dde4eb',
     },
}
 
 
export const Routes = () => {
    return(
        <NavigationContainer theme={Theme}>
            <Tab.Navigator>
                <Tab.Screen
                    name="List"
                    component={List}
                    options={
                        {
                            tabBarIcon: ({color}) =><MaterialCommunityIcons name= "home-outline" color={color} size={23}/>,
                            tabBarStyle: {paddingBottom: 5, backgroundColor: "#1d262f"},
                            title: 'Início',
                            headerTitle: 'Saldo',
                            headerTitleAlign: 'center',
                            headerLeft:() => <MaterialCommunityIcons name="menu" color={'#dde4eb'} size={25} style={{ marginLeft: 15 }} />,
                            headerRight: () => <MaterialCommunityIcons name="bell" color={'#dde4eb'} size={25} style={{ marginRight: 15 }} />,
                        
                        }
                    }
                />
                <Tab.Screen
                    name="MyAssets"
                    component={MyAssets}
                    options={
                        {
                            tabBarIcon: ({color}) =><MaterialCommunityIcons name= "folder-outline" color={color} size={23}/>,
                            title: 'Meus Ativos',
                            tabBarStyle: {paddingBottom: 5, backgroundColor: "#1d262f"},
                            headerTitleAlign: 'center',
                        }
                    }
                />
                <Tab.Screen
                    name="Order"
                    component={Order}
                    options={
                        {
                            tabBarIcon: ({color}) => <MaterialCommunityIcons name= "text-box-outline" color={color} size={23}/>,
                            title: 'Ordens',
                            tabBarStyle: {paddingBottom: 5, backgroundColor: "#1d262f"},
                            headerTitleAlign: 'center',
                        }
                    }
                />
                <Tab.Screen
                    name="Details"
                    component={Details}
                    options={
                        {
                            title: 'Detalhes',
                            headerTitleAlign: 'center',
                            tabBarStyle: {paddingBottom: 5, backgroundColor: "#1d262f"},
                            headerLeft: () => 
                                <MaterialCommunityIcons 
                                    name="chevron-left" 
                                    color={'#dde4eb'} 
                                    size={25} 
                                    style={{ marginLeft: 15 }} 
                                />,
                            tabBarButton: () => null
                        }
                    }
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}