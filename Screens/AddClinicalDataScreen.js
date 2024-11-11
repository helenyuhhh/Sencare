// this file is to add clinical data, should be nagivate to data history page
import React, { useState } from "react";
import {View, StyleSheet, Button, TextInput } from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const AddClinicalDataScreen = ({ navigation, route}) => {
    // id
    const {patientID} = route.params
    // category
    const [newCategory, setCategory] = useState('')
    // nurse
    const [newNurse, setNurse] = useState('')
    // type: Test
    const [newType, setType] = useState('')
    // date
    const [newDate, setDate] = useState('')
    // reading, should be number, but depending on the decision, add button would be greate?
    // add button to show the rest of the reading input area
    const [newReading, setReading] = useState('')
    // const [newDate, setNewDate] = useState(new Date())
    // a function: add new item to list
    const testReading = ()=>{
        // heartbeat test
        if (newCategory == "Heartbeat Rate") {
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
    const addNewTest = async ()=>{
        // test structure:
        const test = {
        patient_id: patientID,
        date: new Date().toISOString,
        nurse_name: newNurse,
        type: newType, 
        category: newCategory,
        reading: newReading
        }
        try {
            // Replace with your actual API URL and endpoint
            const response = await axios.post(`http://172.16.7.126:3000/api/patients${patientId}/tests`, test);
            if (response.status === 201) {
                console.log('New test added:', response.data);
            } else {
                console.error('Failed to add test:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding test:', error);
        }
        
    }

    return (
        <View style = {styles.viewStyle}>
            <TextInput style={styles.textStyle}
            placeholder="Enter Syatolic:"value = {newSyatolic} onChangeText={setNewSyatolic}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Diastolic:"value = {newDiastolic} onChangeText={setNewDiastolic}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Condition:"value = {newCondition} onChangeText={setNewCondition}></TextInput>
            {/* <TextInput style={styles.textStyle}
            placeholder="Date Record:"value = {newDate} onChangeText={setNewDate}></TextInput> */}
            
            <Button title="Save" onPress = { addNewDataToList }></Button>
       </View>
          
   )

}
/*
 <TextInput style={styles.textStyle}> {"Patient Name: "+ patient.name.first +" "} {patient.name.last} </TextInput>
            <TextInput style={styles.textStyle}> { "Age: " + patient.age} </TextInput>
            <TextInput style={styles.textStyle}> { "Gender: " + patient.gender} </TextInput>
            <TextInput style={styles.textStyle}> { "Systolic: " + patient.clinical.systolic} </TextInput>
            <TextInput style={styles.textStyle}> { "Diastolic: " + patient.clinical.diastolic} </TextInput>
            <TextInput style={styles.textStyle}> { "Condition: " + patient.clinical.condition } </TextInput>
            <TextInput style={styles.textStyle}> { "Weight: " + patient.weight} </TextInput>
            <TextInput style={styles.textStyle}> { "Height: " + patient.height} </TextInput>
            <TextInput style={styles.textStyle}> { "Recorded Date: " +patient.date} </TextInput>
*/
const styles = StyleSheet.create({
    viewStyle:{
        alignItems: "stretch"
    },
    textStyle : {
        padding:3,
        fontSize: 25
    }
})

export default AddClinicalDataScreen;


