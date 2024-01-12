import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import React, {useState} from 'react';
import { Button, View, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Main from "../Screens/Main";
import CalendarView from "../Screens/CalendarView";
import RecipeView from "../Screens/RecipeView";
import SettingsView from "../Screens/SettingsView";

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
  const [showStackNav, setShowStackNav] = useState(false);
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
    
    <Tab.Screen name="Main" component={Main}  options={{tabBarIcon: () => (<Ionicons name="home-outline" size={24} color="black" /> ),}} />
    <Tab.Screen name="CalendarView" component={CalendarView} options={{tabBarIcon: () => (<MaterialCommunityIcons name="calendar-month-outline" size={24} color="black" /> ),}} />
    <Tab.Screen name="RecipeView" component={RecipeView} options={{tabBarIcon: () => (<MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" /> ),}} />
    <Tab.Screen name="SettingsView" component={SettingsView} options={{tabBarIcon: () => (<Ionicons name="ios-settings-outline" size={24} color="black" /> ),}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;