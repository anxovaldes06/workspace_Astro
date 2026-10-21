import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/*.md",
    }),
    schema: z.object({
        titulo: z.string(),
        fecha: z.string(),
        autor: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };