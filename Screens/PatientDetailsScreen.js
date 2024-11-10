// from now I want thisbutton only shows the basic details as an internatiate page
// it will show patient's everything instead of clinical data cause it is stored in tests
import { Text ,View, StyleSheet, Button } from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const PatientDetailsScreen = ({route, navigation}) => {
    
    const patient = route.params.toPatientDetail
    const gotoTest = () => {
        navigation.navigate('PatientTests')
    }
    return (
        <View style = {styles.viewStyle}>
            <Text style={styles.textStyle}> {"Patient Name: "+ patient.name.first +" "} {patient.name.last} </Text>
            <Text style={styles.textStyle}> { "Age: " + patient.age} </Text>
            <Text style={styles.textStyle}> { "Gender: " + patient.gender} </Text>
            <Text style={styles.textStyle}> { "Test: " + patient.tests.category} </Text>
            {/* patient tests is defined as an json array, i want to view it through some button */}
            <Text style={styles.textStyle}> { "Systolic: " + patient.clinical.systolic} </Text>
            <Text style={styles.textStyle}> { "Diastolic: " + patient.clinical.diastolic} </Text>
            <Text style={styles.textStyle}> { "Condition: " + patient.clinical.condition } </Text>
            <Text style={styles.textStyle}> { "Weight: " + patient.weight} </Text>
            <Text style={styles.textStyle}> { "Height: " + patient.height} </Text>
            <Text style={styles.textStyle}> { "Recorded Date: " +patient.date} </Text>
            {/*  */}
            <Button title="View or add clinical data" onPress={()=>{
                // this acts like sender, sent the patient to next screen, var is called toPatientTest
            navigation.navigate('PatientTests', {toPatientTest:patient})
        }}></Button>
       </View>
          
   )

}
/*
<View>
        
            
            <Button title="Record New Data" > </Button>
       </View>
*/

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: "stretch"
    },
    textStyle : {
        padding:5,
        fontSize: 25
    }
})

export default PatientDetailsScreen;


