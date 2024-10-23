import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PatientListScreen from './Screens/PatientListScreen'
import LayoutModules from './Screens/LayoutModules';

export default function App() {
  return (
    
    <PatientListScreen/>
  );
}
// <LayoutModules/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
})
