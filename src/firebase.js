import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3s2OW-WvAuezwx4qCFrde6wo89ZGoJbs",
    authDomain: "clone-c5e28.firebaseapp.com",
    databaseURL: "https://clone-c5e28.firebaseio.com",
    projectId: "clone-c5e28",
    storageBucket: "clone-c5e28.appspot.com",
    messagingSenderId: "569982345860",
    appId: "1:569982345860:web:79d232aee505d1ace9d8d1",
    measurementId: "G-3DCB4BGXX7",
})

const auth = firebase.auth();

export { auth }