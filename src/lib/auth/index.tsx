import React from "react";
import { TailSpin } from "react-loader-spinner";
import supabase from "../supabase";
import {
  AuthChangeEvent,
  AuthError,
  AuthResponse,
  OAuthResponse,
  User,
} from "@supabase/supabase-js";
import createUser from "./createUser";
import loginUser from "./loginUser";
import googleAuth from "./loginUser";

interface AuthProps {
  user: User | null;
  createUser: (email: string, password: string) => Promise<AuthResponse>;
  loginUser: (email: string, password: string) => Promise<AuthResponse>;
} /* Add more types here if required */

export const AuthContext = React.createContext<AuthProps | null>(null);

export function useAuth(): AuthProps | null {
  return React.useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, createUser, loginUser }}>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <TailSpin
            height="80"
            width="80"
            color="#000000"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
