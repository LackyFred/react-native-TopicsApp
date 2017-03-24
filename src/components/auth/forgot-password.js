import React, { Component } from 'react';
import {firebaseApp} from './authentication';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from '../../styles';

const forgotPassword = React.createClass({

    getInitialState(){
        return {
          result: '',
          email: ''
        }
    },

    changePassword(){
        firebaseApp.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                this.setState({result: 'Password reset send successfully.'})
            }, (error) => {
                this.setState({result: error})
            });

    },

    render(){
        return(
          <View style={styles.container}>
              <Text style={styles.feedback}>{this.state.result}</Text>
              <TextInput
                placeholder="Email"
                style={styles.input}
                onChangeText={(text) => this.setState({email: text})}
              />
              <View style={styles.links}>
                  <TouchableOpacity
                    onPress={() => this.props.navigator.pop()}
                  >
                      <Text>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.changePassword()}
                  >
                      <Text>Send Reset Email</Text>
                  </TouchableOpacity>
              </View>
          </View>
        );
    }
});

export default forgotPassword;