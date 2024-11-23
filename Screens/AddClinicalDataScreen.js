// this file is to add clinical data, should be nagivate to data history page
// add file to mongo db
import React, { useState } from "react";
import {View, StyleSheet, Button, TextInput, Text } from "react-native";
import axios from "axios";
import PatientTestScreen from "./PatientTestScreen";
import { Picker } from "@react-native-picker/picker";   

// future plan: add a button to the record data screen ti update the latest data?


const AddClinicalDataScreen = ({ navigation, route}) => {
    //const patient = route.params.toAddP
    const patient = route.params?.toAddP;
    console.log('Received patient data:', patient);
    const patientID = patient._id
    // console.log('Patient ID:', patientID)
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
    //const [newReading, setReading] = useState('')
    // const [newDate, setNewDate] = useState(new Date())
    // a function: add new item to list
    
   // for test reading
    const [newSys, setSys] = useState("")
    const [newDia, setDia] = useState("")
    const [newRes, setRes] = useState("")
    const [newBlOx, setBlO] = useState("") // for blood oxygen
    const [newHP, setHP] = useState("") // for blood pressure

   // for test ID
    const [newID, setNewID] = useState("")
    
    var newCondition = ""
    // function for check condition
    const latestCondition = ()=> {
        let criticalBlO = false
        let criticalBloodPres = false
        let criticalRes = false
        let criticalHeartBeat = false
        if (newRes && (newRes >= 17 || newRes <= 11)) {
             criticalRes = true
        }
        if(newBlOx && (newBlOx >= 1 || newRes < 0.95)) {
             criticalBlO = true
        }
        if (newHP &&(newHP > 100 || newHP <= 59)) {
             criticalHeartBeat = true
        }
        if (newSys && newDia && !(newSys <120 && newDia < 80)) {
             criticalBloodPres = true
        }
        if ((criticalRes || criticalBlO || criticalHeartBeat || criticalBloodPres)) {
            newCondition = "Critical"
        }
        else{
            newCondition = "Normal"
        }
    }
    const newTest = async ()=>{
        // test structure:
        const test = {
        patient_id: patientID,
        date: newDate,
        nurse_name: newNurse,
        type: newType, // type is test
        category: newCategory,
        reading:{
            systolic: newSys ? parseInt(newSys) : undefined,
            diastolic: newDia ? parseInt(newDia) : undefined,
            respiratory: newRes ? parseInt(newRes) : undefined,
            blood_oxygen: newBlOx ? parseFloat(newBlOx) : undefined, // decimal number
            heartbeat_rate: newHP ? parseInt(newHP) : undefined
        },
        id: newID
        }
        
        //navigation.goBack()
        // call the latest condition
        latestCondition()

        try {
            // Replace with your actual API URL and endpoint
            console.log("Test Object:", JSON.stringify(test, null, 2))

            const response = await axios.post(`http://172.16.7.126:3000/api/patients/${patientID}/tests`, test)
            if (response.status === 201) {
                console.log('New test added:', response.data)
                await axios.patch(`http://172.16.7.126:3000/api/patients/${patientID}`, {condition: newCondition})
                console.log('patient condition uodated', newCondition)
                navigation.goBack()
            } else {
                console.error('Failed to add test:', response.statusText)
            }
        } catch (error) {
            console.error('Error adding test:', error)
        }

        
    }

    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>{patientID}</Text>
            <TextInput style={styles.textStyle}
            placeholder="Enter Type:"value = {newType} onChangeText={setType}></TextInput>
            <View style={styles.pickerView}>
                <Text style={styles.textStyle}>Select Test</Text>
                <Picker selectedValue={newCategory}
                    onValueChange={(itemValue) => {setCategory(itemValue)
                    // select
                    //pickTest()
                    }
                    
                    } 
                    style = {styles.pickerStyle}>
                    <Picker.Item label="Heartbeat Rate" value="Heartbeat Rate" />
                    <Picker.Item label="Respiratory Rate" value="Respiratory Rate" />
                    <Picker.Item label="Blood Oxygen Level" value="Blood Oxygen Level" />
                    <Picker.Item label="Blood Pressure" value="Blood Pressure" />
                </Picker>

            </View>
            <View style = {styles.inputView}>
            <TextInput style={[styles.textStyle,marginTop=20]}
            placeholder="Enter Date:"value = {newDate} onChangeText={setDate}></TextInput>
            <TextInput style={styles.textStyle}
            placeholder="Enter Nurse Name:"value = {newNurse} onChangeText={setNurse}></TextInput>
            {newCategory === "Heartbeat Rate" && (<TextInput style={styles.textStyle}
                placeholder="Enter Heartbeat Rate"
                value={newHP}
               onChangeText={setHP}/>)}
            {newCategory === "Respiratory Rate" && (<TextInput style={styles.textStyle}
                placeholder="Enter Respiratory Rate"
                value={newRes}
               onChangeText={setRes}/>)}
               {newCategory === "Blood Oxygen Level" && (<TextInput style={styles.textStyle}
                placeholder="Enter Blood Oxygen Level"
                value={newBlOx}
               onChangeText={setBlO}/>)}
               {newCategory === "Blood Pressure" && (<TextInput style={styles.textStyle}
                placeholder="Enter Systolic"
                value={newSys}
               onChangeText={setSys}/>)}
               {newCategory === "Blood Pressure" && (<TextInput style={styles.textStyle}
                placeholder="Enter DiaDiastolic"
                value={newDia}
               onChangeText={setDia}/>)}
    
            <TextInput style={styles.textStyle}
            placeholder="Enter Test ID:"value = {newID} onChangeText={setNewID}></TextInput>
            
            {/* <TextInput style={styles.textStyle}
            placeholder="Date Record:"value = {newDate} onChangeText={setNewDate}></TextInput> */}
            
            <Button title="Save" onPress={async () => {
             await newTest()}}/>

            </View>
            
            
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexGrow: 1,
        flex:1
        
    },
    textStyle : {
        
        padding:3,
        fontSize: 25
    },
    pickerStyle:{
        position:"absolute",
        top: -40,
        left: 80,
        width:300,
        height:20
    },
    pickerView : {
        flexDirection:"column",
        padding:2
    },
    inputView:{
        marginTop:120
    }
})

export default AddClinicalDataScreen;


