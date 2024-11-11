// from now I want thisbutton only shows the basic details as an internatiate page
// it will show patient's everything instead of clinical data cause it is stored in tests
import { Text ,View, StyleSheet, Button,Image } from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const PatientDetailsScreen = ({route, navigation}) => {
    
    const patient = route.params.toPatientDetail
    const gotoTest = () => {
        navigation.navigate('PatientTests')
    }
    return (
        <View style = {styles.viewStyle}>
            <Image style={styles.imageStyle} source={{
                    uri: patient.picture
                }}></Image>
            <Text style={styles.textStyle}> {"Patient Name: "+ patient.name.first +" "} {patient.name.last} </Text>
            <Text style={styles.textStyle}> { "Room Number: " + patient.room} </Text>
            <Text style={styles.textStyle}> { "Age: " + patient.age} </Text>
            <Text style={styles.textStyle}> { "Gender: " + patient.gender} </Text>
            
            {/* patient tests is defined as an json array, i want to view it through some button */}
            
            <Text style={styles.textStyle}> { "Weight: " + patient.weight} </Text>
            <Text style={styles.textStyle}> { "Height: " + patient.height} </Text>
            
            {/*  */}
            <Button title="View Tests list" onPress={()=>{
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
        alignItems: "stretch",
        //justifyContent: "center"
    },
    textStyle : {
        padding:5,
        fontSize: 25
    },
    imageStyle: {
        width: 100,
        height: 100,
        alignSelf:"center"
    }
})

export default PatientDetailsScreen;


