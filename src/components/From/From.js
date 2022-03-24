import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function From() {
  const [values, setValues] = useState({});

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newValue = { ...value };
    newValue[field] = value;
    setValues(newValue);

    // console.log(newValue);
  };

  const handleButton = (e) => {
    alert('from submitted');
    setValues('');

    // e.target.value = '';

    e.preventDefault();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>From Fill Up</Text>
      <View style={styles.formStyle}>
        <TextInput style={styles.inputView} placeholder='enter your firstName' name='firstName' type='text' onBlur={handleBlur} />
        <TextInput style={styles.inputView} placeholder='enter your lastName' name='lastName' type='text' onBlur={handleBlur} />
        <TextInput style={styles.inputView} placeholder='enter your email' name='email' type='email' onBlur={handleBlur} />
        <Button color='#841584' title='Submit Form' type='submit' onPress={handleButton} />
      </View>
      <View>{users}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'tomato',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  formStyle: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: 300,
    padding: 5,
    borderWidth: 4,
    margin: 4,
    borderColor: 'green',
    fontSize: 18,
  },
});
