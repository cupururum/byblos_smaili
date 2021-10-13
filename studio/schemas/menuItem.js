export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'dishImage',
        title: 'Dish Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'ingredients',
        title: 'Ingredients',
        type: 'string',
      },
      {
        name: 'vegeterian',
        title: 'Vegeterian',
        type: 'boolean',
      },
      {
        name: 'new',
        title: 'New',
        type: 'boolean',
      },
      {
        title: 'Menu Section',
        name: 'menuSection',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'menuSection'},
              // etc
            ]
          }
        ]
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        href: "href",
        description: 'description',
        media: 'mainImage',
        categories: "categories"
      }
    }
  }