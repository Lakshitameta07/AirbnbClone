import {View, Text} from 'react-native';
import React,{useState} from 'react';
import MapView from 'react-native-maps';
import places from '../../../assests/data/feed'
import CustomMarker from '../../../components/CustomMarker';
import PostCarouselItem from '../../../components/PostCarouselItem'

function SearchResultsMap() {

  const [selectedId,setSelectedId] = useState()

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {places.map(place => 
          <CustomMarker 
          coordinate={place.coordinate}
          isSelected = {place.id === selectedId}
          price = {place.newPrice}
          onPress={()=> setSelectedId(place.id)}
          />)}
      </MapView>
      <View style={{position:'absolute',bottom:50}}>
        <PostCarouselItem house = {places[0]}/>
      </View>
    </View>
  );
}

export default SearchResultsMap;
