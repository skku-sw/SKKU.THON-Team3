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

//Splash Screen
export const MainContainer = styled.View`
    flex : 1;
    align-items: center;
    background-color: #F9F9F9;
    
`
export const TitleContainer = styled.View`
    margin-top : ${StatusBarHeight + 20}px;
    width : 80%;
    align-items : flex-end;
    background-color : #F9F9F;
`

export const AppNameText = styled.Text`
    font-family: Pretendard-Bold;
    font-size: 18px;
    line-height: 30px; 
    text-align: center;
    font-style: normal;
    color : ${black};
`
export const ImageContainer = styled.View`
    margin-top : 60px;
    padding : 16px;
    width : 90%;
    height : 359px;
    background-color : #F9F9F;
`

export const MainTextContainer = styled.View`
    margin-top : 36px;
    width : 80%;
    align-items : flex-start;
    background-color : #F9F9F;
`
export const LargeText = styled.Text`
    
    font-family: Pretendard-Bold;
    font-size: 36px;
    text-align: left;
    font-style: normal;
    color : ${black};
`
export const SmallText = styled.Text`
    font-family: Pretendard-Light;
    font-size: 14px;
    text-align: left;
    font-style: normal;
    color : ${black};
`

export const NextContainer = styled.View`
    margin-top : 16px;
    width : 90%;
    align-items : flex-end;
    background-color : #F9F9F;
`
export const NextButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
`