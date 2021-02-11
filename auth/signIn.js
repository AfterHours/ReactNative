import auth from '@react-native-firebase/auth';

export const signIn = async (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account signed in!');
    })
    .catch((error) => {
      console.error(error);
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      } else {
        console.log('Generic error with sign in');
      }
    });
};