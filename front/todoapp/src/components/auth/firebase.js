
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQF-2Bj5NNQTSmDdkp1x8IeB7KJ57ncKA",
  authDomain: "test-todo-290fb.firebaseapp.com",
  projectId: "test-todo-290fb",
  storageBucket: "test-todo-290fb.appspot.com",
  messagingSenderId: "801424273972",
  appId: "1:801424273972:web:ae2aa6d4d09855e345d061"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);