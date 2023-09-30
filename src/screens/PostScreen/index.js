import React from 'react';
import places from '../../assests/data/feed';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

export default function PostScreen() {
  const route = useRoute();
  const house = places.find(place => place.id === route.params.houseId);

  return (
    <>
      <DetailedPost house={house} />
    </>
  );
}
