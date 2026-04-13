// Site-wide constants. Edit these to personalize the blog.
export const SITE = {
  title: 'THE MONOLITH',
  description: 'A digital manuscript — inquiries into the fabric of systems.',
  author: 'Tomás Juárez',
  authorBio:
    'I am a researcher and software architect obsessed with the intersection of theoretical physics and modern computation. This blog serves as a digital manuscript — an authoritative record of inquiries into the fabric of systems.',
  url: 'https://tomasjuarez.github.io/blog',
  github: 'https://github.com/tomasjuarez',
  // Optional portrait shown on the home page. Drop a file in /public/ (e.g. /portrait.jpg)
  // and set `avatar: '/portrait.jpg'`. Leave null to hide.
  avatar: null as string | null,
};

// Navigation shown in the top-right header.
export const NAV = [
  { label: 'HOME', href: '/' },
  { label: 'LIBRARY', href: '/archive' },
  { label: 'TAGS', href: '/tags' },
  { label: 'ABOUT', href: '/about' },
];
