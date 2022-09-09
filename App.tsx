import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NameInput from './pages/NameInput';
import Login from './pages/Login';
import SumCal from './pages/SumCal';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <NameInput></NameInput> */}
      {/* <Login></Login> */}
      <SumCal></SumCal>
    </View>
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
