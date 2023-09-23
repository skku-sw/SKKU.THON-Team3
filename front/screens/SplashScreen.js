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
                <AppNameText>모서리</AppNameText>
            </TitleContainer>
            <ImageContainer>
                <Image source={require('./../assets/images/Splash.png')} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
            </ImageContainer>
            <MainTextContainer>
            <LargeText>
                    모두 함께,{"\n"}서로,{"\n"}
                    <Text style={{ color: '#FCA34D' }}>
                        이롭게
                    </Text>
                </LargeText>
                <SmallText style = {{margin : 4}}>
                    여러분들을 위한 일자리와 정보를 맞춤 제공해드립니다.
                </SmallText>
            </MainTextContainer>
            <NextContainer>
                <NextButton onPress={nextView}>
                    <Image source={require('./../assets/images/NextButton2.png')} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
                </NextButton>
            </NextContainer>
        </MainContainer>
    );
};

export default SplashScreen;