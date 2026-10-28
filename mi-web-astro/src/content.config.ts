import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        base: "./src/content/posts",
        pattern: ["**/*.md", "**/*.mdx"],
    }),
    schema: z.object({
        titulo: z.string(),
        fecha: z.string(),
        autor: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const proyectos = defineCollection({
    loader: glob({
        base: "./src/content/proyectos",
        pattern: "**/*.mdx",
    }),
    schema: z.object({
        titulo: z.string(),
        autor: z.string(),

    }),
});


export const collections = { blog, proyectos };