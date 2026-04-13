// Site-wide constants. Edit these to personalize the blog.
export const SITE = {
  title: 'tomi',
  description: 'Apuntes personales mientras estudio y aprendo cosas nuevas.',
  author: 'Tomás Juárez',
  homeHeadline: 'Apuntes de lo que estoy aprendiendo.',
  authorBio:
    'Soy ingeniero de sistemas. Este blog es un lugar para publicar temas personales — notas, pruebas y apuntes mientras estudio o aprendo cosas nuevas. Más un cuaderno público que una publicación pulida.',
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
