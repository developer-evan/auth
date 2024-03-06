import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigation = useNavigation();

  const registerUser = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://fitness-b9e6c.firebaseapp.com', 
      });
      await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
        firstName,
        lastName,
        email,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      });
      alert('Email verification sent');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Here</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
          style={styles.input}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
          style={styles.input}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />        
      </View>
      <TouchableOpacity onPress={registerUser} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.registerText}> Already have an account? <Text
        style={{
          color: '#f58442',
          fontSize: 16,
          fontWeight: 'bold',
        }}
        >Login</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 60,
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
    backgroundColor:'#E1E1E1',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
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
