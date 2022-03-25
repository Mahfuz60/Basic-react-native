import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import About from './src/components/About/About';
import From from './src/components/From/From';
import Home from './src/components/Home/Home';
import List from './src/components/List/List';

export default function MainComponent() {
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
