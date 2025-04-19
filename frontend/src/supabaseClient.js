import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<your-project-id>.supabase.co';
const supabaseKey = 'YOUR_ANON_KEY'; // API KEY HERE

export const supabase = createClient(supabaseUrl, supabaseKey);
