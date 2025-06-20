import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://saxaydalpcqiykdpybyk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNheGF5ZGFscGNxaXlrZHB5YnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NDY5MzUsImV4cCI6MjA2NjAyMjkzNX0.ijl1YAAq-SwfH7n0ebpvTJcZWN_DMkCQIrIXhV2ZAa0';

export const supabase = createClient(supabaseUrl, supabaseKey);
