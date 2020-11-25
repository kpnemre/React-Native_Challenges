import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions, Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          // animation="bounceInDown"
          animation="bounceInLeft"
          duration= {3500}
          style={styles.logo}
          source={require('../assets/logo.png')}
        //   resizeMode="center"
        //   resizeMode="cover"
          resizeMode="stretch"
        />
      </View>
      {/* 
          <Button
          title='Click'
          onPress={()=>alert('voovvvv')}
          /> */}
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig"
      >
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
            <LinearGradient
            colors={['#08d4c4', '#01ab9b', '#01ab6b']} style={styles.signIn}
            >
                <Text  style={styles.textSign}>Get Started</Text>
            <Icon
            name='chevron-right'
            color='white'
            size={15}/>
            </LinearGradient>

        </TouchableOpacity>

        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  logo: {
    width: height_logo,
    height: height_logo,
  },

  title: {
    color: '#05375a',
    fontSize:30,
    fontWeight:'bold'
  },
  text: {
    color: 'grey',
    marginTop: 30,
  },
  button: {
    alignItems:'flex-end',
    marginTop:30,
  },
  signIn: {
    height: 50,
    width:140,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    
  },
  textSign: {
    color:'white',
    fontWeight:'bold',
    padding:5
    
  },
});
