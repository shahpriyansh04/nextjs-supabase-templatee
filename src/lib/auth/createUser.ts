import { AuthError, AuthResponse, User } from "@supabase/supabase-js";
import supabase from "../supabase";

export default async function createUser(  email:string,  password:string): Promise<AuthResponse> {
  const data = await supabase.auth.signUp({
    email: email,
    password: password,
   
    
  });
  return data

}
