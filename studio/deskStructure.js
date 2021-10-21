// ./studio/deskStructure.js

import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'

import resolveProductionUrl from './resolveProductionUrl'

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title('Preview'),
  ])
}

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Navigation')
        .schemaType('navigation')
        .child(S.documentTypeList('navigation').title("Navigation")),

    S.listItem()
        .title('Images In About Section')
        .schemaType('imageAboutSection')
        .child(S.documentTypeList('imageAboutSection').title("Image In About Us")),

      S.listItem()
        .title('Images On Landing Page')
        .schemaType('landingPageImg')
        .child(S.documentTypeList('landingPageImg').title("Images On Landing Page")),

      S.listItem()
        .title('External Links')
        .schemaType('externalLink')
        .child(S.documentTypeList('externalLink').title("External Link")),


      S.listItem()
        .title('Menu')
        .child(
          S.list()
          .title('Menu')
          .items([

            S.listItem()
              .title('Menu Section')
              .schemaType('menuSection')
              .child(S.documentTypeList('menuSection').title('Menu Sections')),
  
            S.listItem()
              .title('Menu Item')
              .schemaType('menuItem')
              .child(S.documentTypeList('menuItem').title('Menu Items'))   
 
          ])
        )
        
    
    ])
    