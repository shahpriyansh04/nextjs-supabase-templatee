import { AuthError, AuthResponse, OAuthResponse, User } from "@supabase/supabase-js";
import supabase from "../supabase";

export default async function loginUser(email:string, password:string): Promise<AuthResponse> {
  const  data = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return data

}

