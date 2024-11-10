// this file is to add clinical data, should be nagivate to data history page
import React, { useState } from "react";
import {View, StyleSheet, Button, TextInput } from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const AddClinicalDataScreen = ({ navigation, route}) => {
    const [newSyatolic, setNewSyatolic] = useState(0)
    const [newDiastolic, setNewDiastolic] = useState(0)
    const [newCondition, setNewCondition] = useState('')

    // const [newDate, setNewDate] = useState(new Date())
    // a function: add new item to list
    const addNewDataToList = ()=>{
        const {addNewDate} = route.params; // now this function can be used here?
        if (newDate !== "") {
            const result = newDate + "  " + "S: " + newSyatolic + " " +"D: " + newDiastolic + " " + newCondition
            addNewDate(result)
            navigation.goBack()
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


