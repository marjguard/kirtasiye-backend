create table public.cases (
  id uuid default gen_random_uuid() primary key,
  customer_name text,
  channel text,
  message text,
  status text,
  created_at timestamp default now()
);

create table public.products (
  id uuid default gen_random_uuid() primary key,
  case_id uuid references public.cases(id) on delete cascade,
  product_name text,
  quantity numeric,
  unit text,
  logo_code text,
  price numeric,
  discount numeric
);

create table public.files (
  id uuid default gen_random_uuid() primary key,
  case_id uuid references public.cases(id) on delete cascade,
  file_url text
);
