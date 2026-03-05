-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY, -- This will be the Clerk User ID
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

-- Create policy to allow the service role (webhooks) to insert/update
-- Note: In a real app, you might want more restrictive policies, 
-- but since we're using the service_role for webhooks, it bypasses RLS by default.
