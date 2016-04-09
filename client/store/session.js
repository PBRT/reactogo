import Firebase from 'firebase';
let FirebaseInstance = '';

export function getFirebaseInstance() {
  if (FirebaseInstance === '') {
    FirebaseInstance = new Firebase(window.ENV.firebaseApp);
  }
  return FirebaseInstance;
}
