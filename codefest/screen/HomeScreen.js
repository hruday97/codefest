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
                <Image source={require("../assets/profileLogo.jpg")} style={styles.profilePhoto}/>
            </View>
            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeTime}>Good Morning,</Text>
                <Text style={styles.welcomeUser}>{auth.currentUser.displayName}🌅</Text>
            </View>
            <View style={styles.feelingsNow}>
                <View style={[styles.feelingHappy, styles.feelingsButtons]}></View>
                <View style={[styles.feelingCalm, styles.feelingsButtons]}></View>
                <View style={[styles.feelingRelaxed, styles.feelingsButtons]}></View>
                <View style={[styles.feelingFocused, styles.feelingsButtons]}></View>
            </View>
            <View style={styles.monthAndmap}>
                <View style={styles.calendarBox}><Text>Calendar</Text></View>
                <View style={styles.mapBox}><Text>Map</Text></View>
            </View>
            <View style={styles.newsArticles}><Text>news</Text></View>
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
        padding: 10,
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
        flexDirection: 'row',
        justifyContent: "center",
    },
    feelingsButtons:{
        width:60,
        height: 60,
        margin: 10,
        borderRadius: 20,
    },
    feelingHappy:{
        flex: 1,
        backgroundColor: 'yellow',
    },
    feelingCalm:{
        flex: 1,
        backgroundColor: 'red',
    },
    feelingRelaxed:{
        flex: 1,
        backgroundColor: 'aqua',
    },
    feelingFocused:{
        flex: 1,
        backgroundColor: '#ff00ff',
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
