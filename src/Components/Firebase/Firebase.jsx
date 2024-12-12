import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJFm0jwqL6BPp-V7zpvbK8uvmyvRewEt4",
  authDomain: "masai-eval-1.firebaseapp.com",
  databaseURL: "https://masai-eval-1-default-rtdb.firebaseio.com",
  projectId: "masai-eval-1",
  storageBucket: "masai-eval-1.firebasestorage.app",
  messagingSenderId: "615249221099",
  appId: "1:615249221099:web:0c1ce6dff7421f9a17f5ae",
  measurementId: "G-SG3HC69SFZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);