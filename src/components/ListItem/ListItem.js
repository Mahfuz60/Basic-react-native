import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ListItem({ user }) {
  return (
    <View style={styles.userView}>
      <Text style={{ fontSize: 30 }}>{user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userView: {
    backgroundColor: '#eee',
    width: '100%',
    padding: 10,

    margin: 10,
  },
});
