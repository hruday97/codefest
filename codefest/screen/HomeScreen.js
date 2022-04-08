import {
    View,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, {useEffect, useState} from "react";
import { auth } from "../database/firebase";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon, {Icons} from "../components/Icons";
import {
    useFonts,
    AlegreyaSans_100Thin,
    AlegreyaSans_100Thin_Italic,
    AlegreyaSans_300Light,
    AlegreyaSans_300Light_Italic,
    AlegreyaSans_400Regular,
    AlegreyaSans_400Regular_Italic,
    AlegreyaSans_500Medium,
    AlegreyaSans_500Medium_Italic,
    AlegreyaSans_700Bold,
    AlegreyaSans_700Bold_Italic,
    AlegreyaSans_800ExtraBold,
    AlegreyaSans_800ExtraBold_Italic,
    AlegreyaSans_900Black,
    AlegreyaSans_900Black_Italic,
  } from '@expo-google-fonts/alegreya-sans';
const HomeScreen = () => {
    
    const [saScore, setSAScore ] = useState(45);
    const [saBGColor, setSABGColor] = useState("#f1ae42");
    let [fontsLoaded] = useFonts({
        AlegreyaSans_100Thin,
        AlegreyaSans_100Thin_Italic,
        AlegreyaSans_300Light,
        AlegreyaSans_300Light_Italic,
        AlegreyaSans_400Regular,
        AlegreyaSans_400Regular_Italic,
        AlegreyaSans_500Medium,
        AlegreyaSans_500Medium_Italic,
        AlegreyaSans_700Bold,
        AlegreyaSans_700Bold_Italic,
        AlegreyaSans_800ExtraBold,
        AlegreyaSans_800ExtraBold_Italic,
        AlegreyaSans_900Black,
        AlegreyaSans_900Black_Italic,
      });

    useEffect(() =>{
        if(saScore <= 34){
            setSABGColor("#7ff142");
        }
        if(saScore > 34 && saScore <=66){
            setSABGColor("#f1ae42");
        }
        if(saScore > 66){
            setSABGColor("#F14D42");
        }
    });

    const navigation = useNavigation();

if (!fontsLoaded) {
    return null;
  } else {
    return (
        <View style={styles.container}>
            {/* Profile Header */}
            <View style={styles.profileHeader}>
                <View style={styles.profileMenu}>
                    <Image 
                        source={require("../assets/projectLogo.png")}
                        style = {styles.profileLogo}
                    />
                </View>
                <Image
                    source={require("../assets/profileLogo.jpg")}
                    style={styles.profilePhoto}
                />
            </View>

            {/* Welcome Message */}
            {/* Update font */}
            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeTime}>Welcome back,&nbsp;
                    <Text style={styles.welcomeUser}>
                        {auth.currentUser.displayName}!
                    </Text>
                </Text>
            </View>

            {/* How are you feeling now?*/}
            <View style={styles.feelingsNow}>
                <Text style={styles.feelingsText}>How are you feeling?</Text>
                <View style={styles.feelingsBox}>
                    <View style={styles.feelingHappyBox}>
                        <View style={[styles.feelingsOption, styles.feelingHappy]}>
                            <Icon type={Icons.Ionicons} name={'happy-outline'} style={styles.feelingIcon}/>
                        </View>
                        <Text style={styles.feelingText}> Happy </Text>
                    </View>

                    <View style={styles.feelingCalmBox}>
                        <View style={[styles.feelingsOption, styles.feelingCalm]}>
                            <Icon type={Icons.Ionicons} name={'leaf-outline'} style={styles.feelingIcon}></Icon>
                        </View>
                        <Text style={styles.feelingText}> Calm </Text>
                    </View>

                    <View style={styles.feelingRelaxedBox}>
                        <View style={[styles.feelingsOption, styles.feelingRelaxed]}>
                            <Icon type={Icons.Ionicons} name={'rose-outline'} style={styles.feelingIcon}></Icon>
                        </View>
                        <Text style={styles.feelingText}> Relaxed </Text>
                    </View>
                
                    <View style={styles.feelingFocusedBox}>
                        <View style={[styles.feelingsOption, styles.feelingFocused]}>
                            <Icon type={Icons.Ionicons} name={'school-outline'} style={styles.feelingIcon}></Icon>
                        </View>
                        <Text style={styles.feelingText}> Focused </Text>
                    </View>                
                </View>
            </View>

            {/* Your plan for today */}
            <View style={styles.planMainBox}>
                <View style={styles.planBox}>
                    <Text>
                        Your plan for today
                    </Text>
                </View>
            </View>

            {/* Month and Map */}
            <View style={styles.monthAndmap}>
                <View style={styles.calendarBox}>
                    <View 
                        style={styles.calendarMainBox}
                        backgroundColor={saBGColor}
                    >
                    <Text style={styles.substanceScore}>{saScore}</Text>
                    </View>
                </View>
                <View style={styles.mapBox}>
                    <Image source={require('../assets/mapImg.png')} style={styles.mapImg}/>
                </View>
            </View>
            <View style={styles.newsArticles}>
                <Text>news</Text>
            </View>
        </View>
    );
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileHeader: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingTop: 25,
    },
    profileLogo: {
        width: 50,
        height: 50,
        marginLeft: 15,
        borderRadius: 50,
    },
    profilePhoto: {
        width: 50,
        height: 50,
        marginRight: 15,
        marginLeft: "auto",
        borderRadius: 50,
    },
    welcomeMessage: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
    },
    welcomeTime: {
        fontSize: 40,
        fontFamily: 'AlegreyaSans_400Regular',
        marginTop: -10,
    },
    welcomeUser: {
        fontSize: 50,
        fontFamily: 'AlegreyaSans_700Bold',

    },
    welcomeEmoji:{
        fontSize: 40,
    },
    feelingsNow: {
        flex: 2,
    },
    feelingsText: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 30,  
    },
    feelingsBox:{
        flexDirection: 'row',
    },  
    feelingsOption:{
        height: 70,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    feelingIcon: {
        color: 'white',
        fontSize: 50,
    },
    feelingText:{
        textAlign: "center",
    },
    feelingHappyBox:{
        flex: 1,
        justifyContent: 'center',
    },
    feelingHappy:{
        backgroundColor: '#EF5DA8',
    },
    feelingCalmBox:{
        flex: 1,
    },
    feelingCalm:{
        backgroundColor: '#AEAFF7',
    },
    feelingRelaxedBox:{
        flex: 1,
    },
    feelingRelaxed:{
        backgroundColor: '#F09E54',
    },
    feelingFocusedBox:{
        flex: 1,
    },
    feelingFocused:{
        backgroundColor: '#A0E3E2',
    },
    planMainBox:{
        flex: 2,
    },
    planBox:{
        backgroundColor: '#FCDDEC',
        flex: 1,
        borderRadius: 25,
        margin: 10,
    },
    monthAndmap: {
        flexDirection: "row",
        flex: 2,
    },
    calendarBox: {
        flex: 1,
    },
    calendarMainBox: {
        flex: 1,
        margin: 10,
        backgroundColor: '#FCDDEC',
        borderRadius: 25,
        justifyContent: 'center',
    },  
    substanceScore:{
        fontSize: 100,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: .7,
    },
    mapBox: {
        flex: 1,
    },
    mapImg: {
        borderRadius: 25,
        margin: 10,
        width: "90%",
        height: "90%",

    },
    newsArticles: {
        flex: 3,
        backgroundColor: "grey",
    },
});
