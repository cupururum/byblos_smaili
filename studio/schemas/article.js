export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: "excerpt",
        description:
          "Write a short pararaph of this post (For SEO Purposes)",
        title: "Excerpt",
        rows: 5,
        type: "text"
      },
      {
        name: 'mainImageDesktop',
        title: 'Main Image Desktop',
        type: 'gallery',
        options: {
          hotspot: true
        }
      },
      {
        name: 'mainImageTablet',
        title: 'Main Image Tablet',
        type: 'gallery',
        options: {
          hotspot: true
        }
      },
      {
        name: 'mainImageMobile',
        title: 'Main Image Mobile',
        type: 'gallery',
        options: {
          hotspot: true
        }
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
    ],
  
    preview: {
      select: {
        title: 'title'
      }
    }
  }