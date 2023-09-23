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
// LoginScreen

export const LoginTitleContainer = styled.View`
    margin-top : ${StatusBarHeight + 80}px;
    width : 80%;
    align-items : center;
    background-color : #F9F9F9;
`

export const LoginTitleText = styled.Text`
    
    font-family: Pretendard-Bold;
    font-size: 32px;
    text-align: left;
    font-style: normal;
    color : ${black};

`
export const LoginSubTitleText = styled.Text`
    margin-top : 8px;
    font-family: Pretendard-Light;
    font-size: 12px;
    text-align: center;
    font-style: normal;
    color : ${black};

`

export const InputContainer = styled.View `
    width : 90%;
    align-items : left;
    background-color : #F9F9F9;
`
export const InputTitleText = styled.Text`
    color: #0D0140;
    font-family: Pretendard-Bold;
    font-size: 12px;
`

export const InputTextInput = styled.TextInput`
    
    padding: 15px;
    padding-left: 20px;
    margin-top : 8px;
    border-radius: 10px;
    border: 1px solid #FFFEFE;
    background: #E0DEDE;
    font-family: Pretendard-Regular;
    font-size: 14px;
    height: 56px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const LoginBelowContainer = styled.View`
    
    flex-direction: row;
    width : 93%;
    height : 50px;
    align-items : center;
    background-color : #F9F9F9;
`

export const LoginBelowImageContainer = styled.View`
    margin-left : 8px;
    width : 24px;
    height : 24px;
    border-radius : 8px;
    background-color : #E6E1FF;
`

export const ButtonContainer = styled.TouchableOpacity`
    border-radius : 8px;
    align-items: center;
    justify-content : center;
    width : 70%;
    height : 60px;
    background-color : #130160;
`

export const WhiteButtonText = styled.Text`
    color: #FFFFFF;
    font-family: Pretendard-Bold;
    font-size: 14px;
`
export const TestView = styled.View`
    margin-top : 16px;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    background-color : #F9F9F9;
`
export const NextSignUpContainer = styled.TouchableOpacity`
    background-color : #F9F9F9;
`

//SignUpScreen

export const SexContainer = styled.View`
    width : 100%;
    flex-direction : row;
    background-color : #F9F9F9;
`
export const SexButton = styled.TouchableOpacity`
    
    margin-top: 8px;
    width : 46%;
    height :50px;
    border-radius : 8px;
    background-color : #E0DEDE;
    justify-content : center;
    align-items : center;
`

export const SexText = styled.Text`
    color: ${tertiary};
    font-family: Pretendard-Regular;
    font-size: 20px;
    letter-spacing: 8px;
`

// ResumeScreen
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


