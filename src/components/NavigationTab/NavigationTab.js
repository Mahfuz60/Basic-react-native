import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindPlaces from '../FindPlaces/FindPlaces';
import SharePlaces from '../SharePlaces/SharePlaces';
import Icons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Find Places'
        component={FindPlaces}
        options={{
          tabBarIcon: ({ color, size }) => <Icons name='locate-outline' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='Share Places'
        component={SharePlaces}
        options={{
          tabBarIcon: ({ color, size }) => <Icons name='navigate-outline' size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
