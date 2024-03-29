module.exports = {
    // 基本配置
    title: '浮槎游记',
    description: '就只是安静的，写一些东西，做一些努力',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ],
    // GitHub Pages 路由
    base: '/docs/', 
    markdown: {
        lineNumbers: true, // 代码块显示行号
    },
    //主题配置
    themeConfig: {
        repo: 'KeyAI/docs',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 假如文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '源文档',
        nav: [
            { text: '首页', link: '/' },
            { text: '笔记', link: '/notes/' },
            { text: '札册', link: '/books/' },
            { text: '轻文档', link: '/lightdocs/' },
            { text: '开发笔记', link: '/dev/' },
            { text: '学习日记', link: '/diaries/' },
        ],
        sns: {
            github: {
                account: 'KeyAI',
                link: 'https://github.com/KeyAI'
            }
        },
        lastUpdated: '上次更新',
        sidebar: {
            '/notes/': [
                ['', '笔记'],
            ],
            '/books/': [
                ['', '札册'],
            ],
            '/lightdocs/': [
                ['', '轻文档'],
                ['vim', 'Vim'],
                ['git', 'Git'],
                ['VSCode', 'VSCode'],
            ],
            '/dev/': [
                ['', '开发笔记'],
            ],
            '/diaries/': [
                ['', '学习日记'],
                {
                    title: '21-07',
                    children: [
                        '/diaries/21-07/210721',
                        '/diaries/21-07/210720',
                        '/diaries/21-07/210719',
                        '/diaries/21-07/210716',
                        '/diaries/21-07/210708',
                        '/diaries/21-07/210706',
                    ]
                },
                {
                    title: '21-04',
                    children: [
                        '/diaries/21-04/M4W3',
                        '/diaries/21-04/M4W2',
                    ]
                },
                {
                    title: '21-03',
                    children: [
                        '/diaries/21-03/M3W5',
                        '/diaries/21-03/M3W3',
                    ]
                },
                {
                    title: '21-02',
                    children: [
                        '/diaries/21-02/M2W4',
                        '/diaries/21-02/M2W3',
                        '/diaries/21-02/M2W2',
                        '/diaries/21-02/M2W1',
                    ]
                },
                {
                    title: '21-01',
                    children: [
                        '/diaries/21-01/M1W4',
                    ]
                },
                {
                    title: '20-12',
                    children: [
                        '/diaries/20-12/12-02',
                        '/diaries/20-12/12-01',
                    ]
                },
                {
                    title: '20-11',
                    children: [
                        '/diaries/20-11/11-30',
                        '/diaries/20-11/11-29',
                        '/diaries/20-11/11-27',
                        '/diaries/20-11/11-26',
                        '/diaries/20-11/11-25',
                        '/diaries/20-11/11-24',
                        '/diaries/20-11/11-23',
                        '/diaries/20-11/11-22',
                        '/diaries/20-11/11-16',
                        '/diaries/20-11/11-07',
                        '/diaries/20-11/11-05',
                        '/diaries/20-11/11-04',
                        '/diaries/20-11/11-02',
                    ]
                },
                {
                    title: '20-10',
                    children: [
                        '/diaries/20-10/10-30',
                        '/diaries/20-10/10-28',
                        '/diaries/20-10/10-27',
                        '/diaries/20-10/10-24',
                        '/diaries/20-10/10-23',
                        '/diaries/20-10/10-22',
                        '/diaries/20-10/10-21',
                    ]
                },
                {
                    title: '20-08',
                    children: [
                        '/diaries/20-08/08-01',
                    ]
                },
                // {
                //     title: '20-06',
                //     // path: '/foo/',      // 标题的跳转链接，应为绝对路径且必须存在
                //     // collapsable: false, // 默认值是 true,设置 false 来让一个组永远都是展开状态。
                //     // sidebarDepth: 1,    // 默认值是 1
                //     children: [
                //         '/diaries/20-06/06-08',
                //         '/diaries/20-06/06-11',
                //         '/diaries/20-06/06-19',
                //         '/diaries/20-06/06-24',
                //         // {
                //         //     title: 'week2',
                //         //     sidebarDepth: 0,
                //         //     children: [
                //         //         '/diaries/20-06/06-08',
                //         //         '/diaries/20-06/06-11',
                //         //         '/diaries/20-06/06-24',
                //         // },
                //         // {
                //         //     title: 'week3',
                //         //     sidebarDepth: 0,
                //         //     children: [
                //         //         '/diaries/20-06/06-19',
                //         //         '/diaries/20-06/06-20',
                //         //         '/diaries/20-06/06-21',
                //         //     ]
                //         // },

                //     ]
                // },

            ]
        },
    }

}