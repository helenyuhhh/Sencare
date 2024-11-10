// from now I want thisbutton only shows the basic details as an internatiate page
// it will show patient's everything instead of clinical data cause it is stored in tests
import { Text ,View, StyleSheet, Button } from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const PatientTestScreen = ({route, navigation}) => {
    // act like the receiver, receives the patient passes from last screen. receices as toPatientTest
    const patient = route.params.toPatientTest
    // TO DO: list of patients tests, just liek patient lists
    return (
        <View style = {styles.viewStyle}>
            
           
            {/* patient tests is defined as an json array, i want to view it through some button */}
            <Text style={styles.textStyle}> { "test: " + patient.tests} </Text>
            
            {/*  */}
            
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

export default PatientTestScreen;


