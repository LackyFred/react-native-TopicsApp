import React, { Component } from 'react';
import {firebaseApp} from './authentication';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import styles from '../../styles';

const Signin = React.createClass({
    getInitialState(){
        return {
            email: '',
            password: '',
            result: ''
        }
    },

    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigator.push({name: 'Topics'});
            }
        })
    },

    signIn() {
        let {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error =>{
               this.setState({result: error.message})
            });
    },

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.feedback}>{this.state.result}</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(text) => this.setState({email: text})}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={(text) => this.setState({password: text})}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => {this.signIn()}}
                >
                    <Text style={styles.button}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.links}>
                    <TouchableOpacity
                        onPress={() => this.props.navigator.push({name: 'forgotPassword'})}
                    >
                        <Text style={styles.link}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigator.push({name: 'signUp'})}}>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});
export default Signin;