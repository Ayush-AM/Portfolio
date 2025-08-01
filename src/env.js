import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // 1. Define server-side environment variables
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),

    AUTH_DISCORD_ID:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),

    AUTH_DISCORD_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),

    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  // 2. Define client-side environment variables here (must be prefixed with NEXT_PUBLIC_)
  client: {
    // Example (uncomment if needed):
    // NEXT_PUBLIC_API_URL: z.string().url(),
  },

  // 3. Load from process.env
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    NODE_ENV: process.env.NODE_ENV,

    // Client envs example:
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // 4. Skip validation when needed (e.g., Docker builds)
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  // 5. Treat empty strings as undefined
  emptyStringAsUndefined: true,
});
