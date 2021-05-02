import React from 'react';
import { StyleSheet, View } from 'react-native';
import CatsCafe from './components/CatsCafe';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <CatsCafe />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.myBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
