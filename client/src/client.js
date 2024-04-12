import {createClient} from '@supabase/supabase-js'
const URL = '<insert your URL here>'
const API_KEY = '<insert your API key here>'

export const supabase = createClient(URL, API_KEY)