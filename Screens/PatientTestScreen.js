// from now I want thisbutton only shows the basic details as an internatiate page
// it will show patient's everything instead of clinical data cause it is stored in tests
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
        fetch(`http://172.16.7.126:3000/api/patients/${patient._id}`).
            then(response => response.json()).then(data => {
                setTestsList(data.tests)
            } )
    } 
    useEffect(() => { 
        fetchTests()
    },[])
    testRow = (test) => 
        <TouchableOpacity onPress={()=>{
            props.navigation.navigate('TestDetail', {toTestDetail:test})
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


