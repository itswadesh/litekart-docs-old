module.exports = {
    title: 'Documentation for Litekart',
    description: 'Install and start Litekart with these simple steps',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
        ['link', { rel: 'shortcut icon', type: "image/png", href: '/assets/img/favicon.png' }]
    ],
    serviceWorker: true,
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Installation', link: '/installation-instructions.html' },
            { text: 'Guide', link: '/guide.html' },
            { text: 'Settings', link: '/settings.html' },
            { text: 'Directory Structure', link: '/directory-structure.html' },
            { text: 'Features', link: '/features.html' },
            { text: 'API', link: '/api.html' },
            { text: 'Manual', link: '/manual.html' },
            { text: 'History', link: '/history.html' },
            { text: 'Litekart', link: 'https://www.litekart.in' },
        ],
        serviceWorker: {
            updatePopup: true
        }
    }
}