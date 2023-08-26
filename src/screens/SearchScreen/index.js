import {View} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

function SearchScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          console.warn(data, details);
          navigation.navigate('GuestPage');
        }}
        styles={{
          textInput: styles.textinput,
        }}
        query={{
          key: 'AIzaSyBV0HgRuk6s6Gx_KLKOGOCFVUYKnPEteZg',
          language: 'en',
          type: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
}

export default SearchScreen;
