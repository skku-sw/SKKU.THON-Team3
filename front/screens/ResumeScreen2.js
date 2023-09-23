import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { DetailApplyButton, ButtonText,InputContainer, InputTitleText, InputTextInput, ResumeText, TextButton, ButtonStyleResume, PreNexButton, BB} from '../components/styles';

const ResumeScreen2 = ({ navigation }) => {
  const [isExperience, setIsExperience] = useState(false);
  const [userwhen,setUserwhen] = useState('');
  const [userwhere, setUserwhere] = useState('');
  const [userwhat, setUserwhat] = useState('');
   // 경력 선택 여부 상태

  

  return (
    <View style = {{backgroundColor : "#F9F9F9", height: "100%"}}>
      <ResumeText style={{ marginTop: 100, marginLeft: 18 }}>
        <Text style={{ fontFamilly: "Pretendard-Bold", fontSize : 40,color: '#FCA34D' }}>
          경력사항
        </Text>
         이 있나요?
      </ResumeText>


        <View>
        <InputContainer style = {{marginTop : 24, marginLeft : 20}}>
                <InputTitleText style={{ fontFamilly: "Pretendard-Bold", fontSize : 14, marginLeft : 2}}>회사명</InputTitleText>
                <InputTextInput
                    placeholder="회사명을 입력하세요"
                    value={userwhere}
                    onChangeText={(where) => setUserwhere(where)}
                ></InputTextInput>
            </InputContainer>
         

    
            <InputContainer style = {{marginTop : 16, marginLeft : 20}}>
                <InputTitleText style={{ fontFamilly: "Pretendard-Bold", fontSize : 14, marginLeft : 2}}>근무기간</InputTitleText>
                <InputTextInput
                    placeholder="근무기간을 입력하세요"
                    value={userwhen}
                    onChangeText={(when) => setUserwhere(when)}
                ></InputTextInput>
            </InputContainer>

            <InputContainer style = {{marginTop : 16, marginLeft : 20}}>
                <InputTitleText style={{ fontFamilly: "Pretendard-Bold", fontSize : 14, marginLeft : 2}}>담당업무</InputTitleText>
                <InputTextInput
                    textAlign='top'
                    style = {{ height : 150}}
                    placeholder="담당업무를 입력해 주세요"
                    value={userwhat}
                    onChangeText={(what) => setUserwhere(what)}
                ></InputTextInput>
            </InputContainer>
          
            <DetailApplyButton style= {{marginLeft : 17}}onPress={() => {ToastAndroid.show('정상적으로 이력서가 접수 되었습니다.', ToastAndroid.SHORT);}} >
              <ButtonText>이력서 저장하기</ButtonText>
            </DetailApplyButton>
        </View>
      
    </View>
  );
};

export default ResumeScreen2;
