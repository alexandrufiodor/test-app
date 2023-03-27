import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Title from '../../components/Title';

const Services = ({navigation}: any) => {
  return (
    <Container>
      <Title title={'Services Screen'} />
      <Button
        title={'Go to Home'}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title={'Go to News'}
        onPress={() => navigation.navigate('News')}
      />
      <Button
        title={'Go to Contacts'}
        onPress={() => navigation.navigate('Contacts')}
      />
      <Button title={'Back'} onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default Services;
