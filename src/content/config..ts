import { defineCollection, z } from "astro:content";

const avisos = defineCollection({
  schema: z.object({
    titulo: z.string(),
    fecha: z.string(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = {
  avisos,
};