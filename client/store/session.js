import Firebase from 'firebase';
const FirebaseInstance = new Firebase(window.ENV.firebaseApp);

export function getFirebaseInstance() {
  return FirebaseInstance;
}
