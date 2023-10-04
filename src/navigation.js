import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'FAQs',
      href: getPermalink('/#faqs'),
    },
    {
      text: 'Documentation',
      href: 'https://docs.astronvim.com',
    },
  ],
  actions: [{ text: 'Get Started', icon: 'tabler:external-link', href: 'https://docs.astronvim.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'AstroNvim', href: 'https://docs.astronvim.com' },
        { text: 'AstroCommunity', href: 'https://git.astronvim.com/astrocommunity' },
      ],
    },
    {
      title: 'Plugins',
      links: [
        { text: 'AstroCore', href: 'https://git.astronvim.com/astrocore' },
        { text: 'AstroLSP', href: 'https://git.astronvim.com/astrolsp' },
        { text: 'AstroTheme', href: 'https://git.astronvim.com/astrotheme' },
        { text: 'AstroUI', href: 'https://git.astronvim.com/astroui' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Code of Conduct', href: getPermalink('/code_of_conduct') },
    { text: 'Contribution Guidelines', href: 'https://git.astronvim.com/AstroNvim/blob/main/.github/CONTRIBUTING.md' },
  ],
  socialLinks: [
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://hachyderm.io/@AstroNvim' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://github.com/AstroNvim' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.astronvim.com' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://reddit.com/r/AstroNvim' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://git.astronvim.com' },
  ],
  footNote: `
    &copy; The AstorNvim Team. This site is powered by <a class="hover:underline" href="https://www.netlify.com/">Netlify</a> and <a class="hover:underline" href="https://github.com/onwidget/astrowind">AstroWind</a>.
  `,
};
