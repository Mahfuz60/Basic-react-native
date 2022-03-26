import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function Login(props) {
  const [authState, setAuthState] = useState({
    mode: 'login',
    inputs: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleView = () => {
    setAuthState({
      ...authState,
      mode: authState.mode === 'login' ? 'SignUp' : 'LogIn',
    });
  };
  return (
    <View style={styles.loginView}>
      <TouchableOpacity 
      
      style={{ ...styles.btnContainer, width: '90%', backgroundColor: 'blue' }}
      onPress={() => handleView()} 
      >
        <Text 
        style={styles.btnStyle}
        >
          {authState.mode === 'login' ? 'Switch to SignUp' : 'Switch to LogIn'}
          </Text>
      </TouchableOpacity>
      <TextInput 
      placeholder='Your Email' 
      type='text' 
      value={authState.inputs.email} 
      style={styles.textInput} 
      />
      <TextInput 
      placeholder='Your password' 
      type='password' 
      value={authState.inputs.password} 
      style={styles.textInput} 
      />
      <TextInput 
      placeholder='Confirm Your password' 
      type='password' 
      value={authState.inputs.confirmPassword} 
      style={styles.textInput} 
      />

      <TouchableOpacity 
      style={styles.btnContainer}
      >
        <Text 
        style={styles.btnStyle}
        >
          {authState.mode === 'login' ? 'LogIn' : 'SignUp'}
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 25,
    color: 'tomato',
  },

  textInput: {
    width: '90%',
    padding: 5,
    marginTop: 10,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: 20,
  },

  btnStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffff',
  },
  btnContainer: {
    flexDirection: 'row',
    width: 180,
    backgroundColor: 'green',
    paddingVertical: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
