import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PatientListScreen from './Screens/PatientListScreen'
import LayoutModules from './Screens/LayoutModules';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name='PatientList' component={PatientListScreen} />
      <Tab.Screen name='Flex' component={LayoutModules} />
    </Tab.Navigator>

    </NavigationContainer>
    
    
    
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
