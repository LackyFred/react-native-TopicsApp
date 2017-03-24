import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAY739IkMrdnNnmO3RgAcJUWvvXabBZKV4",
    authDomain: "topicwhiz-dbb10.firebaseapp.com",
    databaseURL: "https://topicwhiz-dbb10.firebaseio.com",
    storageBucket: "topicwhiz-dbb10.appspot.com",
    messagingSenderId: "629216630841"
};
export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();