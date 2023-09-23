import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MainContainer, ButtonStyled, ButtonText } from '../components/styles'; // YourStyleFile에 실제 파일 경로로 바꾸세요

const MyPageScreen = () => {
  const handleAccountInfo = () => {
    // 계정 정보 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('계정 정보 버튼 클릭');
  };

  const handleFavorites = () => {
    // 즐겨찾기 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('즐겨찾기 버튼 클릭');
  };

  const handleEditResume = () => {
    // 이력서 수정 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('이력서 수정 버튼 클릭');
  };

  const handleCheckApplications = () => {
    // 내 신청 현황 확인 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('내 신청 현황 확인 버튼 클릭');
  };

  const handleLogout = () => {
    // 로그아웃 버튼을 눌렀을 때 수행할 작업을 여기에 추가
    console.log('로그아웃 버튼 클릭');
  };

  return (
    <MainContainer>
      <Text style={{ fontFamily: "Pretendard-Bold" }}>마이 페이지</Text>

      <TouchableOpacity onPress={handleAccountInfo}>
        <ButtonStyled>
          <ButtonText>계정 정보</ButtonText>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFavorites}>
        <ButtonStyled>
          <ButtonText>즐겨찾기</ButtonText>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleEditResume}>
        <ButtonStyled>
          <ButtonText>이력서 수정</ButtonText>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCheckApplications}>
        <ButtonStyled>
          <ButtonText>내 신청 현황 확인</ButtonText>
        </ButtonStyled>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <ButtonStyled>
          <ButtonText>로그아웃</ButtonText>
        </ButtonStyled>
      </TouchableOpacity>
    </MainContainer>
  );
};

export default MyPageScreen;
