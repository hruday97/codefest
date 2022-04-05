// components/signup.js

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
// import { auth } from '../database/firebase';

// export default class SignupScreen extends Component {

//   constructor() {
//     super();
//     this.state = {
//       displayName: '',
//       email: '',
//       password: '',
//       isLoading: false
//     }
//   }

//   updateInputVal = (val, prop) => {
//     const state = this.state;
//     state[prop] = val;
//     this.setState(state);
//   }

//   registerUser = () => {
//     if(this.state.email === '' && this.state.password === '') {
//       Alert.alert('Enter details to signup!')
//     } else {
//       this.setState({
//         isLoading: true,
//       })
//       auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
//       .then((res) => {
//         res.user.updateProfile({
//           displayName: this.state.displayName
//         })
//         console.log('User registered successfully!')
//         alert('User registered successfully!')
//         this.setState({
//           isLoading: false,
//           displayName: '',
//           email: '',
//           password: ''
//         })
//         this.props.navigation.navigate('Login')
//       })
//       .catch(error => this.setState({ errorMessage: error.message }))
//     }
//   }

//   render() {
//     if(this.state.isLoading){
//       return(
//         <View style={styles.preloader}>
//           <ActivityIndicator size="large" color="#9E9E9E"/>
//         </View>
//       )
//     }
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.inputStyle}
//           placeholder="Name"
//           value={this.state.displayName}
//           onChangeText={(val) => this.updateInputVal(val, 'displayName')}
//         />
//         <TextInput
//           style={styles.inputStyle}
//           placeholder="Email"
//           value={this.state.email}
//           onChangeText={(val) => this.updateInputVal(val, 'email')}
//         />
//         <TextInput
//           style={styles.inputStyle}
//           placeholder="Password"
//           value={this.state.password}
//           onChangeText={(val) => this.updateInputVal(val, 'password')}
//           maxLength={15}
//           secureTextEntry={true}
//         />
//         <Button
//           color="#3740FE"
//           title="Signup"
//           onPress={() => this.registerUser()}
//         />

// <Text
//   style={styles.loginText}
//   onPress={() => this.props.navigation.navigate('Login')}>
//   Already Registered? Click here to login
// </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: 35,
//     backgroundColor: '#fff'
//   },
//   inputStyle: {
//     width: '100%',
//     marginBottom: 15,
//     paddingBottom: 15,
//     alignSelf: "center",
//     borderColor: "#ccc",
//     borderBottomWidth: 1
//   },
//   loginText: {
//     color: '#3740FE',
//     marginTop: 25,
//     textAlign: 'center'
//   },
//   preloader: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   }
// });

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

const SignupScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [name, setName] = useState("");

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                user.updateProfile({displayName:name})
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
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                />

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
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button]}
                >
                    <Text style={[styles.buttonText]}>Register</Text>
                </TouchableOpacity>
                <Text
                    style={styles.loginText}
                    onPress={() => navigation.navigate("Login")}
                >
                    Already Registered? Click here to login
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: { width: "80%" },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    loginText: {
        color: "#3740FE",
        marginTop: 25,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#0782F9",
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
