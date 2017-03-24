import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import chooseName from './components/auth/chooseName';
import forgotPassword from './components/auth/forgot-password';

import Topics from './components/topics';
import topicDetail from './components/topic-detail';

const routes = {
    signIn: Signin,
    signUp: Signup,
    Topics: Topics,
    chooseName: chooseName,
    topicDetail: topicDetail,
    forgotPassword: forgotPassword
};

const Main = React.createClass({

    render(){
        return(
            <Navigator
                initialRoute={{name: 'signIn'}}
                renderScene={this.renderScene}
            />
        );
    },

    renderScene(route, navigator){
      let Component = routes[route.name];

      return(<Component
                navigator={navigator}
                displayName={route.displayName}
                title={route.title}
                author={route.author}
                row_uid={route.row_uid}
            />);
    }
});


export default Main;