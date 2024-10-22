import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image } from "react-native";

const UserListComponent = () => {
    const [patients,setPatients] = useState([])
    const fetchPatients = async() => {
        fetch('http://172.16.7.126:3000/api/patients').
            then(response => response.json()).then(data => {
                setPatients(data)
            } )
    } 
    useEffect(() => { 
        fetchPatients()
    },[])
    patientRow = (patient) => 
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{patient.name.first +" "} {patient.name.last}</Text>
            <Text style={styles.textStyle}>{patient.age}</Text>
            <Text style={styles.textStyle}>{patient.condition}</Text>
            
        </View>

    return (
            <FlatList
                data={patients}
                 keyExtractor={(item,i) => i}
                renderItem={ (listItem) => 
                    patientRow(listItem.item)
                }
            ></FlatList>
   )

}

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 20
    }
    , viewStyle: {
        backgroundColor: 'gray',
        margin: 10,
    },
    imageStyle: {
        width: 50,
        height: 50
    }
})

export default UserListComponent;


