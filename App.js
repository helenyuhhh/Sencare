import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PatientListScreen from './Screens/PatientListScreen'
import LayoutModules from './Screens/LayoutModules';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import PatientDetailsScreen from './Screens/PatientDetailsScreen';
import PatientTestScreen from './Screens/PatientTestScreen';
import TestDetailsScreen from './Screens/TestDetailsScreen'
import AddNewPatientScreen from './Screens/AddNewPatientScreen';
import NameScreen from './Screens/NameScreen';
import LoginScreen from './Screens/LoginScreen';
import DataHistoryScreen from './Screens/DataHistoryScreen';
import AddClinicalDataScreen from './Screens/AddClinicalDataScreen';




export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const LoginStack = () =>{
    return (
      <Stack.Navigator>
        <Stack.Screen name = "LoginPage" component={LoginScreen}/>
        <Stack.Screen name = "PatientList" component={PatientListScreen}/>
        <Stack.Screen name = "PatientDetail" component={PatientDetailsScreen}/>
        <Stack.Screen name = "PatientTests" component={PatientTestScreen}/>
        <Stack.Screen name = "TestDetails" component={TestDetailsScreen}/>
        <Stack.Screen name = "Record" component={DataHistoryScreen}/>
        <Stack.Screen name = "AddTest" component={AddClinicalDataScreen}/>
      </Stack.Navigator>  
    

    )
      
  }

  const PatientStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name = "PatientList" component={PatientListScreen}/>
        <Stack.Screen name = "PatientDetail" component={PatientDetailsScreen}/>
        <Stack.Screen name = "PatientTests" component={PatientTestScreen}/>
        <Stack.Screen name = "TestDetails" component={TestDetailsScreen}/>
        <Stack.Screen name = "Record" component={DataHistoryScreen}/>
        
      </Stack.Navigator>    
    )
  }
  // save data locally
  const NameStack = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name = "NameScreen" component={NameScreen}/>
          <Stack.Screen name = "AddNewPatient" component={AddNewPatientScreen}/>
        </Stack.Navigator>    
        )
  }

   const LogOut = ()=> {
    return(
      <View>
        <Text style = {styles.textStyle}>You logged out</Text>
      </View>
    )
   }
// component={PatientStack} means that the whole negavition screen will be the component of home
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name='Login' component = {LoginStack}/>
       
      <Tab.Screen name='Add' component={NameStack} />
      <Tab.Screen name='LogOut' component = {LogOut}/>
      

    </Tab.Navigator>

    </NavigationContainer>
    
    
    
  );
}
// <LayoutModules/>
//  <Tab.Screen name='Home' component={PatientStack} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle : {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center"
},
})
