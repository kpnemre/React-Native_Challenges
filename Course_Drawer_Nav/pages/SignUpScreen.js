import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Value} from 'react-native-reanimated';

const SignInScreen = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirm_password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const check_textInputChange = (value) => {
    setData({
      ...data,
      email: value,
      check_textInputChange: true,
    });
    console.log(value);
  };
  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };
  const   handleConfirmPasswordChange  = (value) => {
    setData({
      ...data,
      confirm_password: value,
    });
  };
  const updateSecureTextEntry = (value) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = (value) => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>E-mail</Text>

        <View style={styles.action}>
          <Icon name="user-o" color="grey" size={20} style={{marginTop: 12}} />
          <TextInput
            placeholder="Enter Your E-mail"
            style={[styles.TextInput]}
            onChangeText={(value) => check_textInputChange(value)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceInUp" duration={1000}>
              <FeatherIcon
                name="check-circle"
                color="green"
                size={20}
                style={{marginTop: 12}}
              />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, {marginTop: 25}]}>Password</Text>
        <View style={styles.action}>
          <Icon name="lock" color="grey" size={25} style={{marginTop: 12}} />
          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            // style={styles.TextInput}
            style={styles.TextInput}
            onChangeText={(value) => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={(value) => updateSecureTextEntry(value)}>
            {data.secureTextEntry ? (
              <FeatherIcon
                name="eye-off"
                color="green"
                size={20}
                style={{marginTop: 12}}
              />
            ) : (
              <FeatherIcon
                name="eye"
                color="green"
                size={20}
                style={{marginTop: 12}}
              />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, {marginTop: 25}]}>
          {' '}
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Icon name="lock" color="grey" size={25} style={{marginTop: 12}} />
          <TextInput
            placeholder="confirm Your Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            // style={styles.TextInput}
            style={styles.TextInput}
            onChangeText={(value) => handleConfirmPasswordChange(value)}
          />
          <TouchableOpacity
            onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <FeatherIcon
                name="eye-off"
                color="green"
                size={20}
                style={{marginTop: 12}}
              />
            ) : (
              <FeatherIcon
                name="eye"
                color="green"
                size={20}
                style={{marginTop: 12}}
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.signIn,
            {
              borderWidth: 1,
              backgroundColor: '#009387',
            },
          ]}>
          <Text style={[styles.textSign, {color: '#FFF'}]}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            styles.signIn,
            {
              borderWidth: 1,
              backgroundColor: '#fff',
            },
          ]}>
          <Text style={[styles.textSign, {color: '#009387'}]}>Sign Up</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 1,
    // justifyContent:'space-between'
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,

    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
