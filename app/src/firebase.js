const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBG1GvMvA5bglA2ZX2sAZbXdkWDdDxqGzw",
  authDomain: "my-project-flaggy.firebaseapp.com",
  databaseURL: "https://my-project-flaggy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-project-flaggy",
  storageBucket: "my-project-flaggy.appspot.com",
  messagingSenderId: "498679937037",
  appId: "1:498679937037:web:d7552893b4b36746eafd44",
  measurementId: "G-YV8EPMK5CP"
})

const myAppDB = firebaseApp.database()
const auth = firebaseApp.auth()
