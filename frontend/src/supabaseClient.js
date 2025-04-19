import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gpbdefmonjlvdpdlcfmb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwYmRlZm1vbmpsdmRwZGxjZm1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwODI2NjMsImV4cCI6MjA2MDY1ODY2M30.4vw0jOU6gx88abycrSRwDDKdPlUrkY61zvOm4mbKRes'; // API KEY HERE

export const supabase = createClient(supabaseUrl, supabaseKey);
