import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image} from "react-native";

const LayoutModules = ()=>{
    return(
        <View>
            <Text>text1</Text>
            <Text>Text2</Text>
            <Text>Text3</Text>
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

export default LayoutModules;
