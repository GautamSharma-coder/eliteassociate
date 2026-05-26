// Elite Associates — Firebase Configuration & Initialization
// Replace these placeholders with your actual keys from the Firebase Console (Settings > General > Your Apps)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyALg_KacReTxs_qofCLtFfPPHcjJN8hHpI",
  authDomain: "elite-associates-dbg.firebaseapp.com",
  projectId: "elite-associates-dbg",
  storageBucket: "elite-associates-dbg.firebasestorage.app",
  messagingSenderId: "676823555292",
  appId: "1:676823555292:web:55f7c741dab664449f2819",
  measurementId: "G-73KZDMCXXN"
};

// Check if the developer has filled out the keys
const isFirebaseConfigured =
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== "YOUR_API_KEY" &&
  firebaseConfig.projectId !== "YOUR_PROJECT_ID";

let app = null;
let auth = null;
let db = null;

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase Initialization Error:", error);
  }
} else {
  console.warn("Firebase is not fully configured. Please fill in your credentials in `js/firebase-config.js`.");
}

export { auth, db, isFirebaseConfigured };
