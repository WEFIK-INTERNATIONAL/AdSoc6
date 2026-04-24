export const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'About us', 
    href: '/about/adsoc',
    subLinks: [
      { name: 'About Adsoc', href: '/about/adsoc' },
      { name: 'About the Institute', href: '/about/institute' },
      { name: 'About the department', href: '/about/department' }
    ] 
  },
  { 
    name: 'Conference', 
    href: '/conference/committee',
    subLinks: [
      { name: 'Committee', href: '/conference/committee' },
      { name: 'Important dates', href: '/conference/dates' },
      { name: 'Submission guideline', href: '/conference/guidelines' },
      { name: 'Keynote speakers', href: '/conference/speakers' }
    ] 
  },
  { 
    name: 'Call for papers', 
    href: '/cfp/tracks',
    subLinks: [
      { name: 'Tracks', href: '/cfp/tracks' }
    ] 
  },
  { name: 'Contact us', href: '/contact' }
];
