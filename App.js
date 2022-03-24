import Store from './store';
import { Provider } from 'react-redux';
import MainComponent from './MainComponent';

export default function App() {
  return (
    <Provider store={Store}>
      <MainComponent />
    </Provider>
  );
}
