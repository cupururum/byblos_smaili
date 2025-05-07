export default {
    name: 'cateringItem',
    title: 'Catering Item',
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
        name: 'description',
        title: 'Description',
        type: 'string',
      }
    ]
  }