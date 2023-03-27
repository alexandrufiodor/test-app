import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Title from '../../components/Title';

const Home = ({navigation}: any) => {
  return (
    <Container>
      <Title title={'Home Screen'} />
      <Button
        title={'Go to Services'}
        onPress={() => navigation.navigate('Services')}
      />
    </Container>
  );
};

export default Home;
