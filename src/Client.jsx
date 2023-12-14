

import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://rnfxudmccgbmguusqgem.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZnh1ZG1jY2dibWd1dXNxZ2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzNDgwNjQsImV4cCI6MjAxNzkyNDA2NH0.VbUnWZQhsg8KfAjpWBzkPwJAOQxYYRRxZyYWcF6nZ7Y')

export {
  supabase
}