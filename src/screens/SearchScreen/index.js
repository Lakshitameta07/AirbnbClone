import {View} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import MapboxPlacesAutocomplete from 'react-native-mapbox-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const placeskey ='pk.eyJ1IjoibGFrc2hpdDA3IiwiYSI6ImNsbTRhM3M3bzE3bGozanM2MG9ia3hnZGkifQ.8WHVlwg3NR8oDP0bd1jjZQ'

function SearchScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          console.warn(data, details);
          navigation.navigate('GuestPage');
        }}
        query={{
          key: 'AIzaSyBV0HgRuk6s6Gx_KLKOGOCFVUYKnPEteZg',
          language: 'en',
          type: '(cities)',
        }}
        styles={{
          textInput: styles.textinput,
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      /> */}
      <MapboxPlacesAutocomplete
        id="Where are you going?"
        placeholder="Where are you going?"
        accessToken={placeskey}
        onPlaceSelect={(data, details = null) => {
          console.warn(data, details);
          navigation.navigate('GuestPage');
        }}
        onClearInput={({ id }) => {
          id === "Where are you going?" && null;
        }}
        countryId=""
        styles={{
          textInput: styles.textinput,
        }}
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
}

export default SearchScreen;
