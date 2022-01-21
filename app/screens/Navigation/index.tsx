import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Kitchen from '../Kitchen';
import TabIcon from './TabIcon';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Кухня"
          component={Kitchen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon emoji="🍲" isActive={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Склад"
          component={Kitchen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon emoji="🎒" isActive={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
