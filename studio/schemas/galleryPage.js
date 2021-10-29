export default {
    title: 'Gallery Page',
    name: 'galleryPage',
    type: 'document',
    fields: [
        {
            title: "Name",
            name: 'galleryName',
            type: 'string'
        },
        {
            title: 'Gallery Desktop',
            name: 'galleryDesktop',
            type: 'gallery',
        },
        {
            title: 'Gallery Tablet',
            name: 'galleryTablet',
            type: 'gallery',
        },
        {
            title: 'Gallery Mobile',
            name: 'galleryMobile',
            type: 'gallery',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug'
        }
    ]
}