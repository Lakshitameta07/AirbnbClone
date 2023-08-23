import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

function SearchScreen() {
  const [input, setInput] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            console.warn(data, details);
          }}
          query={{
            key: 'AIzaSyB6nQYXkt0ug0ul8A9FAvqKKOXR2RlNHfE',
            language: 'en',
          }}
          styles={{
            textInput: styles.textinput,
          }}
          suppressDefaultStyles
          renderRow={item => <SuggestionRow item={item} />}
        />
      </View>
      <TextInput
        style={styles.textinput}
        value={input}
        placeholder="Where are you going? "
        onChangeText={setInput}
      />
    </View>
  );
}

export default SearchScreen;
