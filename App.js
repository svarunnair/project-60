import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes/Routes';
import Cards from './pages/components/Cards';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
   <Provider store={store}>
    <Routes/>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
