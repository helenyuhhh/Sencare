// This page will show a list of users tests, it will have a search bar and
// when we click, it will go to next page(TestDetailScreen), where we can see the specific test data
import React, { useState, useEffect } from "react";
import { Text ,View, StyleSheet, Button, FlatList, TouchableOpacity} from "react-native";
// future plan: add a button to the record data screen ti update the latest data?

const PatientTestScreen = ({route, navigation}) => {
    const [tests,setTestsList] = useState([])
    // act like the receiver, receives the patient passes from last screen. receices as toPatientTest
    const patient = route.params.toPatientTest
    // TO DO: list of patients tests, just liek patient lists
    // try to fetch the tests from patient
    const fetchTests = async() => {
        //endpoint changed, now fetching all the tests for all the patiets
        fetch(`http://172.16.7.126:3000/api/patients/${patient._id}/tests`).
            then(response => response.json()).then(data => {
                const filteredTests = data.filter(test => test.patient_id === patient._id)
                setTestsList(filteredTests)
                
            } )
    } 
    useEffect(() => { 
        fetchTests()
    },[])
    testRow = (test) => 
        <TouchableOpacity onPress={()=>{
            // pass test to toTestDetail, toTestDetail is just a name(i think)
            navigation.navigate('TestDetails', {toTestDetail:test, toDetailPat:patient})
        }}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{test.category}</Text>
                <Text style={styles.dateStyle}>{test.date}</Text>
              
        </View>

        </TouchableOpacity>

    return (
        <View>
            
           
            {/* patient tests is defined as an json array, i want to view it through some button */}
            <FlatList
                data={tests}
                 keyExtractor={(item,i) => i}
                renderItem={ (listItem) => 
                    testRow(listItem.item)
                }
            ></FlatList>
            <Button title="Add Test" onPress={()=>{
                // this acts like sender, sent the patient to next screen, var is called toPatientTest
             navigation.navigate('AddTest', {toAddP:patient})
        }}></Button>
            
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
    viewStyle: {
        flexDirection: "column",
        alignItems: 'stretch',
        justifyContent:'space-between',
        borderWidth: 1,
        margin: 15,
        borderRadius: 5,
        padding: 10
    },
    textStyle : {
        padding:5,
        fontSize: 20,
        fontWeight:"bold"
    },
    dateStyle:{
        padding:5,
        fontSize: 15
    }
})

export default PatientTestScreen;


