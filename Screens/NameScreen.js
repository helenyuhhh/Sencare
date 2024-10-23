import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
const NameScreen = (props) => {
    const [names,setNames] = useState(['John', 'Marry'])
   
    patientRow = (name) => 
        <TouchableOpacity onPress={()=>{
            
        }}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{name}</Text>
        </View>

        </TouchableOpacity>
    
 // keyExtractor={(item,i) => i.toString()} i is the index   
 // since I only need name, I need to destructure it    renderItem={ ({name}) =>  patientRow(name)}

    return (
        <View styles={styles.viewStyle}>    
            <FlatList
                data={names}
                 keyExtractor={(item,i) => i.toString()}
                renderItem={ ({name}) => 
                    patientRow(name)
                }
            ></FlatList>
            <TouchableOpacity>
            <AntDesign name="adduser" style = {styles.iconStyle} onPress={()=>{
                props.navigation.navigate('AddNewPatient')

            }}/>

            </TouchableOpacity>
        </View>   
   )
}

const styles = StyleSheet.create({
    
    textStyle : {
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    viewStyle: {
        flex: 1,
        alignContent: 'stretch',
        borderWidth: 1,
        margin: 15,
        borderRadius: 5,
        padding: 10
    },
   iconStyle: {
    position: "absolute",
    fontSize:40,
    color: "black",
    right: 10
   }
})

export default NameScreen;


