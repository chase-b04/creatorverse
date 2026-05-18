import { createClient } from '@supabase/supabase-js'
import ws from "ws";
const URL = 'https://corqhlawdynfujojzcmw.supabase.co'
const API_KEY = 'sb_publishable_s6VL98qI8jAnMI5Fq885Qg_vc30IeLl'
export const supabase = createClient(URL, API_KEY)
