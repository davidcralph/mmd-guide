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
                text: 'Contribute',
                link: 'https://github.com/davidcralph/mmd-guide'
            }
        ]
    }
}