import React, {useState,useEffect} from 'react';
import { Octicons, Ionicons, Fontisto, FontAwesome} from '@expo/vector-icons';
import { Text, FlatList,View, ScrollView } from 'react-native';
import axios from 'axios';
import {
    ScrollContainer,
    ScreenContainer, 
    HomeFullNameContainer,
    HomeFullNameText,
    ProfileImage,
    FilterContainer,
    HomeText,
    FilterWrap,
    LeftBox,
    RightContainer,
    TopRightBox,
    BottomRightBox,
    NumberText,
    FilterText,
    FilterImage,
    TeamContainer,
    TeamWrap,
    TeamTitleContainer,
    TeamTitleImage,
    TeamTitleTextContainer,
    Colors,
    TopText,
    BottomText,
    NumberBox,
    CurrentPerson,
    RangePerson,
    TagContainer,
    TagText,
    TagBox,
    ApplyButton,
} from './../../components/styles';
import { UserContext } from './../../UserContext';
const tagMapping = {
    senior: '노약자',
    foreign: '외국인',
    single_mom: '미혼모',
    north: '탈북민',
  };
  const iconImages = [
    require('./../../assets/images/icon1.png'),
    require('./../../assets/images/icon1.png'),
    require('./../../assets/images/icon3.png'),
    require('./../../assets/images/icon4.png'),
    require('./../../assets/images/icon4.png'),
  ];
const {brand, darkLight, primary} = Colors;

const HomeScreen = ({navigation}) => {
    const userValue = React.useContext(UserContext);
    const [data, setData] = useState([]);
    const [bookmarked, setBookmarked] = useState({});
    const toggleBookmark = (id) => {
        setBookmarked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }
    useEffect(() => {
        console.log(userValue.user);
        axios.get(`http://10.0.2.2:3000/posts/?nickname=${userValue.user}`, {})
            .then(response => {
                console.log(response.data);
                const processedData = response.data.map(item => ({
                    id: String(item.id),
                    agency: item.agency,
                    title: item.title,
                    content: item.content,
                    tags: item.tag.split(',').map((tag) => tag.trim()), // 태그를 쉼표로 분리하여 배열로 저장
                    period: item.period,
                    num_recruit: item.num_recruit,
                    region: item.region,
                    num_applicants: item.num_applicants,
                    icon: iconImages[Math.floor(Math.random() * iconImages.length)],
                
                  }));
                  const newBookmarked = {};
                    response.data.forEach((item) => {
                        newBookmarked[String(item.id)] = item.isBookmarked || false;
                    });

                    setBookmarked(newBookmarked);
                  setData(processedData);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []); 

    return (
        <ScrollView>
            <ScreenContainer>
                <HomeFullNameContainer>
                    <HomeFullNameText>안녕하세요{'\n'}김태훈님.</HomeFullNameText>
                    <ProfileImage resizeMode="cover" source={require('./../../assets/images/skku.jpg')}></ProfileImage>
                </HomeFullNameContainer>
                <FilterContainer>
                    <HomeText>여러분에게 특화된 일자리를 찾아보아요</HomeText>
                    <FilterWrap>
                        <RightContainer>
                            <TopRightBox style = {{backgroundColor : "#FFC0CB"}} onPress={() => {
                            //const filteredTeams = filterTeamsByTag('Hobby');
                            navigation.navigate('FilterScreen', {filter : 'senior'})
                        }}>
                                <NumberText>66.8K</NumberText>
                                <FilterText>노인</FilterText>
                            </TopRightBox>
                            <BottomRightBox style = {{backgroundColor : "#E6E6FA"}} onPress={() => {
                            navigation.navigate('FilterScreen', {filter : 'foriegn'})
                        }}>
                                <NumberText>38.9K</NumberText>
                                <FilterText>외국인</FilterText>
                            </BottomRightBox>
                        </RightContainer>
                        <RightContainer style = {{ marginLeft : 5}}>
                            <TopRightBox style = {{backgroundColor : "#FFFFE0"}} onPress={() => {
                            //const filteredTeams = filterTeamsByTag('Hobby');
                            navigation.navigate('FilterScreen', {filter : 'north'})
                        }}>
                                <NumberText>66.8K</NumberText>
                                <FilterText>새터민</FilterText>
                            </TopRightBox>
                            <BottomRightBox style = {{backgroundColor : "#F5DEB3"}} onPress={() => {
                            navigation.navigate('FilterScreen', {filter : 'single_mom'})
                        }}>
                                <NumberText>38.9K</NumberText>
                                <FilterText>미혼모</FilterText>
                            </BottomRightBox>
                        </RightContainer>
                    </FilterWrap>
                </FilterContainer>



                <TeamContainer>
                    
                    <FlatList
                        scrollEnabled= {false}
                        style={{ width: '100%' }}
                        data={data}
                        renderItem={({item}) => (
                            <TeamWrap>
                                <TeamTitleContainer>
                                    <TeamTitleImage resizeMode="contain" source={item.icon} />
                                    <TeamTitleTextContainer>
                                        <TopText>{item.title}</TopText>
                                        <BottomText>{item.agency}</BottomText>
                                    </TeamTitleTextContainer>
                                    <View style={{ position: 'relative' }}>
                                        <FontAwesome 
                                            name="bookmark-o" 
                                            size={25 } 
                        
                                            color="black"
                                            onPress={() => toggleBookmark(item.id)}
                                        />
                                        {bookmarked[item.id] && (
                                            
                                            <FontAwesome 
                                                name="bookmark" 
                                                size={25} 
                                                color="#FCA34D"
                                                style={{ position: 'absolute', top: 0, right: 0 }}
                                                onPress={() => toggleBookmark(item.id)}
                                            />
                                        )}
                                    </View>

                                </TeamTitleContainer>
                                <NumberBox>
                                    <CurrentPerson>{item.num_applicants}명 / </CurrentPerson>
                                    <RangePerson>{item.num_recruit}명</RangePerson>
                                </NumberBox>
                                <TagContainer>
                                {item.tags.map((tag, index) => (
                                    <TagBox key={index}>
                                    <TagText>{tagMapping[tag] || tag}</TagText>
                                    </TagBox>
                                ))}
                                    <ApplyButton onPress={() => navigation.navigate('DetailScreen',{idx : item.id})}>
                                        <TagText style={{color:'white'}}>지원하기</TagText>    
                                    </ApplyButton>
                                </TagContainer>
                        </TeamWrap>
                        )}
                    keyExtractor={item => item.id}
                    />
                </TeamContainer>
            </ScreenContainer>
        </ScrollView>
    );
};

export default HomeScreen;