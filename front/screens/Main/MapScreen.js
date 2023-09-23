import React, { useEffect, useState  } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text, Alert,TouchableOpacity } from 'react-native';
import { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);  
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const handleMarkerClick = (item) => {
      setSelectedItem(item);
        setIsDrawerVisible(true);
      };
  const navigation=useNavigation();      
    
      useEffect(() => {
        axios.get('http://10.0.2.2:3000/map/mark', {})
            .then(response => {
                console.log(response.data);
                const processedData = response.data.map(item => ({
                
                   coordinate_id:item.coordinate_id,
                   post_id:item.post_id,
                   address:item.address,
                   latitude:item.latitude,
                   longitude:item.longitude,
                   title:item.title,
                   content:item.content,
                   tag:item.tag,
                   period:item.period,
                   num_recruit:item.num_recruit,
                   num_applicants:item.num_applicants,
                   working_hours:item.working_hours,
                   salary:item.salary,

                  }));
                  setData(processedData);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []); 
      
  
   
   
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
                        latitude: 37.5160790812474,
                        longitude: 127.020346472276,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}	 >
                       <Marker
                    coordinate={{
                        latitude: 37.5160790812474,
                        longitude: 127.020346472276,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    
                    pinColor="#FF0000" // Set the marker color to red
                    title="서울 강남구 논현동 1-1"
                    description="현재 위치"
                 
                />
                       {data.map((item) => (
                <Marker
            coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            
          }}
          onPress={() => handleMarkerClick(item)}
            pinColor="#2D63E2"
            title={item.title}
            description={item.content}
         
          />
          ))}
            </MapView>
            <Modal
        isVisible={isDrawerVisible}
        onBackdropPress={() => setIsDrawerVisible(false)}
        style={styles.drawer}
      >
        <View style={styles.drawerContent}>
        {selectedItem && (
            <>
              <Text style={styles.tag}>Tag: {selectedItem.tag}</Text>
              <Text>{selectedItem.address}</Text>
              <Text>{selectedItem.num_applicants}/{selectedItem.num_recruit}</Text>
              <Text>{selectedItem.period}</Text>
              <Text>{selectedItem.salary}</Text>
              <Text>{selectedItem.working_hours}</Text>
              <TouchableOpacity
  style={styles.applyButton}
  onPress={() => {
    navigation.navigate('DetailScreen', { itemId: selectedItem.post_id });
  }}
>
  <Text style={styles.applyButtonText}>Apply</Text>
</TouchableOpacity>

              {/* Add more details or components to display */}
            </>
          )}
          
          {/* Add your buttons or content here */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  applyButton: {
    backgroundColor: 'orange', // Change to your desired color
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    color: 'white', // Change to your desired text color
    fontWeight: 'bold', // Optionally set font weight
  },
  tag:{
    fontWeight:'bold',
    fontSize:16,
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  drawer: {
    position: 'absolute',
    bottom: 0, // Adjust this value to control how much the drawer covers the map
    left: 0,
    right: 0,
    backgroundColor: 'white', // Set the background color to make it opaque
    height: 200, // Adjust the height of the drawer
    borderTopLeftRadius: 20, // Add border radius for a nicer look
    borderTopRightRadius: 20, // Add border radius for a nicer look
  },
  drawerContent: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
});  