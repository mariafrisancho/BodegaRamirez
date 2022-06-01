// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrDZtewQpO9kWLfceAE-dId2swkW_2rwU",
  authDomain: "bodegaramirez-ce545.firebaseapp.com",
  projectId: "bodegaramirez-ce545",
  storageBucket: "bodegaramirez-ce545.appspot.com",
  messagingSenderId: "303657222349",
  appId: "1:303657222349:web:2935eaf3f22848a69da984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function  getFirestoreApp(){
    return app
}