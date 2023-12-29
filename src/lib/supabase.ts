import { createClient } from "@supabase/supabase-js";

// import {Database} from '../../types/supabase-database';
// const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABSE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
/*
    Comment the lines below if you are using TS
    Add the required env variables in the .env.local file before starting
*/


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABSE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

/* To generate types from your database schema set the project ref 
    in the package.json file and run "npm run update-types"
*/


export default supabase;
