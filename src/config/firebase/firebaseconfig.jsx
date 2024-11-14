// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-CXGeDWvBzwMoXv1mpi9uLv8u3thNXOM",
  authDomain: "react-project-daec3.firebaseapp.com",
  projectId: "react-project-daec3",
  storageBucket: "react-project-daec3.firebasestorage.app",
  messagingSenderId: "471272614764",
  appId: "1:471272614764:web:f8c72a7e8b292d9d852149",
  measurementId: "G-FGR3WKB2Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// const analytics = getAnalytics(app);