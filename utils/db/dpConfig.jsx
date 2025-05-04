//postgresql://neondb_owner:npg_6Vkl2biIWpyZ@ep-weathered-fire-a4d2o1fh-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });