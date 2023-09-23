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
    deepblue : "#000080",
   
};
const { primary,secondary,tertiary,darkLight,brand,green,red,black,deepblue} = Colors;


   export const ButtonStyled = styled.TouchableOpacity`
     background-color: ${deepblue};
     padding: 10px 20px;
     border-radius: 15px;
     width: 335px; 
     height: 50px;
     margin-Top : 20px;
   `;
   
   export const ButtonText = styled.Text`
     color: ${primary};
     font-size: 16px;
     vertical-align: middle;
   `;
   
   

   export const Image2Container = styled.View`
     width: 150px;
     height: 150px;
     border-radius: 75px;
     justify-content: center;
     align-items: center;
   `;
   
   export const ImageStyled = styled.Image`
     width: 24px;
     height: 24px;
     margin-Top : 13px;
   `;
   
//Splash Screen
export const MainContainer = styled.View`
    flex : 1;
    align-items: center;
    background-color: #F9F9F9;
    
`
export const TitleContainer = styled.View`
    margin-top : ${StatusBarHeight + 20}px;
    width : 80%;
    align-items : start;
    background-color : #F9F9F;
`
export const TitleContainer_login = styled.View`
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
export const ImageContainerm = styled.View`
  
    width : 90%;
    height : 200px;
    background-color : #F9F9F;
    align-item : flex-center;
    justify-content : center;
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
export const ResumeText = styled.Text`
    font-family: Pretendard-Bold;
    font-size: 25px;
    text-align: left;
    font-style: normal;    
`

export const ResumeContentsText = styled.Text`
    font-family: Pretendard-Bold;
    font-size: 20px;
    text-align: left;
    font-style: normal;    
`
export const ResumeContents1Text = styled.Text`
    font-family: Pretendard-Bold;
    font-size: 18px;
    text-align: left;
    font-style: normal;    
`
export const ResumeContents2Text = styled.Text`
    font-family: Pretendard-Regular;
    font-size: 18px;
    text-align: left;
    font-style: normal;    
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