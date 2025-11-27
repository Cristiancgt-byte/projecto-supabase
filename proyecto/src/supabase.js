// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dntwzzlfncpdwkobvykm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRudHd6emxmbmNwZHdrb2J2eWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODY4ODQsImV4cCI6MjA3OTc2Mjg4NH0.tqgka5763zFrDtX6vfyZ5idaNL4cyWBR5Toac2anXm0';

export const supabase = createClient(supabaseUrl, supabaseKey);