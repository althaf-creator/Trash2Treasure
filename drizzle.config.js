export default {
    dialect: "postgresql",
    schema: "C:/Users/ALTHAF AHAMED/my-app-leo/utils/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
      url: process.env.DATABASE_URL,
      connectionString: process.env.DATABASE_URL,
    },
  };