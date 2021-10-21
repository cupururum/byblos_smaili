export default {
    title: 'Images for Landing Page',
    name: 'landingPageImg',
    type: 'document',
    fields: [
        {
            title: 'Hero Images',
            name: 'heroImg',
            type: 'array',
            of: [{title:'Hero Image', name:'heroImg', type: 'image', fields: [{title:'Alt', name:'alt', type:'string'}]}]
        },
        {
            title: 'About Images',
            name: 'aboutImg',
            type: 'array',
            of: [{title:'About Image', name:'aboutImg', type: 'image', fields: [{title:'Alt', name:'alt', type:'string'}]}]
        }
    ]
}