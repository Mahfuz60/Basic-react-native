import { View, Text, TextInput } from 'react-native';
import React from 'react';

export default function Home() {
  const handleInputChange = (text) => {
    alert(text);
  };
  return (
    <View>
      <Text style={{ color: 'red', fontSize: 30, marginVertical: 5 }}>HomePage Here</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder='Enter Your Name'
        onChangeText={(text) => handleInputChange(text)}
      />
    </View>
  );
}
