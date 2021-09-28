import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';

const SingUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    NIC: '',
    Phone_No: '',
    Confirm_password: '',
    check_textInputChange: false,
    Check_textInputChangeNic: false,
    Check_textInputChangePhoneNo: '',
    secureTextEntry: true,
    Confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const textInputChangeNic = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        NIC: val,
        Check_textInputChangeNic: true,
      });
    } else {
      setData({
        ...data,
        NIC: val,
        Check_textInputChangeNic: false,
      });
    }
  };

  const textInputChangePhoneNo = Phone_Val => {
    if (isNaN(Phone_Val)) {
      alert('It is not a Number');
    } else if (Phone_Val.length !== 0) {
      setData({
        ...data,
        Phone_No: Phone_Val,
        Check_textInputChangePhoneNo: true,
      });
    } else {
      setData({
        ...data,
        Phone_No: Phone_Val,
        Check_textInputChangePhoneNo: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      Confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateSecureConfirm_TextEntry = () => {
    setData({
      ...data,
      Confirm_secureTextEntry: !data.Confirm_secureTextEntry,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Emails</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={18} />
            <TextInput
              placeholder="Your Email"
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={18} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, {marginTop: 25}]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={18} />
            <TextInput
              placeholder="Your password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={18} />
              ) : (
                <Feather name="eye" color="grey" size={18} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, {marginTop: 25}]}>
            Comfirm Password
          </Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={18} />
            <TextInput
              placeholder="Confirm password"
              secureTextEntry={data.Confirm_secureTextEntry ? true : false}
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureConfirm_TextEntry}>
              {data.Confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={18} />
              ) : (
                <Feather name="eye" color="grey" size={18} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, {marginTop: 25}]}>NIC No</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={18} />
            <TextInput
              placeholder="Your NIC No"
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={val => textInputChangeNic(val)}
            />
            {data.Check_textInputChangeNic ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={18} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, {marginTop: 25}]}>Phone No</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={18} />
            <TextInput
              placeholder="Your Phone Number"
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={Phone_Val => textInputChangePhoneNo(Phone_Val)}
            />
            {data.Check_textInputChangePhoneNo ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={18} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, {marginTop: 25}]}>Address</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={18} />
            <TextInput
              placeholder="Your Residential Address "
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={18} />
              </Animatable.View>
            ) : null}
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => navigation.navigate('HomeDrawer')}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={[styles.textSing, {color: '#fff'}]}>Sing Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              onPress={() => navigation.goBack()}>
              <Text style={[styles.textSing, {color: '#009387'}]}>
                Back to Sing In
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

export default SingUpScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 15,
  },
  title: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    margin: 5,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  TextInput: {
    flex: 1,
    marginTop: Platform.os === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  singIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSing: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
