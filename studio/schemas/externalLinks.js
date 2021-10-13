export default {
    title: 'External Links',
    name: 'externalLink',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'URL',
        name: 'href',
        type: 'url'
      },
      {
        title: 'Image for Cards',
        name: 'imgCards',
        type: 'image'
      },
      {
        title: 'Image for Footer',
        name: 'imgFooter',
        type: 'image'
      },
      {
        title: "Alternative text",
        name: 'alt',
        type: 'string'
      }
    ]
  }

