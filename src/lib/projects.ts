import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

const BASE = '/portfolio-astro';

/** Only keep image paths that actually exist in /public, so a missing
 *  screenshot falls back to the designed placeholder instead of a broken image. */
function resolveImage(image?: string): string | undefined {
  if (!image) return undefined;
  const rel = image.startsWith(BASE) ? image.slice(BASE.length) : image;
  return existsSync(join(process.cwd(), 'public', rel)) ? image : undefined;
}

export type Project = CollectionEntry<'projects'> & { imageSrc?: string };

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects
    .sort((a, b) => a.data.weight - b.data.weight)
    .map((p) => ({ ...p, imageSrc: resolveImage(p.data.image) }));
}

export const projectHref = (slug: string) => `${BASE}/projects/${slug}/`;
