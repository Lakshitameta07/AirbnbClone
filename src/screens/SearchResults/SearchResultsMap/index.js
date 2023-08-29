import {View, Text, useWindowDimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MapView from 'react-native-maps';
import places from '../../../assests/data/feed';
import CustomMarker from '../../../components/CustomMarker';
import PostCarouselItem from '../../../components/PostCarouselItem';
import {FlatList} from 'react-native-gesture-handler';

function SearchResultsMap() {
  const [selectedId, setSelectedId] = useState();
  const width = useWindowDimensions().width;

  const flatList = useRef();
  const map=useRef()
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if(viewableItems.length > 0)
    {
      const selectedPlace = viewableItems[0].item;
      setSelectedId(selectedPlace.id)
    }
  })

  useEffect(() => {
    if (!selectedId || !flatList) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedId);
    flatList.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region ={
      latitude : selectedPlace.coordinate.latitude,
      longitude : selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8
    }
    map.current.animateToRegion(region)
  }, [selectedId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
      ref={map}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            isSelected={place.id === selectedId}
            price={place.newPrice}
            onPress={() => setSelectedId(place.id)}
            key={place.id}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatList}
          data={places}
          renderItem={({item}) => <PostCarouselItem house={item} />}
          horizontal
          showsVerticalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment="center"
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
}

export default SearchResultsMap;
