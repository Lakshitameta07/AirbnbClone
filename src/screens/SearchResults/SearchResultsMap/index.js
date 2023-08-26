import {View, Text} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

function SearchResultsMap() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 24.57127,
          longitude: 73.691544,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 24.57127,
            longitude: 73.691544}}
        />
      </MapView>
    </View>
  );
}

export default SearchResultsMap;
