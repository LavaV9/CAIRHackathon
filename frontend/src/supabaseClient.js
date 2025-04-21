import { createClient } from '@supabase/supabase-js';

const supabaseUrl = '_____';
const supabaseKey = '___'; // API KEY HERE

export const supabase = createClient(supabaseUrl, supabaseKey);
