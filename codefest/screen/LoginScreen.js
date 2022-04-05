import {
    View,
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

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.boxMain}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={[styles.buttonText]}>Login</Text>
                </TouchableOpacity>

                <Text
                style={styles.errorText}
                >
                    {error}
                </Text>
                
                <Text
                    style={styles.loginText}
                    onPress={() =>navigation.navigate("Signup")}
                >
                    Don't have account? Click here to signup
                </Text>
            </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00111a",
    },
    boxMain: {
        backgroundColor: "00111a",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        paddingTop: 15,
        paddingBottom: 15,        
        shadowColor: "#002133",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
    inputContainer: {  
        width: "90%",
    },
    input: {
        backgroundColor: "#002133",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        width: "100%",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    errorText: {
        color: "red",
        fontWeight: "700",  
    },
    loginText: {
        color: "#3740FE",
        marginTop: 25,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#ff6600",
        width: "100%",
        padding: 15,
        borderRadius: 10,
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
