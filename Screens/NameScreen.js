import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image, TouchableOpacity } from "react-native";
import SearchBar from "../Component/SearchBar";
const NameScreen = (props) => {
    const [names,setNames] = useState(['John', 'Marry'])
  
    useEffect(() => { 
        fetchPatients()
    },[])
   
    patientRow = (name) => 
        <TouchableOpacity onPress={()=>{
            
        }}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{name}</Text>
        </View>

        </TouchableOpacity>
        
    return (
        <View>    
            <FlatList
                data={names}
                 keyExtractor={(item,i) => i.toString()}
                renderItem={ (name) => 
                    patientRow(name)
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

export default NameScreen;


