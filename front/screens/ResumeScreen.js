import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ResumeContents2Text,ResumeContents1Text,ResumeContentsText,ResumeText,SmallText } from '../components/styles';


const ResumeScreen = () => {
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
                        이력서 제목
                    </Text>
                    을 입력해주세요
                </ResumeText>
      <TextInput
        placeholder="한 문장으로 나를 소개해 보세요(최소 5자 이상)"
        onChangeText={text => setResumeTitle(text)}
        value={resumeTitle}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 10,
          margin: 10,
        }}
      />

      <ResumeContentsText style = {{marginTop : 40 ,marginLeft : 22}}>이런 제목은 어때요?</ResumeContentsText>
      <ResumeContents1Text style = {{marginTop : 10 ,marginLeft : 22,color:"#808080"}}>경력 강조형</ResumeContents1Text>
      <ResumeContents2Text style = {{marginTop : 5 ,marginLeft : 22}}>회사업무 경력 5년, 바로 실무가 가능합니다.{"\n"}유사 직무 경험이 있습니다.</ResumeContents2Text>

      <ResumeContents1Text style = {{marginTop : 10 ,marginLeft : 22,color:"#808080"}}>성격/각오강조형</ResumeContents1Text>
      <ResumeContents2Text style = {{marginTop : 5 ,marginLeft : 22}}>열정적으로 임할 수 있습니다.{"\n"}노련합니다.</ResumeContents2Text>

    
      <ResumeContents1Text style = {{marginTop : 10 ,marginLeft : 22,color:"#808080"}}>역량 강조형</ResumeContents1Text>
      <ResumeContents2Text style = {{marginTop : 5 ,marginLeft : 22}}>영어를 잘합니다.{"\n"}유연한 대처가 가능합니다.</ResumeContents2Text>

      

   


  
 
      

      <TouchableOpacity onPress={handleSaveTitle}>
        <View
          style={{
            backgroundColor: 'deepblue',
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
            margin: 10,
          }}>
          <Text style={{ color: 'white' }}>이전</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSavePersonalInfo}>
        <View
          style={{
            backgroundColor: 'deepblue',
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
            margin: 10,
          }}>
          <Text style={{ color: 'white' }}>다음</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResumeScreen;
