// Site-wide constants. Edit these to personalize the blog.
export const SITE = {
  title: 'tomi',
  description: 'A public notebook of personal topics while studying and learning new things.',
  author: 'Tomás Juárez',
  homeHeadline: 'Notes from whatever I am currently learning.',
  authorBio:
    'I am a systems engineer. This blog is a public notebook — personal topics, notes, and experiments from whatever I am currently studying or learning. Less polished publication, more working drafts.',
  url: 'https://tomijuarez.github.io/blog',
  github: 'https://github.com/tomijuarez',
  // Optional portrait shown on the home page. Drop a file in /public/ (e.g. /portrait.jpg)
  // and set `avatar: '/portrait.jpg'`. Leave null to hide.
  avatar: null as string | null,
};

// Navigation shown in the top-right header.
export const NAV = [
  { label: 'HOME', href: '/' },
  { label: 'POSTS', href: '/archive' },
  { label: 'TAGS', href: '/tags' },
  { label: 'ABOUT', href: '/about' },
];
