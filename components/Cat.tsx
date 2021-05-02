import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, withTheme } from 'react-native-paper';
import { CatScreenNavigationProp } from './CatsCafe';

export type Props = {
  name: string;
  catColor: string;
  theme: ReactNativePaper.Theme;
  navigation: CatScreenNavigationProp;
};

const Cat = (props: Props) => {
  const { name, catColor, theme, navigation } = props;
  const { colors } = theme;
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
      backgroundColor: catColor,
    },
  });

  return (
    <View style={styles.catContainer}>
      <View style={styles.catDialogueContainer}>
        <Avatar.Icon style={styles.avatar} size={40} icon="cat" />
        <Text style={styles.catDialogue}>
          I am {name}, and I am {isHungry ? 'hungry' : 'full'}!
        </Text>
      </View>
      <Button
        icon="fish"
        color={catColor}
        mode="contained"
        onPress={() => {
          setIsHungry(false);
          navigation.navigate('CatScreen', { name: name });
        }}
        disabled={!isHungry}
        children={isHungry ? 'Pour me some fish, please!' : 'Thank you!'}
      />
    </View>
  );
};
export default withTheme(Cat);
