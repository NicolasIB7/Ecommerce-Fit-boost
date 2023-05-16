
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ36n4UplQPcdrZuOeJxyxbbuGdnLX1hk",
  authDomain: "fit-boost-44345.firebaseapp.com",
  projectId: "fit-boost-44345",
  storageBucket: "fit-boost-44345.appspot.com",
  messagingSenderId: "534125384439",
  appId: "1:534125384439:web:9697627edd4d8eccd3f9f2",
  measurementId: "G-TEBTVL14VF"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)