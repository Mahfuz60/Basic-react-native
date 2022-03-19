import { View, Text, StyleSheet, TextInput, Button, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';

export default function List() {
  const [users, setUsers] = useState('');
  const [userList, setUserList] = useState([]);

  const handleUser = (e) => {
    // console.log(userList);
    if (users !== '') {
      // setUserList([...userList, users]);

      // used FlatList
      setUserList([...userList, { key: Math.random().toString(), value: users }]);

      alert('User added successfully!');
      setUsers('');
    } else {
       alert('Please try again! ');
    }

    e.preventDefault();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add User</Text>

      <TextInput style={styles.textInput} placeholder='please add this user' value={users} onChangeText={(text) => setUsers(text)} />
      <Button title='Add User' onPress={handleUser}></Button>

      {/* <ScrollView>
        {userList.map((user, id) => (
          <ListItem user={user} key={id} />
        ))}
      </ScrollView> */}

      {/* dynamically  data used FlatList */}

      <FlatList
        data={userList}
        renderItem={(info) => {
          return <ListItem user={info.item.value}></ListItem>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 40,
    color: 'tomato',
    fontSize: 40,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
