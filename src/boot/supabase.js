import { createClient } from '@supabase/supabase-js';
import useAuthUser from "src/composables/UserAuthUser";

const supabaseUrl = ""; // Or .env value
const supabaseKey = ""; // Or .env value

// const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
// const supabaseKey = process.env.VUE_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();
  user.value = session?.user || null; // se user.value <> null, atualize.
});

//console.log('Init Supabase: ', supabase);

export default function useSupabase() {
  return { supabase };
}
