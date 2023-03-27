import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, onPress}: {title: string; onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: '#ADD8E6',
  },
});
