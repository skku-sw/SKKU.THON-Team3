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
export const ButtonStyleResume = styled.TouchableOpacity`
    width : 100%;
    flex-direction : row;
    background-color : #F9F9F9;
`
export const PreNexButton = styled.TouchableOpacity`
    
    margin-top: 20px;
    width : 46%;
    height :50px;
    border-radius : 8px;
    background-color : #000080;
    justify-content : center;
    align-items : center;
    `   
export const TextButton = styled.Text`
    color: ${primary};
    font-family: Pretendard-Regular;
    font-size: 20px;
    letter-spacing: 8px;
`

export const ButtonStyled = styled.TouchableOpacity`
background-color: ${deepblue};
padding: 10px 20px;
border-radius: 15px;
width: 335px; 
height: 50px;
margin-Top : 20px;
`

export const ButtonText = styled.Text`
color: ${primary};
font-size: 16px;
vertical-align: middle;
`;

export const BB = styled.Text`
    color: ${black};
    font-family: Pretendard-Regular;
    font-size: 20px;
    letter-spacing: 8px;
    `;    




//HomeScreen
export const ScrollContainer = styled.ScrollView`

`
export const ScreenContainer = styled.View`
    flex: 1;
    align-items: center;
    background-color: ghostwhite;
`;

export const ScreenTitle = styled.Text`
    font-size: 24px;
    font-family: Pretendard-Bold;
    color: #333;
`;

export const HomeFullNameContainer = styled.View`
    margin-top: 80px;
    width: 90%;
    flexDirection: row;           
    alignItems: center;           
    justifyContent: space-between;
`;

export const HomeFullNameText = styled.Text`
    margin-left : 4px;
    color: #0D0140;
    font-size: 25px;
    font-family: Pretendard-Bold;

`

export const ProfileImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #123452;
    margin-top: -50px;
`

export const FilterContainer = styled.View`
    margin-top: 30px;
    width: 90%;        
    alignItems: left;           

    
`
export const HomeSubtitle = styled.Text`
    font-size: 24px;
    font-family: Pretendard-Bold;
    color: #333;
`

export const HomeText = styled.Text`
    margin-left : 4px;
    color: #000000;
    font-size: 20px;
    font-family: Pretendard-Bold;
`
export const FilterWrap = styled.View`
    margin-top: 10px;
    flexDirection: row;
    width: 100%;
    height: 200px;
`
export const LeftBox = styled.TouchableOpacity`
    flex: 1;  
    background-color: #AFECFE;
    border-radius: 6px;
    margin-right: 15px;
    alignItems: center;
    justifyContent: center;
`;

export const RightContainer = styled.View`
    padding : 4px;
    flex: 1;
    flexDirection: 'column';
`;

export const TopRightBox = styled.TouchableOpacity`
    flex: 1;
    background-color: #BEAFFE;
    alignItems: center;
    justifyContent: center;
    border-radius: 6px;  
`;

export const BottomRightBox = styled.TouchableOpacity`
    flex: 1;
    margin-top: 10px;
    alignItems: center;
    justifyContent: center;
    background-color: #FFD6AD;
    border-radius: 6px;  
`;

export const NumberText = styled.Text`
    color: #0D0140;
    font-size: 16px;
    font-family: Pretendard-Bold;
    
`;

export const FilterText = styled.Text`
    color: #0D0140;
    font-size: 14px;
    font-family: Pretendard-Regular;
    
`;

export const FilterImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-bottom: 20px;
    
`

export const TeamContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
    width: 90%;        
    alignItems: flex-start; 
`
export const TeamWrap = styled.View`
    background-color: ${primary};
    border-radius: 20px;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 8px;
    elevation: 10; 
    height: 150px;
    width: 95%;
    alignItems: center;
`

export const TeamTitleContainer = styled.View`
    width: 90%;
    height: 40%;
    margin-top: 6px;
    flexDirection: row;
    align-Items: center;
