import React from 'React';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProfileScreen = () => {
  return (
    <view style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </view>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
