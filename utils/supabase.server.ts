import { createServerClient } from "@supabase/auth-helpers-remix";
import type { Database } from '../db_types';

export default (req: Request, res: Response) => createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {request: req, response: res}
)