import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const CustomBtn = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : props.color},
        styles.button,
        {...props.style},
      ]}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#00f'}}
      activeOpacity={0.5}
      underlayColor="#dddddd"
      >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 60,
    alignItems: 'center',
    marginBottom:20,
  },
});

export default CustomBtn;
