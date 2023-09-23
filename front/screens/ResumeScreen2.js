import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { InputContainer, InputTitleText, InputTextInput, ResumeText, TextButton, ButtonStyleResume, PreNexButton, BB} from '../components/styles';

const ResumeScreen2 = ({ navigation }) => {
  const [isExperience, setIsExperience] = useState(false);
  const [userwhen,setUserwhen] = useState('');
  const [userwhere, setUserwhere] = useState('');
  const [userwhat, setUserwhat] = useState('');
   // 경력 선택 여부 상태

  

  return (
    <View>
      <ResumeText style={{ marginTop: 100, marginLeft: 22 }}>
        <Text style={{ color: '#FCA34D' }}>
          경력사항
        </Text>
        이 있나요?
      </ResumeText>


        <View>
        <InputContainer style = {{marginTop : 16, marginLeft : 16}}>
                <InputTitleText>회사명</InputTitleText>
                <InputTextInput
                    placeholder="회사명을 입력하세요"
                    value={userwhere}
                    onChangeText={(where) => setUserwhere(where)}
                ></InputTextInput>
            </InputContainer>
         

    
            <InputContainer style = {{marginTop : 16, marginLeft : 16}}>
                <InputTitleText>근무기간</InputTitleText>
                <InputTextInput
                    placeholder="근무기간을 입력하세요"
                    value={userwhen}
                    onChangeText={(when) => setUserwhere(when)}
                ></InputTextInput>
            </InputContainer>

            <InputContainer style = {{marginTop : 16, marginLeft : 16}}>
                <InputTitleText>담당업무</InputTitleText>
                <InputTextInput
                    placeholder="담당업무를 입력해 주세요"
                    value={userwhat}
                    onChangeText={(what) => setUserwhere(what)}
                ></InputTextInput>
            </InputContainer>
          
       
        </View>
      
    </View>
  );
};

export default ResumeScreen2;
