import React , {useState, useEffect}from 'react';
import {Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { ButtonContainer, InputContainer, InputTextInput, InputTitleText, LargeText, LoginBelowContainer, LoginBelowImageContainer, LoginSubTitleText, LoginTitleContainer, LoginTitleText, MainContainer, NextSignUpContainer, SmallText, TestView, WhiteButtonText } from '../components/styles';


const LoginScreen = ({navigation}) => {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleLogin = () => {
        // 여기에서 로그인 로직을 구현합니다.
        // userId와 userPassword를 사용하여 로그인을 시도하고,
        // 성공하면 다음 화면으로 이동하도록 작업할 수 있습니다.
        // 로그인 성공 시에는 navigation.navigate('다음 화면 이름')을 사용하여 다음 화면으로 이동합니다.
        console.log(userId);
        console.log(userPassword);
        navigation.navigate("SplashScreen");
      };

    const handleSignUp = () => {
        navigation.navigate("SignUpScreen");
    }
    return (
       <MainContainer>
            <LoginTitleContainer>
                <LoginTitleText>Welcome Back</LoginTitleText>
                <LoginSubTitleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LoginSubTitleText>
            </LoginTitleContainer>
            <InputContainer style = {{marginTop : 80}}>
                <InputTitleText>아이디</InputTitleText>

                <InputTextInput
                    autoFocus={true}
                    editable={true}
                    placeholder="아이디"
                    value={userId}
                    onChangeText={(text) => setUserId(text)}
                >
                </InputTextInput>
            </InputContainer>

            <InputContainer style = {{marginTop : 16}}>
                <InputTitleText>비밀번호</InputTitleText>
                <InputTextInput
                    placeholder="비밀번호"
                    value={userPassword}
                    onChangeText={(text) => setUserPassword(text)}
                    secureTextEntry 
                ></InputTextInput>
            </InputContainer>

            <LoginBelowContainer>
                <LoginBelowImageContainer>
                    <Image source={require('./../assets/images/RememberBox.png')} style={{ width: "100%", height: "100%", resizeMode: 'contain' }} />
                </LoginBelowImageContainer>
                <SmallText style = {{marginLeft : 8, fontSize: 12, color :"#AAA6B9"}}>Remember Me</SmallText>
                <SmallText style = {{marginLeft : 140 , marginRight : 8, fontSize: 12}}>Forgot Password</SmallText>
            </LoginBelowContainer>
            
            <ButtonContainer style = {{marginTop : 32}} onPress={handleLogin}>
                <WhiteButtonText>LOGIN</WhiteButtonText>
            </ButtonContainer>

            <TestView>
                <SmallText style={{ fontFamily: "Pretendard-Regular", fontSize: 13 }}>
                    계정을 아직 가지고 계시지 않으신가요?{' '}
                </SmallText>
                <NextSignUpContainer onPress={handleSignUp}>
                            <Text style={{ fontSize : 13, color: '#FCA34D', textAlign: 'center' }}>
                                회원가입
                            </Text>
                </NextSignUpContainer>
            </TestView>

       </MainContainer>
    );
};

export default LoginScreen;