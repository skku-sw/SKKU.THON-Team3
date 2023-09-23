
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ResumeContents2Text,ResumeContents1Text,ResumeContentsText,ResumeText,TextButton, ButtonStyleResume, PreNexButton } from '../components/styles';


const ResumeScreen2 = ({ navigation }) => {
    const nextView = () => {
        navigation.navigate("ResumeScreen2");
    }
  const [resumeTitle, setResumeTitle] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveTitle = () => {
    // 이력서 제목 저장 또는 처리 로직을 추가하세요.
    console.log('이력서 제목:', resumeTitle);
  };

  const handleSavePersonalInfo = () => {
    // 이름, 성별, 나이, 휴대폰 번호, 이메일 저장 또는 처리 로직을 추가하세요.
    console.log('이름:', name);
    console.log('성별:', gender);
    console.log('나이:', age);
    console.log('휴대폰 번호:', phoneNumber);
    console.log('이메일:', email);
  };

  return (
    <View>
       <ResumeText style = {{marginTop : 100,marginLeft : 22}}>
                    <Text style={{ color: '#FCA34D'}}>
                        경력사항
                    </Text>
                    이 있나요? 
                </ResumeText>
     

     
     
      <ResumeContents2Text style = {{marginTop : 5 ,marginLeft : 22}}>경력은 최대 20개까지 추가 가능합니다.{"\n"}이력서에는 장단기순, 최근 근무일 순으로 보여집니다.</ResumeContents2Text>



      <ButtonStyleResume>
            <PreNexButton
              style={{ marginRight: 'auto' }}
              onPress={() => handleMotionSelect('Newbie')}
            >
              <TextButton>신입</TextButton>
            </PreNexButton>
            <PreNexButton
              style={{ marginLeft: 'auto'}}
              onPress={() => handleMotionSelect('Old')} 
            >
              <TextButton>경력</TextButton>
            </PreNexButton>
        </ButtonStyleResume>
    
    

   




    </View>
  );
};

export default ResumeScreen2;