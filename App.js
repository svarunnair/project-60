import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes/Routes';
import Cards from './pages/components/Cards';

export default function App() {
  return (
   <>
    <Routes/>
    {/* <Cards/> */}

   </>
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
