import React, { useState } from "react";
import {View, StyleSheet, Button, TextInput, Text } from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const TestDetailsScreen = ({ navigation, route}) => {
    

    // const [newDate, setNewDate] = useState(new Date())
    // a function: add new item to list
    const test = route.params.toTestDetail
    const patient = route.params.toDetailPat
    const testReading = ()=>{
        // heartbeat test
        if (test.category == "Heartbeat Rate") {
            return <Text style={styles.textStyle}> { "Heartbeat Rate: " + test.reading.heartbeat_rate} </Text>
        }
        else if (test.category == "Respiratory Rate") {
            return <Text style={styles.textStyle}> { "Respiratory Rate: " + test.reading.respiratory_rate} </Text>
        }
        else if (test.category == "Blood Oxygen Level") {
            return <Text style={styles.textStyle}> { "Blood Oxygen Level: " + test.reading.blood_oxygen_level} </Text>
        }
        else{
            return <Text style={styles.textStyle}> { "Blood Pressure: " + "\n" + 
                "Systolic: " + test.reading.blood_pressure.systolic + "\n" + 
                "Diastolic: " + test.reading.blood_pressure.diastolic} </Text>
        }
    }
    
    return (
        <View style = {styles.viewStyle}>
           
            <Text style={styles.textStyle}> {"Test Name: "+ test.category }  </Text>
            {testReading()}
            <Text style={styles.textStyle}> { "Nurse: " + test.nurse_name} </Text>
            <Text style={styles.textStyle}> { "Date: " + test.date} </Text>
            <Button title="Add Test" onPress={()=>{
                // this acts like sender, sent the patient to next screen, var is called toPatientTest
            // navigation.navigate('AddTest', {toAddTest:test, toAddP:patient})
        }}></Button>
            
       </View>
          
   )

}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: "stretch"
    },
    textStyle : {
        padding:3,
        fontSize: 25
    }
})

export default TestDetailsScreen;
