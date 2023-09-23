import React , {useState, useEffect}from 'react';
import {Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { ButtonContainer, InputContainer, InputTextInput, InputTitleText, LargeText, LoginBelowContainer, LoginBelowImageContainer, LoginSubTitleText, LoginTitleContainer, LoginTitleText, MainContainer, NextSignUpContainer, SmallText, TestView, WhiteButtonText } from '../components/styles';
import axios from 'axios'; // Axios를 import합니다.

const LoginScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://10.0.2.2:3000/login', {
          nickname: userId,
          password: userPassword,
        });
  
        if (response.status === 200) {
          // 로그인 성공
          if (response.data === '로그인 성공') {
            navigation.navigate("MainScreen");
          } else {
            // 서버 응답이 '로그인 성공'이 아닌 경우에 대한 처리
            ToastAndroid.show('서버 응답 오류', ToastAndroid.SHORT);
          }
        } else {
          // 로그인 실패
          if (response.data === '로그인 실패') {
            ToastAndroid.show('로그인 실패', ToastAndroid.SHORT);
          } else {
            // 서버 응답이 '로그인 실패'가 아닌 경우에 대한 처리
            ToastAndroid.show('서버 응답 오류', ToastAndroid.SHORT);
          }
        }
      } catch (error) {
        console.error('로그인 요청 중 오류 발생:', error);
      }
    };

    const handleSignUp = () => {
        navigation.navigate("SignUpScreen");
    }
    return (
       <MainContainer>
            <LoginTitleContainer>
                <LoginTitleText>어서오세요</LoginTitleText>
                <LoginSubTitleText>모두함꼐, 서로 함께, 이롭게, 모서리와 함께 일자리를 찾아볼까요?</LoginSubTitleText>
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