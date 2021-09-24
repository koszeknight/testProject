import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrolView,
  View,
  Text,
  SatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

//import Home from './src/Home';
import MainTabScreen from './src/MainTabScreen';
import BooksmarkScreen from './src/Bookmark';
import SettingsScreen from './src/Settings';
import DeatailsScreen from './src/Details';
import {DrawerContent} from './src/DrawerContent';

// const Home = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details Screen"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// };

// const DetailsScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to details Screeen Again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go to open Home Page "
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// };

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTinStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen
//       name="Home"
//       component={Home}
//       options={{
//         title: 'Overview',
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={30}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//     {/* <Stack.Screen name="Details" component={DetailsScren} /> */}
//   </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({navigation}) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTinStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <DetailsStack.Screen name="Details" component={DeatailsScreen} />
//     {/* <Stack.Screen name="Details" component={DetailsScren} /> */}
//   </DetailsStack.Navigator>
// );

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home"> */}
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BooksmarkScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="Details" component={DeatailsScreen} />
      </Drawer.Navigator>

      {/*  */}
    </NavigationContainer>
  );
};
export default App;
