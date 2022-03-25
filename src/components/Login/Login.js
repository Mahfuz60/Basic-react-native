import { Text, View, Button } from 'react-native';
import React from 'react';

export default function Login(props) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title='LOGIN'
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
}

