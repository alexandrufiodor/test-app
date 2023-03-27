import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({title}: {title: string}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
