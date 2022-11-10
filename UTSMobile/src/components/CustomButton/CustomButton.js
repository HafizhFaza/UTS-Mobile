import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type, bgColor, fgColor, conWidth}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
        conWidth ? {width: conWidth} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
          conWidth ? {width: conWidth} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#EB6440',
  },

  container_TERTIARY: {
    backgroundColor: '#404258',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  text_TERTIARY: {
    color: 'grey',
  },
});

export default CustomButton;