`

export const TeamTitleImage = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-color: #FFFFFF;
`

export const TeamTitleTextContainer = styled.View`
    width: 70%;
    height: 100%;
    background-color: ${primary};
    margin-right: 10px;
    margin-left: 10px;
    align-Items: left;
    justifyContent: center;
`
export const TopText = styled.Text`
    color: #150B3D; 
    fontSize: 16px;
    font-family: Pretendard-Bold;

    
`

export const BottomText = styled.Text`
    margin-top: 4px;
    color: #524B6B;
    font-size: 12px;
    font-family: Pretendard-Regular;
    
`
export const NumberBox = styled.View`
    width: 90%;
    margin-top: 4px;
    flexDirection: row;

`

export const CurrentPerson = styled.Text`
    font-size : 18px;
    font-family: Pretendard-Bold;
`

export const RangePerson = styled.Text`
    font-size : 18px;
    font-family: Pretendard-Bold;
    color: #FCA34D;
`
export const TagContainer = styled.View`
    width: 90%;
    margin-top: 8px;
    flexDirection: row;
    justifyContent: space-between;

`

export const TagBox = styled.View`
    
    padding: 0px 8px;
    margin-right : 8px;
    height: 28px;
    justify-content: center;
    align-items: center;
    background-color: #CBC9D4;
    border-radius: 6px;
`

export const TagText = styled.Text`
    font-size: 11px;
    font-family: Pretendard-Medium;
    letterSpacing : 1px;
    color: #524B6B;
`

export const ApplyButton = styled.TouchableOpacity`
    
    padding: 4px;
    width: 80px;
    background-color: #FF6B2C;
    justify-content: center;
    align-items: center;
    margin-left : auto;
    border-radius: 5px;
    height: 28px;
`

//filterScreen
export const SearchContainer = styled.View`
    width: 90%;
    height: 80px;
    background-color: ghost-white;
    border-radius: 8px;
    margin-top  : 50px;
    align-items: center;
    flex-direction : row;
    justify-content: center ;

`

export const SearchTextInput = styled.TextInput`
    background-color : ${secondary};
    padding: 15px;
    border-radius: 5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    height: 50px;
    margin-end : 10px;
    width: 80%;
    color: ${tertiary};
`;

export const SearchImage = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: ${primary};
`

export const DetailTitleContainer = styled.View` 
    width: 100%;
    height: 250px;
    align-items: center;
    background-color: ${primary};
    position: relative; 
`;

export const DetailTitleImage = styled.Image`
    position: absolute;  
    bottom: 38%;
    z-index: 1;
    padding: 16px;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    background-color: #D6CDFE;
`;

export const DetailTitleBox = styled.View`
    width: 100%;
    height: 50%;
    position: absolute;  
    bottom: 0px;
    margin-top : 0px;
    background-color: #F9F9F9;
`;

export const DetailTextContainer = styled.View`
    width: 100%;
    height: 65%;
    padding: 10px;
    position: absolute;  
    align-items: center;
    bottom: 0px;
    background-color: #F9F9F9;
`
export const DetailTitleText = styled.Text`
    color: #0D0140;
    font-size: 20px;
    font-family: Pretendard-Bold;
    margin-bottom: 10px; 
`

export const DetailDescContainer = styled.View`
    margin-top: 30px;
    padding : 10px;
    border-radius : 16px;
    width:90%;
    background-color: ${primary};
`

export const DetailRequireContainer = styled.View`
    margin-top: 30px;
    padding : 10px;
    border-radius : 16px;
    width:90%;
    background-color: ${primary};
`

export const DetailSubtileText = styled.Text`
    color: #0D0140;
    font-size: 16px;
    font-family: Pretendard-Bold;
    margin-top: 5px; 
`
export const DetailApplyButton = styled.TouchableOpacity`
    width:90%;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 30px;
    height: 60px;
`;

