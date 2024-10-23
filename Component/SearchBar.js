import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput} from "react-native";
import Feather from '@expo/vector-icons/Feather'; // import the icon from the github vector icon 
// search bar is the child class of patient list, hence we can pass the term and onTermChange here
const SearchBar = ({term, onTermChange}) =>{
    return(
        <View style = {styles.viewStyle}>
            <Feather name="search" style={styles.iconStyle} />
            {/* triggering the action from the search bar in the list, 
            write in the searchbar(child) and move into the list(parent)*/}
            <TextInput 
            value = {term}
            onChangeText={onTermChange}
            style = {styles.inputStyle} placeholder="Search Name Here...">
            </TextInput>
        </View>
    )

}
const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "stretch"
    },
    iconStyle: {
        alignSelf:'center',
        marginHorizontal: 7,
        color: "black",
        fontSize: 35
    },
    inputStyle: {
        marginTop:10,
        marginLeft: 5,
        fontSize: 20,
        flex: 1
    }
})
export default SearchBar;