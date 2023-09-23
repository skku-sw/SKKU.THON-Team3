import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import {MainContainer, ButtonStyled, ButtonText, TitleContainer, LargeText,ImageContainerm } from '../../components/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const MyPageScreen = ({ navigation }) => {
   
  const handleAccountInfo = () => {
    // 계정 정보 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('계정 정보 버튼 클릭');
  };

  const handleFavorites = () => {
    // 즐겨찾기 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('즐겨찾기 버튼 클릭');
  };

  const handleEditResume = () => {
    console.log("RR");
    navigation.navigate("ResumeScreen");
    
  };

  const handleCheckApplications = () => {
    
    console.log('내 지원 현황 확인 버튼 클릭');
  };


  const handleLogout = () => {
    // 로그아웃 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('로그아웃 버튼 클릭');
  };

  return (
    <MainContainer>
       <TitleContainer>
                <LargeText>마이 페이지</LargeText>
        </TitleContainer>
        <Image
              source={require('./../../assets/images/profile.png')} // 이미지 파일 경로
              style={{ width: 100, height: 100, marginRight: 30 , marginTop : 20, marginBottom : 10}} // 이미지 스타일
            />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 20 }}>
        <View style={{ alignItems: 'center', marginRight: 20}}>
          <Text>지원현황</Text>
          <Text>1</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>이력서관리</Text>
          <Text>4</Text>
        </View>
        <View style={{ alignItems: 'center', marginLeft: 20 }}>
          <Text>이력서열람</Text>
          <Text>2</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleAccountInfo}>
        <ButtonStyled style={{marginTop : 52}}>
          <View style={{ flexDirection: 'row', alignItems: 'center'  }}>
            <Icon name = "people-outline" size = {30} color="white"/>
            <ButtonText>     계정 정보</ButtonText>
          </View>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFavorites}>
        <ButtonStyled>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Icon name = "bookmark-outline" size = {30} color="white"/>
            <ButtonText>     관심 기업</ButtonText>
          </View>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEditResume}>
        <ButtonStyled>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name = "document-text-outline" size = {30} color="white"/>
            <ButtonText>     이력서 수정</ButtonText>
          </View>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCheckApplications}>
        <ButtonStyled>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name = "contract-outline" size = {30} color="white"/>
            <ButtonText>     근로계약서</ButtonText>
          </View>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <ButtonStyled>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name = "log-out-outline" size = {30} color="white"/>
            <ButtonText>     로그아웃</ButtonText>
          </View>
        </ButtonStyled>
      </TouchableOpacity>
    </MainContainer>
  );
};

export default MyPageScreen;
