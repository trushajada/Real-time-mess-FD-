// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyAyggWmNwQeRI1DR2_Ou5HChKcQsGOZ10E",
//   authDomain: "taskapp-otification-realtime.firebaseapp.com",
//   projectId: "taskapp-otification-realtime",
//   storageBucket: "taskapp-otification-realtime.appspot.com",
//   messagingSenderId: "1075066126438",
//   appId: "1:1075066126438:web:92a4a93b1b4e4f7609ada7",
//   measurementId: "G-FTWEG2GPHL"
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// export { messaging, getToken, onMessage };


import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    return getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY' });
  }
  return null;
};

onMessage(messaging, (payload) => {
  console.log('Message received:', payload);
});
