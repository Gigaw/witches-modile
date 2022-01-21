import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import Kitchen from '../screens/Kitchen';
import Stock from '../screens/Stock';
import TabIcon from './TabIcon';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Stock'>
        <Tab.Screen
          name="Kitchen"
          component={Kitchen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon emoji="🍲" isActive={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Stock"
          component={Stock}
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
