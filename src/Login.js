import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // navigation.navigate('Dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>

      {/* <Text 
      style ={
        {
          fontSize: 30,
          color: '#00e4d0',
          marginBottom: 40,
          // marginTop:5,
          textAlign: 'center',
          
          // fontStyle: 'italic',
          // fontFamily: 'sans-serif',
        }
      }
      
      >Shiriki</Text> */}
      {/* <Image style={styles.logo} source={require('../assets/logo.png')} /> */}
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        
      >
        <Text style={{
          color: '#000',
          textAlign: 'right',
          marginBottom: 20,
          fontSize: 16,
          fontWeight: 'bold',
        
        }}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => loginUser(email, password)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>Don't have an account? <Text
        style={{
          color: '#f58442',
          fontSize: 16,
          fontWeight: 'bold',
        }}
        >Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,

  },
  text: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 18,
    // borderWidth: 1,
    // borderColor: 'gray',
    backgroundColor:'#E1E1E1',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#f58442',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
