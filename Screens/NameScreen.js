import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
const NameScreen = (props) => {
    const [names,setNames] = useState([])
   
    
 // keyExtractor={(item,i) => i.toString()} i is the index   
 // since I only need name, I need to destructure it    renderItem={ ({name}) =>  patientRow(name)}

    return (
        <View style={styles.viewStyle}>    
            <FlatList
                data={names}
                 keyExtractor={(item,i) => i.toString()}
                renderItem={ ({item}) => 
                    <Text style={styles.textStyle}>{item}</Text>
                }
            ></FlatList>
            <TouchableOpacity>
            <AntDesign name="adduser" style = {styles.iconStyle} onPress={()=>{
                props.navigation.navigate('AddNewPatient', 
                    {addNewItem:(newName)=>{
                        setNames((prevItems)=>[...prevItems, newName]) // ... means copy the previous items
                    }})

            }}/>

            </TouchableOpacity>
        </View>   
   )
}

const styles = StyleSheet.create({
    
    textStyle : {
      
        fontSize: 20,
        fontWeight: "bold",
        borderWidth: 1,
        borderRadius: 5,
        padding: 1
    },
    viewStyle: {
        alignContent: 'stretch',
        margin: 15,
    },
   iconStyle: {
    position: "absolute",
    fontSize:40,
    color: "black",
    right: 10
   }
})

export default NameScreen;


