// Supabase client for Node.js backend
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://bpxrqmtbgmpmeefqfqoy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJweHJxbXRiZ21wbWVlZnFmcW95Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTI2MjA2MywiZXhwIjoyMDk0ODM4MDYzfQ.kI48w0mjV89CxkSNfcFlzSnA-AdzbsmD_pXMYeGlPL4'; // service_role key, only for backend

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
