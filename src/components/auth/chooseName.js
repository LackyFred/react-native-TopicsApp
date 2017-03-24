import React, { Component } from 'react';
import {firebaseApp} from './authentication';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from '../../styles';

const chooseName = React.createClass({

    getInitialState() {
        return {
            name: ''
        }
    },

    updateDisplayName(){
        let user = firebaseApp.auth().currentUser;
        user.updateProfile({
            displayName: this.state.name
        }).then(() => {
            this.props.navigator.push({name: 'Topics'});
        });
    },

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Choose a display name
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({name: text})}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.updateDisplayName()}
                >
                    <Text style={styles.button}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

});

export default  chooseName;