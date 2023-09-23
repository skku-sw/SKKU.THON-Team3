import React, { useState } from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import { NextSignUpContainer, ButtonContainer, InputContainer, InputTextInput, InputTitleText, LargeText, LoginBelowContainer, LoginBelowImageContainer, LoginSubTitleText, LoginTitleContainer, LoginTitleText, MainContainer, SexButton, SexContainer, SexText, SmallText, WhiteButtonText } from '../components/styles';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
const SignUpScreen = ({ navigation }) => {
  const [pickerValue, setPickerValue] = useState("1");
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [gender, setGender] = useState(''); // 성별을 저장할 상태 변수
  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };
  const handleNext = () => {
    navigation.navigate("MainScreen");
}
  
    const handleSignUp = async () => {
        // Prepare the data to be sent in the POST request
        try {
            const data = {
                nickname: userName,
                username: userId,
                password: userPassword,
                sex: gender,
                tag: pickerValue,
                age: parseInt(userAge),
                phone_number: userNumber
              };
              console.log(data);
          const response = await axios.post('http://localhost:3000/login/join', {
            nickname: userName,
            username: userId,
            password: userPassword,
            sex: gender,
            tag: pickerValue,
            age: parseInt(userAge),
            phone_number: userNumber
          });
    
          if (response.status === 200) {
            if (response.data === '회원가입 성공') {
                navigation.navigate("MainScreen");
              } else {
                // 서버 응답이 '로그인 성공'이 아닌 경우에 대한 처리
                ToastAndroid.show('회원가입 실패', ToastAndroid.SHORT);
              }
          } else {
            if (response.data === '회원가입 실패') {
                ToastAndroid.show('회원가입 실패', ToastAndroid.SHORT);
              } else {
                // 서버 응답이 '로그인 실패'가 아닌 경우에 대한 처리
                ToastAndroid.show('서버 응답 오류', ToastAndroid.SHORT);
              }
          }
        } catch (error) {
          // Handle network errors or other exceptions
          console.error('Error:', error);
        }
      };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <MainContainer>
        <LoginTitleContainer style={{marginTop : 64}}>
          <LoginTitleText>회원가입</LoginTitleText>
          <LoginSubTitleText>모두함꼐, 서로 함께, 이롭게, 모서리와 함께 일자리를 찾아볼까요?</LoginSubTitleText>
        </LoginTitleContainer>

        <InputContainer style={{ marginTop: 32 }}>
          <InputTitleText>이름</InputTitleText>

          <InputTextInput
            autoFocus={true}
            editable={true}
            placeholder="이름"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          >
          </InputTextInput>
        </InputContainer>
        <InputContainer style={{ marginTop: 8 }}>
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

        <InputContainer style={{ marginTop: 8 }}>
          <InputTitleText>전화번호</InputTitleText>
          <InputTextInput
            placeholder="010-XXXX-XXXX"
            value={userNumber}
            onChangeText={(text) => setUserNumber(text)}
          ></InputTextInput>
        </InputContainer>

        <InputContainer style={{ marginTop: 8 }}>
          <InputTitleText>비밀번호</InputTitleText>
          <InputTextInput
            placeholder="비밀번호"
            value={userPassword}
            onChangeText={(text) => setUserPassword(text)}
            secureTextEntry
          ></InputTextInput>
        </InputContainer>

        <InputContainer style={{ marginTop: 8 }}>
          <InputTitleText>성별</InputTitleText>
          <SexContainer>
            <SexButton
              style={{ marginRight: 'auto', backgroundColor: gender === 'male' ? '#FCA34D' : '#E0DEDE' }}
              onPress={() => handleGenderSelect('male')} // '남자' 선택 시
            >
              <SexText>남자</SexText>
            </SexButton>
            <SexButton
              style={{ marginLeft: 'auto', backgroundColor: gender === 'female' ? '#FCA34D' : '#E0DEDE' }}
              onPress={() => handleGenderSelect('female')} // '여자' 선택 시
            >
              <SexText>여자</SexText>
            </SexButton>
          </SexContainer>
        </InputContainer>

        <InputContainer style={{ marginTop: 16 }}>
          <InputTitleText>카테고리</InputTitleText>
          <Picker
            style={{
              backgroundColor: "#E0DEDE",
              borderRadius: 30,
              borderWidth: 1,
              borderColor: "#000",
              marginTop: 8
            }} // 배경색과 borderRadius를 적용
            selectedValue={pickerValue}
            onValueChange={(item) => setPickerValue(item)}
          >
            <Picker.Item label="노약자" value="senior" />
            <Picker.Item label="외국인 노동자" value="foreign" />
            <Picker.Item label="미혼모" value="single_mom" />
            <Picker.Item label="탈북민" value="north" />
          </Picker>
        </InputContainer>

        <InputContainer style={{ marginTop: 16 }}>
          <InputTitleText>나이</InputTitleText>
          <InputTextInput
            placeholder="나이"
            value={userAge}
            onChangeText={(text) => setUserAge(text)}
          ></InputTextInput>
        </InputContainer>


        <ButtonContainer style={{ marginTop: 16 }} onPress={handleSignUp}>
          <WhiteButtonText>회원 가입</WhiteButtonText>
        </ButtonContainer>

        <View style={{ marginTop: 1 }}>
        <NextSignUpContainer onPress={handleNext}>
                            <Text style={{ fontSize : 13, color: '#FCA34D', textAlign: 'center' }}>
                                회원가입
                            </Text>
                </NextSignUpContainer>
        </View>

        
      </MainContainer>
    </ScrollView>
  );
};

export default SignUpScreen;
