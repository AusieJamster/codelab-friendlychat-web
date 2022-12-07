/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBKqls0M2F2n6rRtqUthbqzaIj9oqXxA0E",
  authDomain: "friendlychat-c4aee.firebaseapp.com",
  projectId: "friendlychat-c4aee",
  storageBucket: "friendlychat-c4aee.appspot.com",
  messagingSenderId: "1064895337820",
  appId: "1:1064895337820:web:bac77646ed15fab4025d99",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
