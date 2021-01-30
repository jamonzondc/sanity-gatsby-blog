export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6015519334cec952dae08eac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ya19uqqn',
                  apiId: 'a868d807-941c-4984-a776-d673e1d432d0'
                },
                {
                  buildHookId: '60155194bfa5d735dd31b974',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b3z7jevp',
                  apiId: '7cd57a9e-1873-41b3-b32d-dd520833a737'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamonzondc/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b3z7jevp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
