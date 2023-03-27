import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

type PropsType = {
  children: ReactNode;
};

const Container = ({children}: PropsType) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
