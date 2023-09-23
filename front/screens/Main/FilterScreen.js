import React, { useState, useEffect } from 'react';
import { Octicons, Ionicons, Fontisto, FontAwesome} from '@expo/vector-icons';

import { Image, View,FlatList,ScrollView, Text } from 'react-native';
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
    SearchContainer,
    SearchTextInput,
    SearchImage
} from './../../components/styles';
import { UserContext } from './../../UserContext';
const FilterScreen = ({ route, navigation }) => {
  const userValue = React.useContext(UserContext);
  const [data, setData] = useState([]);
  const filterValue = route.params.filter; // Filter 값이 항상 존재한다고 가정
  const [bookmarked, setBookmarked] = useState({});
  const [searchText, setSearchText] = useState('');
  const toggleBookmark = (id) => {
      setBookmarked(prevState => ({
          ...prevState,
          [id]: !prevState[id]
      }));
  }
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

  
  const handleImagePress = () => {
    setData([]);
    console.log(searchText);
    axios.get(`http://10.0.2.2:3000/posts/search/${searchText}?nickname=${userValue.user}`, {
    })
    .then(response => {
        console.log(response.data);
        const processedData = response.data.map((item) => ({
          id: String(item.id),
          agency: item.agency,
          title: item.title,
          content: item.content,
          tags: item.tag.split(',').map((tag) => tag.trim()),
          period: item.period,
          num_recruit: item.num_recruit,
          region: item.region,
          num_applicants: item.num_applicants,
          icon: iconImages[Math.floor(Math.random() * iconImages.length)],
        }));
        setData(processedData);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
    }
  useEffect(() => {
    // Filter 값이 항상 존재한다고 가정하므로 조건 체크 없이 진행
    axios.get(`http://10.0.2.2:3000/posts/tag/${filterValue}`, {})
      .then((response) => {
        console.log(response.data);
        const processedData = response.data.map((item) => ({
          id: String(item.id),
          agency: item.agency,
          title: item.title,
          content: item.content,
          tags: item.tag.split(',').map((tag) => tag.trim()),
          period: item.period,
          num_recruit: item.num_recruit,
          region: item.region,
          num_applicants: item.num_applicants,
          icon: iconImages[Math.floor(Math.random() * iconImages.length)],
        }));
        setData(processedData);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, [filterValue]); // filterValue가 변경될 때만 실행

  return (
    <ScrollView>
            <ScreenContainer>
            <SearchContainer>
                
                <SearchTextInput
                    value={searchText}
                    onChangeText={setSearchText}  // 사용자 입력값을 searchText에 저장합니다.
                />
                <SearchImage onPress={handleImagePress}>
                <Image 
                    source={require('./../../assets/images/search.png')} 
                    style={{ width: 30, height: 30, borderRadius: 20 }} // 스타일을 적용하여 이미지 크기와 모양을 조절합니다.
                />
            </SearchImage>
            </SearchContainer>
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
                                            size={25} 
                                            color="black"
                                            onPress={() => toggleBookmark(item.id)}
                                        />
                                        {bookmarked[item.id] && (
                                            <FontAwesome 
                                                name="bookmark" 
                                                size={25} 
                                                color="yellow"
                                                style={{ position: 'absolute', top: 0, left: 0 }}
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

export default FilterScreen;
