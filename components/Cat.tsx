import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, withTheme } from 'react-native-paper';

export type Props = {
  name: string;
  catColor: string;
  theme: ReactNativePaper.Theme;
};

const Cat = (props: Props) => {
  const { colors } = props.theme;
  const [isHungry, setIsHungry] = useState(true);
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
        <Text style={styles.catDialogue}>
          I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
        </Text>
      </View>
      <Button
        icon="fish"
        color={props.catColor}
        mode="contained"
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        children={isHungry ? 'Pour me some fish, please!' : 'Thank you!'}
      />
    </View>
  );
};
export default withTheme(Cat);
