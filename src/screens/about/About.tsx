import React from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Container from '../../components/Container';

const About = ({navigation}: any) => {
  return (
    <Container>
      <Title title={'About Screen'} />
      <Button
        title={'Go to News'}
        onPress={() => navigation.navigate('Contacts')}
      />
    </Container>
  );
};

export default About;
