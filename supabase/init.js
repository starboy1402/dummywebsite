// supabase/init.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://rbcjwbluvmjbkxgatzgw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiY2p3Ymx1dm1qYmt4Z2F0emd3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjI1MDc1NywiZXhwIjoyMDY3ODI2NzU3fQ.XJ1X4hAwzTYaeQqqYRJHuVhS0MIyloU67GmIWrPvAF4'
export const supabase = createClient(supabaseUrl, supabaseKey)
