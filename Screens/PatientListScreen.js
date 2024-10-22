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
                <Text style={styles.textStyle}>{patient.room}</Text>
                <Text style={[
                      styles.textStyle,
                      patient.clinical.condition == "Critical" && styles.criticalStyle]}>
                    {patient.clinical.condition}
                </Text>
                <Image style={styles.imageStyle} source={{
                    uri: patient.picture
                }}></Image>
        </View>
    return (
        <View>
            <Text style = {styles.titleStyle}>Patient List</Text>
            <FlatList
                data={patients}
                 keyExtractor={(item,i) => i}
                renderItem={ (listItem) => 
                    patientRow(listItem.item)
                }
            ></FlatList>

        </View>
            
   )

}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 30,
        fontWeight:"bold",
        marginTop: 50,
        marginLeft:130
        
    },
    textStyle : {
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent:'space-between',
        borderWidth: 1,
        margin: 15,
        borderRadius: 5,
        padding: 10
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    criticalStyle : {
        color:"white",
        backgroundColor: "red"
    }
})

export default UserListComponent;


