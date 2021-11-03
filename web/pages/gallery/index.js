import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'
import {usePreviewSubscription} from '../../lib/sanity'
import useWindowSize from '../../hooks/useWindowSize'

import { useState } from 'react'

import GalleryMobile from '../../components/gallery/gallery-mobile'
import GalleryDesktop from '../../components/gallery/gallery-desktop'
import GalleryTablet from '../../components/gallery/gallery-tablet'
import ViewMode from '../../components/slider/view-mode'


function filterDataToSingleItem(data, preview) {


     
    if (!Array.isArray(data)) {
      return data
    }
  
    if (data.length === 1) {
      return data[0]
    }
  
    if (preview) {
      return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
    }
  
    return data[0]
  }

function Gallery({data, preview}){
    if (!data) {
        return (
          <div className="">
            <p>Loading...</p>
          </div>
        );
      }

      const [isVewModeActive, setActiveViewMode] = useState(false)
      const [initialSlide, setInitialSlide] = useState(0)
      function onClickImage(e) {
          setActiveViewMode(true)
        
          const findInitialSlide = parseInt(e.target.attributes.index.value, 10)
          setInitialSlide(findInitialSlide)
      }
      function crossOnClickViewMode() {
          setActiveViewMode(false)
      }

      const {data: previewData} = usePreviewSubscription(data?.query, {
        params: data?.gallerySlug ?? {},
        // The hook will return this on first render
        // This is why it's important to fetch *draft* content server-side!
        initialData: data?.images,
        // The passed-down preview context determines whether this function does anything
        enabled: preview,
      })
      const page = filterDataToSingleItem(previewData, preview)
    

     const windowSize = useWindowSize()

     let displayGallery
     let imagesForViewMode

     if(windowSize.width >= 1000){
         displayGallery = <GalleryDesktop images={page.galleryDesktop.images} clickOnImage={onClickImage}/>
         imagesForViewMode = page.galleryDesktop.images


     }
     if( windowSize.width <1000 ) {
         displayGallery = <GalleryTablet images={page.galleryTablet.images} clickOnImage={onClickImage}/>
         imagesForViewMode = page.galleryTablet.images
     }
     if(windowSize.width < 701) {
        displayGallery = <GalleryMobile images={page.galleryMobile.images} clickOnImage={onClickImage}/>
        imagesForViewMode = page.galleryMobile.images
     }
    
    return(
        <>
            <div className="grid grid-cols-4">
                <div className="row-span-2 col-span-2"></div>
                <div className="row-span-1 col-span-1"></div>
                <div className="row-span-1 col-span-2"></div>
                <div className="row-span-2 col-span-1"></div>
            </div>
            {isVewModeActive && <ViewMode images={imagesForViewMode} crossOnClickViewMode={crossOnClickViewMode} initialSlide={initialSlide}/>} 
            {displayGallery}
             
        </>
       
    )
}

export default Gallery

export async function getStaticProps({params, preview = false }){
    const gallerySlug = 'gallery'
    const images = await getClient(preview).fetch(groq`
               *[_type == 'galleryPage' && galleryName == 'gallery page']{
                        _id, 
                        galleryDesktop{
                            images[]{_key, display, asset->{url}}
                        },
                        galleryTablet{
                            images[]{_key, display, asset->{url}}
                        },
                        galleryMobile{
                            images[]{_key, display, asset->{url}}
                          }                                
                }`)

    const page = filterDataToSingleItem(images, preview)

    

    return {
       
        props: {  
            preview,
            data: { page, images, gallerySlug }
        }
    }
}