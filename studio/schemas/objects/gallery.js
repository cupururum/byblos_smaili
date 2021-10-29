export default {
    name: 'gallery',
    type: 'object',
    title: 'Gallery',
    fields: [
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                options: {
                  isHighlighted: true // <-- make this field easily accessible
                }
              },
              { 
                title: 'Display',
                name: 'display',
                type: 'string' ,
                options: { 
                          list:[ 
                                {title: "none",  value: ''},
                                {title: "2x2",  value: 'row-span-2 col-span-2'},
                                {title: "1x1",  value: 'row-span-1 col-span-1'},
                                {title: "2x1",  value: 'row-span-2 col-span-1'},
                                {title: "1x2",  value: 'row-span-1 col-span-2'}
                                
                          ],
                          layout: 'radio',
                          isHighlighted: true 
                        } 
              },

            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: 'zoom',
        type: 'boolean',
        title: 'Zoom enabled',
        description: 'Should we enable zooming of images?',
      },
    ],
    preview: {
      select: {
        images: 'images',
        image: 'images.0',
      },
      prepare(selection) {
        const { images, image } = selection;
  
        return {
          title: `Gallery block of ${Object.keys(images).length} images`,
          subtitle: `Alt text: ${image.alt}`,
          media: image,
        };
      },
    },
  };