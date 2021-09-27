import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SingUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text> SingUpScreen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
