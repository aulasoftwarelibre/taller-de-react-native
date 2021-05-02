import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-paper';
import Cat from './Cat';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

export type CatScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CatScreen'>;

export type Props = {
  theme: ReactNativePaper.Theme;
  navigation: CatScreenNavigationProp;
};

const CatsCafe = (props: Props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.theme.colors.myBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 42, alignSelf: 'center' }}>CATS CAFE</Text>
      <Cat name="Maru" catColor="gray" navigation={props.navigation} />
      <Cat name="Jellylorum" catColor="black" navigation={props.navigation} />
      <Cat name="Spot" catColor="white" navigation={props.navigation} />
    </View>
  );
};

export default withTheme(CatsCafe);
