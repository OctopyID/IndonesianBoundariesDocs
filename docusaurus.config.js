const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
    title: 'Indonesian Boundaries',
    tagline: 'Laravel package that provides a basic map of the country of Indonesia.',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'IndonesianBoundaries', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Indonesian Boundaries',
            logo: {
                alt: 'Indonesian Boundaries',
                src: 'img/indonesia-black.svg',
            },
            items: [
                {
                    to: 'docs/setup/installation',
                    activeBasePath: 'docs/setup/installation',
                    label: 'Documentation',
                    position: 'right',
                },
                {
                    to: 'blog', label: 'Blog', position: 'right'
                },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Indonesian Boundaries - Built with Docusaurus.`,
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/OctopyID/IndonesianBoundariesDoc/edit/master/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/OctopyID/IndonesianBoundariesDoc/edit/master/blog/',
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.scss'),
                    ],
                },
                remarkPlugins: [remarkImages],
                rehypePlugins: [rehypeTruncate],
            },
        ],
    ],
    plugins: [
        'docusaurus-plugin-sass'
    ]
};
