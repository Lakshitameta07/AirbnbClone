import {View} from 'react-native';
import React from 'react';
import feed from '../../assests/data/feed';
import DetailedPost from '../../components/DetailedPost';

const house = feed[0];

export default function PostScreen() {
  return (
    <>
      <DetailedPost house={house} />
    </>
  );
}
