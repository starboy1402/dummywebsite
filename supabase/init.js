// supabase/init.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js'


export const supabase = createClient(supabaseUrl, supabaseKey)
