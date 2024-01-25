import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';  
import { listPosts } from '../../graphql/queries';
import { generateClient } from 'aws-amplify/api';
import House from '../../components/Houses';

function SearchResultScreen() {
  const [posts, setPosts] = useState([]);

  const client = generateClient();


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResults = await client.graphql({ query: listPosts });
        console.log(postResults);
        setPosts(postResults.data.listPosts.items);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <House house={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default SearchResultScreen;
