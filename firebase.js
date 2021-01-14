import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCQ-BsdAKYvgBydQMqkg4djDDXXW8DqI_U",
	authDomain: "semester-exam.firebaseapp.com",
	databaseURL: "https://semester-exam.firebaseio.com",
	projectId: "semester-exam",
	storageBucket: "semester-exam.appspot.com",
	messagingSenderId: "598856993249",
	appId: "1:598856993249:web:200e7164f43ef976b7aaa0",
	measurementId: "G-6PVBL76BDN"
});

var db = firebaseApp.database();

export { db };


