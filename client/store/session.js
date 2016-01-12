import Firebase from 'firebase';
const FirebaseInstance = new Firebase('https://intense-fire-563.firebaseio.com');

export function getFirebaseInstance() {
  return FirebaseInstance;
}
