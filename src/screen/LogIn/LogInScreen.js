import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/CalcLogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const LogInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  const user = {
    username: 'test123',
    password: '123456',
  };

  const handleLogIn = e => {
    e.preventDefault();

    if (username === user.username && password === user.password) {
      console.warn('Login Berhasil!');
      navigation.navigate('Home');
    } else {
      console.warn('Username atau Password Salah!');
    }
  };

  const handleForgotPass = () => {
    console.warn('Ini Lupa Password!');
  };

  const handleLogGoogle = () => {
    console.warn('Ini Log In Via Facebook!');
  };

  const handleLogFacebook = () => {
    console.warn('Ini Log In Via Facebook!');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <Text style={styles.title}>KalDas</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUserName}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassWord}
        secureTextEntry={true}
      />
      <CustomButton onPress={handleLogIn} text="Log In" type="PRIMARY" />
      <CustomButton
        onPress={handleForgotPass}
        text="Lupas Password?"
        type="TERTIARY"
      />
      <CustomButton
        text="Masuk Dengan Google"
        onPress={handleLogGoogle}
        bgColor="#4285F4"
        fgColor="white"
        conWidth="75%"
      />
      <CustomButton
        text="Masuk Dengan Facebook"
        onPress={handleLogFacebook}
        bgColor="#4267B2"
        fgColor="white"
        conWidth="75%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#404258',
    height: '100%',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 50,
  },
});

export default LogInScreen;
