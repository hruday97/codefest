import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../database/firebase'
import { database } from '../database/firebaseRealtime'
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const ViewLogs = () => {
    const navigation = useNavigation();
    const uid = auth.currentUser.uid
    const [logs, setLogs] = useState([])
    useEffect(()=>{
        database.ref('Users').child(uid).child('logs').on("value",snapshot=>{
            console.log("val",snapshot.val())
            let temp=[]
            for(let key in snapshot.val()){
                console.log("hello key", key)
                //setLogs([...logs,snapshot.val()[key]])
                temp.push(snapshot.val()[key])
            }
            setLogs(temp)
        })
        
    },[])

    useEffect(()=>{
        console.log("logs",logs.length, logs)
    }, [logs])

    const itemRender = (item)=> 
    (
        <View style={styles.border}>
            <Text>Medicine: {item.item.medicine}</Text>
            <Text>NumPills: {item.item.numPills}</Text>
            <Button
            onPress={()=>{
                navigation.navigate("Logs",item.item)
            }}
                title="Update"
                color="#841584"
                accessibilityLabel="Click to update"
            />
            <Button
            onPress={()=>{
                database.ref('Users').child(uid).child('logs').child(item.item.id).remove(()=>{
                    Alert.alert("Log Removed")
                })
            }}
                title="Remove"
                color="#841584"
                accessibilityLabel="Click to remove"
            />
        </View>
    )
   
    
    return (
        <View style={styles.main}>
            <FlatList
                data={logs}
                renderItem = {itemRender}
            />
            <Button
                onPress={()=>{
                    console.log('going to add logs')
                    navigation.navigate('Logs')
                }}
                title="Add Logs"
                color="#841584"
                accessibilityLabel="Click to add logs"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
      padding: "20%",
      alignItems: "center"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    border:{
        borderWidth: 2
    }
  })

export default ViewLogs