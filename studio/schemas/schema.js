// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import socialCard from './socialCard'
import externalLink from './externalLink'
import navigation from './navigation' 
import menu from './menu'
import menuSection from './menuSection'
import menuItem from './menuItem'
import imageAboutSection from './imageAboutSection'
import landingPageImg from './landingPageImg'
import gallery from './objects/gallery'
import galleryPage from './galleryPage'
import blockContent from './objects/blockContent'
import article from './article'
import catering from './catering'
import cateringItem from './cateringItem'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    socialCard,
    navigation,
    menuSection,
    menuItem,
    menu,
    externalLink,
    imageAboutSection,
    landingPageImg,
    galleryPage,
    gallery,
    article,
    blockContent,
    catering,
    cateringItem

  ]),
})
