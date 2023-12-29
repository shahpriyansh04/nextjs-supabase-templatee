import { AuthError, User } from "@supabase/supabase-js";
import supabase from "../supabase";

export default async function createUser(  email:string,  password:string): Promise<User| null|AuthError> {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
   
    
  });
  if (!error) {
    return data.user;
  }
  return error;

}
