import { z } from "zod";

export const dohaSchema = z.object({
  id: z.string(),
  hindi: z.string(),
  transliteration: z.string(),
  translation: z.string(),
  moods: z.array(z.string()),
});

export type Doha = z.infer<typeof dohaSchema>;

export const moodSchema = z.object({
  name: z.string(),
  count: z.number(),
});

export type Mood = z.infer<typeof moodSchema>;
