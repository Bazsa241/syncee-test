import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { auth, googleProvider } from '../api/firebase';

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const loginWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerWithEmail = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
