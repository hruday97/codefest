import {
    View,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { auth } from "../database/firebase";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    const SignOut = () => {
        auth.signOut().then(() => {
            navigation.navigate("Login");
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileMenu}>
                    <Text>M</Text>
                </View>
                {/* <Image source={require("../assets/profileLogo.jpg")} style={styles.profilePhoto}/> */}
            </View>
            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeTime}>Good Morning,</Text>
                <Text style={styles.welcomeUser}>{auth.currentUser.displayName}</Text>
            </View>
            <View style={styles.feelingsNow}>
                <Text>How are you feeling?</Text>
            </View>
            <View style={styles.monthAndmap}>
                <View style={styles.calendarBox}><Text>Calendar</Text></View>
                <View style={styles.mapBox}><Text>Map</Text></View>
            </View>
            <View style={styles.newsArticles}><Text>news</Text></View>
            {/* <Text style={styles.textStyle}>Hi {auth.currentUser.displayName}, LAMO</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={SignOut} style={styles.button}>
                    <Text style={[styles.buttonText]}>Signout</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileHeader:{
        flexDirection: "row",
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        paddingTop: 10,
    },
    profileMenu: {
        width: 50,
        height: 50,
        backgroundColor: "pink",
        marginLeft: 10,
    },
    profilePhoto:{
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 'auto',
        borderRadius: 20,
    },
    welcomeMessage:{
        flex: 2,
        backgroundColor: "green",
    },
    welcomeTime:{
        fontSize: 70,
    },
    welcomeUser:{
        fontSize: 80,
        flexShrink: 1,
    },
    feelingsNow:{
        flex: 1,
        backgroundColor: "blue",
    },
    monthAndmap:{
        flexDirection: "row",
        flex: 3,
        backgroundColor: "black",
    },
    calendarBox:{
        flex: 1,
        backgroundColor: "pink",
    },
    mapBox:{
        flex: 1,
        backgroundColor: "lime",
    },
    newsArticles:{
        flex: 3,
        backgroundColor: "grey",
    }

});
