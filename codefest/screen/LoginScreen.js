import {
    View,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../database/firebase";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                
                const user = userCredentials.user;
                
                console.log("Registered in with:", user.email);
            })
            .catch((error) => alert(error.message));
    };

    const displayEmail = () => {
        console.log(email);
    };

    const displayEmailAndLogin = () => {
        console.log(email);
        navigation.navigate("Home");
    };

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Logged in with:", user.email);
                navigation.navigate("Home")
            })
            .catch((error) => setError(error.code)); //To display the error message above Login Button. Format the code for more sensible text. 
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Home");
            }
        });
        return unsubscribe;
    }, []);

    const mainLogo = require('../assets/projectLogo.png');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.logoBox}>
                <Image source={mainLogo} style={styles.mainLogo}></Image>
            </View>
            <View style={styles.boxMain}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={"#666666"}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={"#666666"}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() =>navigation.navigate("Signup")} style={styles.signupButton}>
                        <Text style={[styles.buttonText]}>SignUp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                        <Text style={[styles.buttonText]}>Login</Text>
                    </TouchableOpacity>
                </View>
            <Text style={styles.errorText}>
                    {error}
            </Text>
        </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const primaryColor = "#1C1C24";
const secondaryColor = "#2A2A34";
const loginButtonColor = "#FF7D87";
const signupButtonColor = "#8986E1";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: primaryColor,
    },
    logoBox: {
        flex: 1,
    },
    mainLogo:{
        width: 100,
        height: 100,
        marginTop: "25%",
        borderRadius: 25,
    },
    boxMain: {
        flex: 2,
        position: 'absolute',
        backgroundColor: secondaryColor,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,        
    },
    inputContainer: {  
        width: "90%",
    },
    input: {
        color: "white",
        backgroundColor: primaryColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 20,
        width: "100%",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        flexDirection: "row",
    },
    errorText: {
        color: "red",
        fontWeight: "700",  
        marginTop: 5,
    },
    loginText: {
        color: "#3740FE",
        marginTop: 25,
        textAlign: "center",
    },
    signupButton: {
        backgroundColor: signupButtonColor,
        width: 100,
        margin: 10,
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: loginButtonColor,
        width: 100,
        margin: 10,
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
    },
});
