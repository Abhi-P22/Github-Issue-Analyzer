import { z } from "zod";

export const scanSchema = z.object({
  repo: z.string().min(1)
});

export const analyzeSchema = z.object({
  repo: z.string().min(1),
  prompt: z.string().min(1)
});
