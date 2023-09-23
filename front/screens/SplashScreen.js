import React from 'react';
import { Text, Image} from 'react-native';
import { AppNameText, ImageContainer, LargeText, MainContainer, MainTextContainer, NextButton, NextContainer, SmallText, TitleContainer } from '../components/styles';
const SplashScreen = ({navigation}) => {
    const nextView = () => {
        navigation.navigate("LoginScreen");
    }
    return (
        <MainContainer>
            <TitleContainer>
                <AppNameText>JobSpot</AppNameText>
            </TitleContainer>
            <ImageContainer>
                <Image source={require('./../assets/images/Splash.png')} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
            </ImageContainer>
            <MainTextContainer>
                <LargeText>
                    여러분들, {"\n"}일자리 구하기{"\n"}
                    <Text style={{ color: '#FCA34D' }}>
                        힘드셨죠?
                    </Text>
                </LargeText>
                <SmallText style = {{margin : 4}}>
                    여러분들을 위한 일자리와 정보를 맞춤 제공해드립니다.
                </SmallText>
            </MainTextContainer>
            <NextContainer>
                <NextButton onPress={nextView}>
                    <Image source={require('./../assets/images/NextButton.png')} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
                </NextButton>
            </NextContainer>
        </MainContainer>
    );
};

export default SplashScreen;