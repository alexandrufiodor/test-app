import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/home/Home';
import About from '../screens/about/About';
import Settings from '../screens/settings/Settings';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name={'home'} color={color} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name={'infocirlceo'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name={'setting'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const TabBarIcon = ({name, color}: {name: string; color: string}) => {
  return <Icon name={name} size={24} color={color} />;
};
