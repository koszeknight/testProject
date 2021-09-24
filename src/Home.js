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

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
// };

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Details" component={DetailsScreen} /> */}
      </Drawer.Navigator>

      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTinStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScren} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Home;
