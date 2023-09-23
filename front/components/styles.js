import styled from "styled-components/native";
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;  // 오타 수정

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",  // 수정된 색상 코드
    black: "#000001",
};
const { primary,secondary,tertiary,darkLight,brand,green,red,black} = Colors;
export const MainContainer = styled.View`
    flex : 1;
    align-items: center;
    background-color: ${red};
    
`

