import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SingInScreen from './SingInScreen';
import SingUpScreen from './SingUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SingInScreen" component={SingInScreen} />
    <RootStack.Screen name="SingUpScreen" component={SingUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
