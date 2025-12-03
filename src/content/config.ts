import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    stack: z.array(z.string()),
    weight: z.number(),
  })
})

export const collections = { projects };
