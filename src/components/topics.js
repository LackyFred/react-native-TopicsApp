import React, { Component } from 'react';
import {firebaseApp, topicsRef} from './auth/authentication';
import {
    View,
    Text,
    TextInput,
    ListView,
    TouchableOpacity
} from 'react-native';

import styles from '../styles';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

const Topics = React.createClass({

    getInitialState(){
        return {
            displayName: '',
            title: '',
            dataSource: ds.cloneWithRows([{
            }])
        }
    },

    componentDidMount(){
        let user = firebaseApp.auth().currentUser;

        if(!user.displayName){
            this.props.navigator.push({
                name: 'chooseName'
            })
        }
        else {
            this.setState({
                displayName: user.displayName
            });

            this.listenForItems(topicsRef);
        }
    },

    listenForItems(ref) {
        ref.on('value', (snap) => {
           let topics = [];
           snap.forEach(topic => {
               topics.push({
                   title: topic.val().title,
                   author: topic.val().author,
                   key: topic.key
               });
           });
           this.setState({dataSource: ds.cloneWithRows(topics)});
        });
    },

    signout() {
        firebaseApp.auth().signOut()
            .then(() => {
                this.props.navigator.popToTop();
            });
    },

    details(data) {
      this.props.navigator.push({name: 'topicDetail', displayName: this.state.displayName, title: data.title, author: data.author, row_uid: data.key})
    },

    renderRow(rowData) {

        return(
            <TouchableOpacity
                onPress={() => this.details(rowData)}
            >
            <View style={styles.row}>
                <Text style={styles.rowTitle}>
                    {rowData.title}
                </Text>
                <Text>
                    {rowData.author}
                </Text>
            </View>
            </TouchableOpacity>
        )

    },

    addTopic() {
        topicsRef.push({
           title: this.state.title,
            author: this.state.displayName
        });
    },

    render() {
        return(
            <View style={styles.topics}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.signout()}
                    >
                        <Text style={styles.link}>
                            Sign out
                        </Text>
                    </TouchableOpacity>
                    <Text>{this.state.displayName}</Text>
                </View>
                <View style={styles.body}>
                    <TextInput
                    placeholder="Something on your mind?"
                    style={styles.input}
                    onChangeText={(text) => this.setState({title: text})}
                    onEndEditing={() => this.addTopic()}
                    />
                    <ListView
                        style={styles.list}
                        enableEmptySection={true}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRow(rowData)}
                    />
                </View>
            </View>
        );
    }

});
export default Topics;