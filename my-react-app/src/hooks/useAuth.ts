import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import { auth } from "../services/firebase";

export const useAuth = () => {
    const [error, setError] = useState<string | null>(null);
  
    const loginWithEmail = async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError(err.message);
      }
    };
  
    const registerWithEmail = async (email: string, password: string) => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError(err.message);
      }
    };
  
    const loginWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (err) {
        setError(err.message);
      }
    };
  
    const loginWithGithub = async () => {
      const provider = new GithubAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (err) {
        setError(err.message);
      }
    };
  
  
    return {
      loginWithEmail,
      registerWithEmail,
      loginWithGoogle,
      loginWithGithub,
      error,
    };
  };