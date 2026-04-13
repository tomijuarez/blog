import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

// Returns published (non-draft) posts sorted newest first.
export async function getPublishedPosts(): Promise<Post[]> {
  const isProd = import.meta.env.PROD;
  const posts = await getCollection('posts', ({ data }) => {
    return isProd ? data.draft !== true : true;
  });
  return posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

// Collect every tag in use, with how many posts use it.
export async function getAllTags(): Promise<Array<{ tag: string; count: number }>> {
  const posts = await getPublishedPosts();
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function formatDate(d: Date): string {
  return d
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })
    .toUpperCase();
}
