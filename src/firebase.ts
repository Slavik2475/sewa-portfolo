import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUix4fyUpeLf1gO0UylN5l0rmf_PFpZQE",
  authDomain: "sewa-portfolio.firebaseapp.com",
  projectId: "sewa-portfolio",
  storageBucket: "sewa-portfolio.firebasestorage.app",
  messagingSenderId: "777455354054",
  appId: "1:777455354054:web:b2ae7a11b856acd03457c7",
  measurementId: "G-NVTQV290XC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);