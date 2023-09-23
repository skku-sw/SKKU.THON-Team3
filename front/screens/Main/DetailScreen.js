import React, { useState, useEffect } from 'react';
import { 
    DetailTitleContainer,
    ScreenContainer,
    DetailTitleImage,
    DetailTitleBox,
    DetailTextContainer,
    DetailTitleText,
    TagBox,
    TagText,
    DetailDescContainer,
    DetailRequireContainer,
    DetailSubtileText,
    DetailApplyButton,
    ButtonText
} from './../../components/styles';
import { Text, View,ToastAndroid ,ActivityIndicator } from 'react-native';
import axios from 'axios';

const DetailScreen = ({ navigation, route }) => {
  const [team, setTeam] = useState(null); // 팀 정보를 담을 state
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 저장할 state

  useEffect(() => {
    // 해당 팀 정보를 서버에서 가져오는 요청을 보냅니다.
    axios
      .get(`http://10.0.2.2:3000/posts/${route.params?.idx}`)
      .then((response) => {
        // 요청이 성공하면 데이터를 state에 저장하고 로딩 상태를 false로 업데이트합니다.
        const data = response.data;
        console.log(data);
        setTeam(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setIsLoading(false); // 에러 발생 시에도 로딩 상태를 false로 업데이트합니다.
      });
  }, [route.params?.idx]);

  // 로딩 중일 때 보여줄 화면
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="primary" />
      </View>
    );
  }

  // 팀 데이터가 없는 경우
  if (!team) {
    return <Text>No data available</Text>;
  }

  // 팀 데이터가 있는 경우 화면을 렌더링합니다.
  return (
    <ScreenContainer>
      <DetailTitleContainer>
        <DetailTitleImage style = {{backgroundColor : "#FFFFFF"}}resizeMode="contain" source={require('./../../assets/images/icon3.png')}></DetailTitleImage>
        <DetailTitleBox>
          <DetailTextContainer style={{ padding : 30, elevation : 3,alignItems : 'center'}}>
            <DetailTitleText style ={{ textAlign : 'center'}}>{team.title}</DetailTitleText>
            <TagBox>
              <TagText> {team.agency} </TagText>    
            </TagBox>                        
          </DetailTextContainer>
        </DetailTitleBox>
      </DetailTitleContainer>
      <View style={{marginTop: 32, flexDirection : 'row'}}>
        <View style={{ elevation : 5,alignItems : 'center' , padding : 16, borderRadius : 16, marginStart : 16,marginEnd : 16, flex: 1, backgroundColor:"#FFFFFF"}}>
          <DetailTitleText style ={{ textAlign : 'center'}}>임금</DetailTitleText>
          <DetailSubtileText style ={{ textAlign : 'center'}}>{team.salary}</DetailSubtileText>   
        </View>
        <View style={{ elevation : 5,alignItems : 'center' , padding : 16, borderRadius : 16, marginEnd : 16, flex: 1, backgroundColor:"#FFFFFF"}}>
          <DetailTitleText style ={{ textAlign : 'center'}}>업무 시간</DetailTitleText>
          <DetailSubtileText style ={{ textAlign : 'center'}}>{team.working_hours}</DetailSubtileText> 
        </View>
      </View>
      <DetailDescContainer style = {{ alignItems : 'center' ,padding : 160, elevation : 5,alignItems : 'center'}}>
        <DetailTitleText style ={{ textAlign : 'center'}}>상세정보</DetailTitleText>
        <DetailSubtileText style={{textAlign : 'center'}}>{team.content}</DetailSubtileText>   
      </DetailDescContainer>
      <DetailRequireContainer  style = {{ elevation : 5, alignItems : 'center'}}>
        <DetailTitleText style ={{ textAlign : 'center'}}>모집 기간</DetailTitleText>
        <DetailSubtileText style ={{ textAlign : 'center'}}>{team.period}</DetailSubtileText> 
      </DetailRequireContainer>
      <DetailApplyButton onPress={() => {navigation.navigate("MainScreen"),ToastAndroid.show('정상적으로 이력서가 접수 되었습니다.', ToastAndroid.SHORT);}} >
        <ButtonText>지원 하기</ButtonText>
      </DetailApplyButton>
    </ScreenContainer>
  );
};

export default DetailScreen;
