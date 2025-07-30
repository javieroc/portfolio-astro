import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		github: z.string().optional(),
		demo: z.string().optional(),
		stack: z.array(z.string()),
	})
})

export const collections = { projects };
