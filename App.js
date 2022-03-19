import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import About from './components/About/About';
import From from './components/From/From';
import Home from './components/Home/Home';
import List from './components/List/List';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ScrollView>
        <Home />
        <About />
      </ScrollView> */}
      {/* <From/> */}
      <List />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
