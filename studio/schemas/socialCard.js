export default {
    name: 'socialCard',
    title: 'Social Card',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'href',
        title: 'External link',
        type: 'url',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
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