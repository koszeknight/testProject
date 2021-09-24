import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';

import HomeScreen from './Home';
import BookmarkScreen from './Bookmark';
import ProfileScreen from './Profile';
import DetailsScreen from './Details';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1F65ff',
        tabBarIcon: ({color}) => (
          <Icon name="notification" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profiles',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Bookmark"
      component={BookmarkScreen}
      options={{
        tabBarLabel: 'Bookmark',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => <Icon name="find" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="menuunfold"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: 'Details',
        headerLeft: () => (
          <Icon.Button
            name="menuunfold"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DetailsStack.Navigator>
);
