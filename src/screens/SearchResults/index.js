import { View, FlatList } from 'react-native'
import React from 'react'
import feed from '../../assests/data/feed';
import House from '../../components/Houses';

function SearchResultScreen() {
    return (
        <View>
            <FlatList
             data={feed}
             renderItem={({item})=><House house={item}/>}
            />
        </View>
    )
}

export default SearchResultScreen;