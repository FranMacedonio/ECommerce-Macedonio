import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7aAXyzeoSssueQxatPgne5h45MEfSPcg",
  authDomain: "ecommerce-macedonio.firebaseapp.com",
  projectId: "ecommerce-macedonio",
  storageBucket: "ecommerce-macedonio.appspot.com",
  messagingSenderId: "331010260450",
  appId: "1:331010260450:web:ecafa7161029d68f72cdbb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);