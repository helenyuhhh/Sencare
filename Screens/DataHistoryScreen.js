// child of Patient detail , a list of user's historical data, just like add user name
import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image, TouchableOpacity} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const DataHistoryScreen = (props) => {
    const [dates,setDate] = useState([])
   
    dataRow = (date) => 
        <TouchableOpacity onPress={()=>{
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{date}</Text>
            </View>
            
        }}>
            

        </TouchableOpacity>
    
 // keyExtractor={(item,i) => i.toString()} i is the index   
 // since I only need name, I need to destructure it    renderItem={ ({name}) =>  patientRow(name)}

 return (
    <View style={styles.viewStyle}>    
        <FlatList
            data={dates}
             keyExtractor={(item,i) => i.toString()}
            renderItem={ ({item}) => 
                <Text style={styles.textStyle}>{item}</Text>
            }
        ></FlatList>
        <TouchableOpacity>
        <FontAwesome6 name="add" style = {styles.iconStyle} onPress={()=>{
            props.navigation.navigate('AddData', 
                {addNewDate:(newDate)=>{
                    setDate((prevItems)=>[...prevItems, newDate]) // ... means copy the previous items
                }})

        }}/>
        </TouchableOpacity>
    </View>   
)
}
/**
 * <AntDesign name="adduser" style = {styles.iconStyle} onPress={()=>{
                props.navigation.navigate('AddNewPatient', 
                    {addNewItem:(newName)=>{
                        setNames((prevItems)=>[...prevItems, newName]) // ... means copy the previous items
                    }})

            }}/>
 */

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
    alignSelf:"center",
    fontSize:40,
    color: "black",
    right: 10
   }
})

export default DataHistoryScreen;



