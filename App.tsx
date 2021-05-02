import React from 'react';
import CatsCafe from './components/CatsCafe';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CatScreen from './components/CatScreen';

export type RootStackParamList = {
  CatsCafe: undefined;
  Cat: undefined;
  CatScreen: { name: string };
};

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myBackgroundColor: string;
      dialogueColor: string;
    }
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    myBackgroundColor: '#00796B',
    dialogueColor: '#2c2c2cAA',
  },
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="CatsCafe" component={CatsCafe} />
          <Stack.Screen name="CatScreen" component={CatScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
