import React, { useEffect, useState  } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text, Alert,TouchableOpacity } from 'react-native';
import { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';

export default function App() {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const handleMarkerClick = () => {
        setIsDrawerVisible(true);
      };
      
    
   
      
   geolocation=async()=>{
    try{
        const response = await Location.requestForegroundPermissionsAsync();
        console.log("response1"+response);
        const location = await Location.getCurrentPositionAsync();
        console.log(location);
        const {coords}=location;
        console.log(coords.latitude,coords.longitude);
        setInitialRegion({
            latitude: 37.715133,
            longitude: 127.269311,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
    }catch(error){

    }
   }
   useEffect(() => {
    geolocation(); // Call the geolocation function when the component is mounted
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
                    onPress={handleMarkerClick}
                    pinColor="#FF0000" // Set the marker color to red
                    title="서울 강남구 논현동 1-1"
                    description="현재 위치"
                 
                />
              
              	<Marker
            coordinate={{
            latitude: 37.4226711,
            longitude: 127.0849872,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            
          }}
          onPress={handleMarkerClick}
            pinColor="#2D63E2"
            title="유한 주식회사"
            description="외노자 두 분 모심"
         
          />
            </MapView>
            <Modal
        isVisible={isDrawerVisible}
        onBackdropPress={() => setIsDrawerVisible(false)}
        style={styles.drawer}
      >
        <View style={styles.drawerContent}>
          <Text>Drawer Content</Text>
          
          {/* Add your buttons or content here */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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