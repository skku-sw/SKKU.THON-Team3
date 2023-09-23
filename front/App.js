import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './screens/TestScreen';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import SplashScreen from './screens/SplashScreen';
import FilterScreen from './screens/Main/FilterScreen';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/Main/DetailScreen';
import MyPageScreen from './screens/Main/MyPageScreen';
import ResumeScreen from './screens/ResumeScreen';
import ResumeScreen2 from './screens/ResumeScreen2';
export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
        try {
            await Font.loadAsync({
                "Pretendard-Black": require("./assets/fonts/Pretendard-Black.otf"),
                "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
                "Pretendard-ExtraBold": require("./assets/fonts/Pretendard-ExtraBold.otf"),
                "Pretendard-ExtraLight": require("./assets/fonts/Pretendard-ExtraLight.otf"),
                "Pretendard-Light": require("./assets/fonts/Pretendard-Light.otf"),
                "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
                "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
                "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
                "Pretendard-Thin": require("./assets/fonts/Pretendard-Thin.otf"),

                
              });
              setIsFontLoaded(true);
          } catch (error) {
              console.error("Error loading fonts: ", error);
          }
      };
      loadFonts();
  }, []);
    
  if (!isFontLoaded) {
    return null; // 폰트가 로드되지 않았을 때는 아무것도 렌더링하지 않습니다.
  }
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="ResumeScreen" component={ResumeScreen} />
      <Stack.Screen name="ResumeScreen2" component ={ResumeScreen2}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}



//TEST

