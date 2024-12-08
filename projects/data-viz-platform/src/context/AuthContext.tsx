import { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../lib/firebase";

/**
 * Type definition for authentication context
 */
interface AuthContextType {
  user: User | null;         // Current user or null if not authenticated
  loading: boolean;          // Loading state during auth operations
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | null>(null);

/**
 * AuthProvider Component
 * Manages authentication state and provides auth methods to children
 * Features:
 * - User state management
 * - Authentication methods (sign in, sign up, sign out)
 * - Loading state for auth operations
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  /**
   * Authentication methods
   */
  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook to use auth context
 * Throws error if used outside AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
