const firebaseConfig = {
    // apiKey: "AIzaSyBmUQkYE8uawqEqn0PnI_WtzsXdVlJ53J4",
    // authDomain: "u-car-8c946.firebaseapp.com",
    // projectId: "u-car-8c946",
    // storageBucket: "u-car-8c946.appspot.com",
    // messagingSenderId: "180794038501",
    // appId: "1:180794038501:web:806d42e9679b96fc9d5c0c",

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export default firebaseConfig;