import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD68dj3zXTes8wcPdrBRFYke0TbLt_PUgA",
    authDomain: "sparta-honeytip-hongok2.firebaseapp.com",
    databaseURL: "https://sparta-honeytip-hongok2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sparta-honeytip-hongok2",
    storageBucket: "sparta-honeytip-hongok2.appspot.com",
    messagingSenderId: "350543206591",
    appId: "1:350543206591:web:86b2c39a48d2fdddc2ce0a",
    measurementId: "G-ZRDH6J16RG"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()