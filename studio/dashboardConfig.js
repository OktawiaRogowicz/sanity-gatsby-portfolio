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
                  buildHookId: '62b988c57976580cd2721f53',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-b8odxzye',
                  apiId: 'c0ff0e68-4201-4c01-a9a2-3c72666556b3'
                },
                {
                  buildHookId: '62b988c6c0232315a5df5419',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-168dmops',
                  apiId: '9a628b79-5057-4ed5-b077-3540fedd1dab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OktawiaRogowicz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-168dmops.netlify.app',
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
