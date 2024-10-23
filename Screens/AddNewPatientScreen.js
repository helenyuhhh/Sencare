import React, { useState } from "react";
import {View, StyleSheet, Button, TextInput } from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const AddNewPatientScreen = ({ navigation, route}) => {

    const [newFirst, setNewFirst] = useState('')
    const [newLast, setNewLast] = useState('')
    const [newRoom, setNewRoom] = useState('')
    const [newAge, setNewAge] = useState(0)
    const [newGender, setNewGender] = useState('')
    const [newSyatolic, setNewSyatolic] = useState(0)
    const [newDiastolic, setNewDiastolic] = useState(0)
    const [newCondition, setNewCondition] = useState('')
    const [newWeight, setNewWeight] = useState('')
    const [newHeight, setNewHeight] = useState('')
    const [newDate, setNewDate] = useState(new Date())
    // a function: add new item to list
    const addNewItemToList = ()=>{
        const {addNewItem} = route.params; // now this function can be used here?
        const nameString = newFirst + " " + newLast + "  " + newRoom + "  " + newCondition
        if (nameString !== "") {
            addNewItem(nameString)
            navigation.goBack()
        }
    }

    return (
        <View style = {styles.viewStyle}>
            <TextInput style={styles.textStyle}
            placeholder="Enter First Name:"value = {newFirst} onChangeText={setNewFirst}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Last Name:"value = {newLast} onChangeText={setNewLast}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Room #:"value = {newRoom} onChangeText={setNewRoom}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Age:"value = {newAge} onChangeText={setNewAge}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Gender:"value = {newGender} onChangeText={setNewGender}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Syatolic:"value = {newSyatolic} onChangeText={setNewSyatolic}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Diastolic:"value = {newDiastolic} onChangeText={setNewDiastolic}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Condition:"value = {newCondition} onChangeText={setNewCondition}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Weight:"value = {newWeight} onChangeText={setNewWeight}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Height:"value = {newHeight} onChangeText={setNewHeight}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Date Record:"value = {newDate} onChangeText={setNewDate}></TextInput>
            <Button title="Save" onPress = { addNewItemToList }></Button>
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
        fontSize: 20
    }
})

export default AddNewPatientScreen;


