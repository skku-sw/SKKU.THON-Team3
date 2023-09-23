import { Text } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Main/HomeScreen';
import FeedScreen from './Main/FeedScreen';
import MapScreen from './Main/MapScreen';
import ChatScreen from './Main/ChatScreen';
import MyPageScreen from './Main/MyPageScreen';

const Tab = createBottomTabNavigator();

function MainScreen({ route }) {
  const { hideTabs } = route.params || {};
  console.log("hideTabs:", hideTabs);
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '피드') {
            iconName = focused ? 'cloud' : 'cloud-outline'; 
          } else if (route.name === '지도') {
            iconName = focused ? 'map' : 'map-outline'; 
          } else if (route.name === "내 계정") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={24} color={"#FCA34D"} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [{ display: hideTabs ? "none" : "flex", height: 64}],
        tabBarLabelStyle: { fontFamily : "Pretendard-Regular",fontSize: 13,paddingBottom: 4 }, // Adjust the padding here
        headerShown: false,
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="피드" component={FeedScreen} />
      <Tab.Screen name="지도" component={MapScreen} />
      
      <Tab.Screen name="내 계정" component={MyPageScreen} />

    </Tab.Navigator>
  );
}

export default MainScreen;
