module.exports = {
  title: 'Beaker Docs',
  url: 'https://docs.beakerbrowser.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  themeConfig: {
    navbar: {
      title: 'Beaker Docs',
      logo: {
        alt: 'Beaker Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      links: [
        {
          href: 'https://beakerbrowser.com/install/',
          label: 'Install',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://beaker.dev/docs/templates/',
          label: 'Templates',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://beaker.dev/docs/tutorials/',
          label: 'Tutorials',
          position: 'left',
          target: '_self',
        },
        {
          href: 'https://github.com/beakerbrowser/beaker/discussions',
          label: 'Ask Questions',
          position: 'left',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/beakerbrowser/beaker/edit/master/docs/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
