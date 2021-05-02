import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, withTheme } from 'react-native-paper';

export type Props = {
  route: {
    params: {
      name: string;
    };
  };
  catColor: string;
  theme: ReactNativePaper.Theme;
};

const CatScreen = (props: Props) => {
  const { colors } = props.theme;
  const styles = StyleSheet.create({
    catContainer: {
      margin: 12,
    },
    catDialogueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      padding: 10,
      borderRadius: 8,
      backgroundColor: colors.dialogueColor,
    },
    catDialogue: {
      color: 'white',
    },
    avatar: {
      marginRight: 4,
      backgroundColor: props.catColor,
    },
  });

  return (
    <View style={styles.catContainer}>
      <View style={styles.catDialogueContainer}>
        <Avatar.Icon style={styles.avatar} size={40} icon="cat" />
        <Text style={styles.catDialogue}>{props.route.params.name}: Hey! Thank you for feeding me!</Text>
      </View>
    </View>
  );
};
export default withTheme(CatScreen);
