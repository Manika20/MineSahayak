import { createClient } from "@supabase/supabase-js";

const supabaseUrl =   "https://swokzzddmlobvodfufsu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2t6emRkbWxvYnZvZGZ1ZnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NDY3NDcsImV4cCI6MjAxMTIyMjc0N30.kyxbNiYhkoHCZrTpg6fM_r_viykZrVKBao7db_sU6CE"
export const supabase = createClient(supabaseUrl, supabaseKey)

