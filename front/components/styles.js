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
    ;
    
   `

   export const ButtonStyled = styled.TouchableOpacity`
     background-color: ${brand};
     padding: 10px 20px;
     border-radius: 5px;
   `;
   
   export const ButtonText = styled.Text`
     color: ${black};
     font-size: 16px;
     text-align: left;
   `;
   
   

   export const ImageContainer = styled.View`
     width: 150px;
     height: 150px;
     border-radius: 75px;
     justify-content: center;
     align-items: center;
   `;
   
   export const ImageStyled = styled.Image`
     width: 24px;
     height: 24px;
     border-radius: 50px;
   `;
   

