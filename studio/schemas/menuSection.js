export default {
    title: 'Menu Section',
    name: 'menuSection',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      // add a unique slug field for queries, permalinks etc
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          // auto generates a slug from the title field
          source: 'title',
          auto: true
        }
      },
      {
        title: 'Menu Items',
        name: 'menuItems',
        type: 'array',
        of: [
          {
            type: 'menuItem'
          },
          {
            type: 'reference',
            to: {type: 'menuItem'}
          }
        ]
      }
    ]
  }