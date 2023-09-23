import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TestScreen from './screens/TestScreen';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import SplashScreen from './screens/SplashScreen';
import MyPageScreen from './screens/MyPageScreen';
import ResumeScreen from './screens/ResumeScreen';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';

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
    <ResumeScreen></ResumeScreen>
  );
}



//TEST

