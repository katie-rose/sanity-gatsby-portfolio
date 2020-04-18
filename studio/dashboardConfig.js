export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e9b3e9934c71981aebb99b5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-f43e92y6',
                  apiId: '2b0218c3-fd01-476a-b337-9e61512797e3'
                },
                {
                  buildHookId: '5e9b3e996446edb7c398867d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uqerdca5',
                  apiId: '0ef54ad5-7dcd-4828-a75e-dfe7d11f4b55'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/katie-rose/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uqerdca5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
