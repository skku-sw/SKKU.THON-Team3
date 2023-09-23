import React , {useState, useEffect}from 'react';
import { Text, View, Button, Image } from 'react-native';
import { ButtonContainer, InputContainer, InputTextInput, InputTitleText, LargeText, LoginBelowContainer, LoginBelowImageContainer, LoginSubTitleText, LoginTitleContainer, LoginTitleText, MainContainer, SexButton, SexContainer, SexText, SmallText, WhiteButtonText } from '../components/styles';
import { Picker } from '@react-native-picker/picker';

const SignUpScreen = ({navigation}) => {
    const [pickerValue, setPickerValue] = useState("1");
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [gender, setGender] = useState(''); // 성별을 저장할 상태 변수
    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
      };
    const handleSignUp = () => {
        // 여기에서 로그인 로직을 구현합니다.
        // userId와 userPassword를 사용하여 로그인을 시도하고,
        // 성공하면 다음 화면으로 이동하도록 작업할 수 있습니다.
        // 로그인 성공 시에는 navigation.navigate('다음 화면 이름')을 사용하여 다음 화면으로 이동합니다.
        
        navigation.navigate("MainScreen");
      };
    return (
       <MainContainer>
            <LoginTitleContainer>
                <LoginTitleText>Create an Account</LoginTitleText>
                <LoginSubTitleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LoginSubTitleText>
            </LoginTitleContainer>

            <InputContainer style = {{marginTop : 32}}>
                <InputTitleText>이름</InputTitleText>

                <InputTextInput
                    autoFocus={true}
                    editable={true}
                    placeholder="이름"
                    value={userId}
                    onChangeText={(text) => setUserId(text)}
                >
                </InputTextInput>
            </InputContainer>
            <InputContainer style = {{marginTop : 8}}>
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

            <InputContainer style = {{marginTop : 8}}>
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
                    style={{ marginRight: 'auto', backgroundColor: gender === '남자' ? '#FCA34D' : '#E0DEDE' }}
                    onPress={() => handleGenderSelect('남자')} // '남자' 선택 시
                >
                    <SexText>남자</SexText>
                </SexButton>
                <SexButton
                    style={{ marginLeft: 'auto', backgroundColor: gender === '여자' ? '#FCA34D' : '#E0DEDE' }}
                    onPress={() => handleGenderSelect('여자')} // '여자' 선택 시
                >
                    <SexText>여자</SexText>
                </SexButton>
                </SexContainer>
            </InputContainer>
            
            <InputContainer style = {{marginTop : 8}}>
                <InputTitleText>카테고리</InputTitleText>
                <Picker
                    style={{ 
                        backgroundColor: "#E0DEDE", 
                        borderRadius: 30,
                        borderWidth: 1, // 테두리 두께 설정
                        borderColor: "#000",  
                        marginTop: 8
                    }} // 배경색과 borderRadius를 적용
                    selectedValue={pickerValue}
                    onValueChange={(item) => setPickerValue(item)}
                >
                    <Picker.Item label="노약자" value="1" />
                    <Picker.Item label="외국인 노동자" value="2" />
                    <Picker.Item label="미혼모" value="3" />
                    <Picker.Item label="탈북민" value="4" />
                </Picker>        
            </InputContainer>

            <ButtonContainer style = {{marginTop : 16}} onPress={handleSignUp}>
                <WhiteButtonText>회원 가입</WhiteButtonText>
            </ButtonContainer>

            <View style={{marginTop : 1}}>
                <SmallText style={{fontFamily: "Pretendard-Regular", fontSize:13}}>계정을 아직 가지고 계지소 없으신가요? 
                <Text style={{ color: '#FCA34D' }}>
                        회원가입
                    </Text></SmallText>
            </View>
       </MainContainer>
    );
};

export default SignUpScreen;