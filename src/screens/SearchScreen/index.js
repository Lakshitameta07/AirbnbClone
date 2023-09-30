import {View} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import MapboxPlacesAutocomplete from 'react-native-mapbox-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const placeskey =
  'pk.eyJ1IjoibGFrc2hpdDA3IiwiYSI6ImNsbTRhM3M3bzE3bGozanM2MG9ia3hnZGkifQ.8WHVlwg3NR8oDP0bd1jjZQ';

function SearchScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MapboxPlacesAutocomplete
        id="Where are you going?"
        placeholder="Where are you going?"
        accessToken={placeskey}
        onPlaceSelect={() => {
          navigation.navigate('GuestPage');
        }}
        onClearInput={({id}) => {
          id === 'Where are you going?' && null;
        }}
        countryId=""
        inputStyle={styles.textinput}
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
}

export default SearchScreen;
