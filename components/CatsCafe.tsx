import React from 'react';
import { View, Text } from 'react-native';
import Cat from './Cat';

const CatsCafe = () => {
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 42, alignSelf: 'center' }}>CATS CAFE</Text>
      <Cat name="Maru" catColor="gray" />
      <Cat name="Jellylorum" catColor="black" />
      <Cat name="Spot" catColor="white" />
    </View>
  );
};

export default CatsCafe;
