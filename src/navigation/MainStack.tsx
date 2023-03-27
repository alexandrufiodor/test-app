import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './TabNavigation';
import Services from '../screens/services/Services';
import Contacts from '../screens/contacts/Contacts';
import News from '../screens/news/News';

export const {Navigator, Screen, Group} = createStackNavigator();
export const MainStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name={'TabNavigation'} component={TabNavigation} />
    <Screen name={'Services'} component={Services} />
    <Screen name={'Contacts'} component={Contacts} />
    <Screen name={'News'} component={News} />
  </Navigator>
);
