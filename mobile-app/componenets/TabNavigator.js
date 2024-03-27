
import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Notifications from './Notifications';
import Profile from './Profile';
import Home from "../screens/Home";
import HomeStack from "./HomeStack";


export default function TabNavigator() {
const Tab = createMaterialBottomTabNavigator();

  return (
   
      <Tab.Navigator
        initialRouteName="homeStack"
        activeColor="#e91e63"
      >
        <Tab.Screen
          name="homeStack"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>

  );
}
