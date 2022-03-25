import 'react-native-gesture-handler';
import Store from './store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from './MainComponent';
import Login from './src/components/Login/Login';
import NavigationTab from './src/components/NavigationTab/NavigationTab';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        {/* <MainComponent /> */}
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={NavigationTab} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
