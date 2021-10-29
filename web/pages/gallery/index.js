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
      function onClickImage() {
          setActiveViewMode(true)
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
     console.log(page)

     const windowSize = useWindowSize()

     let displayGallery

     if(windowSize.width >= 1000){
         displayGallery = <GalleryDesktop images={page.galleryDesktop.images} clickOnImage={onClickImage}/>
     }
     if( windowSize.width <1000 ) {
         displayGallery = <GalleryTablet images={page.galleryTablet.images} clickOnImage={onClickImage}/>
     }
     if(windowSize.width < 701) {
        displayGallery = <GalleryMobile images={page.galleryMobile.images} clickOnImage={onClickImage}/>
     }
    
    return(
        <div className="">
            {isVewModeActive && <ViewMode images={page.galleryMobile.images} crossOnClickViewMode={crossOnClickViewMode}/>} 
            {displayGallery}
             <div className="w-64 h-64 bg-black group flex justify-center hover:opacity-75">
                <div className="w-10 h-10 bg-red-400 self-center opacity-0 group-hover:opacity-100"></div>
            </div>
        </div>
       
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