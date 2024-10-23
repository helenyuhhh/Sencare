import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PatientListScreen from './Screens/PatientListScreen'
import LayoutModules from './Screens/LayoutModules';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import PatientDetailsScreen from './Screens/PatientDetailsScreen';
import NameScreen from './Screens/NameScreen';


export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const PatientStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name = "PatientList" component={PatientListScreen}/>
        <Stack.Screen name = "PatientDetail" component={PatientDetailsScreen}/>
      </Stack.Navigator>    
    )
  }
// component={PatientStack} means that the whole negavition screen will be the component of home
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name='Home' component={PatientStack} />
      <Tab.Screen name='Add' component={NameScreen} />
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
