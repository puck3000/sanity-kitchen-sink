export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5eb4f08765fde3794324414b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1upnfibf',
                  apiId: '84514133-84a2-4e24-8d2f-e38c25260116'
                },
                {
                  buildHookId: '5eb4f0873eca3bc798dd329a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pkitdfx7',
                  apiId: '2e21de0e-9ad4-4cbd-b70f-51dc722a519f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/puck3000/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pkitdfx7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
