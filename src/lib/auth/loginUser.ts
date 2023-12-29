import { AuthError, OAuthResponse, User } from "@supabase/supabase-js";
import supabase from "../supabase";

export default async function loginUser(email:string, password:string): Promise<User | null | AuthError> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  
    if(!error) {
        return data.user;
    }
    return error;

}

