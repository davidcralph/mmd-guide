import sidebar from './sidebar';

export default {
    lang: 'en-US',
    title: 'MMD Guide',
    description: 'A simple guide to freeware animation program MikuMikuDance (MMD)',
    theme: '@vuepress/theme-default',
    themeConfig: {
        sidebar,
        navbar: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Basics',
                link: '/basics/'
            },
            {
                text: 'Advanced',
                link: '/advanced/'
            },
            {
                text: 'Tutorials',
                link: '/tutorials/'
            },
            {
                text: 'Contribute',
                link: 'https://github.com/davidcralph/mmd-guide'
            }
        ]
    },
    head: [
        [
            'script',
            {},
            `const script = document.createElement('script');
            script.src = 'https://umami.davidcralph.co.uk/umami.js';
            script.setAttribute('data-website-id', '2bb78cae-a198-485f-ba7d-5e92300cc575');
            document.head.appendChild(script);`
        ]
    ]
};
