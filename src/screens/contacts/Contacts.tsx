import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Title from '../../components/Title';

const Contacts = ({navigation}: any) => {
  return (
    <Container>
      <Title title={'News Screen'} />
      <Button
        title={'Go to Home'}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title={'Go to News'}
        onPress={() => navigation.navigate('News')}
      />
      <Button title={'Back'} onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default Contacts;
