import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Title from '../../components/Title';

const Settings = ({navigation}: any) => {
  return (
    <Container>
      <Title title={'Settings Screen'} />
      <Button
        title={'Go to Services'}
        onPress={() => navigation.navigate('Services')}
      />
    </Container>
  );
};

export default Settings;
