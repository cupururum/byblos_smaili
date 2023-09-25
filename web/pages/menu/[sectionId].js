import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'
import {usePreviewSubscription} from '../../lib/sanity'
import useWindowSize from '../../hooks/useWindowSize'

import { useRouter } from "next/router"

import Navigation from '../../components/menu/navigation'
import MenuItemsGrid from '../../components/menu/menu-items-grid'
import NavigationMobile from '../../components/menu/navigation-mobile'
import LunchOrBreakfast from '../../components/menu/lunch-or-breakfast'


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


function MenuSection({data, preview}){

    if (!data) {
        return (
          <div className="center">
            <p>Loading...</p>
          </div>
        );
      }

    

    const router = useRouter()

    const {data: previewData} = usePreviewSubscription(data?.query, {
        params: data?.menuSectionId ?? {},
        // The hook will return this on first render
        // This is why it's important to fetch *draft* content server-side!
        initialData: data?.menu,
        // The passed-down preview context determines whether this function does anything
        enabled: preview || router.query.preview !== undefined
      })

      const page = filterDataToSingleItem(previewData, preview)
      
    


    const windowSize = useWindowSize()

    let menuContent
    
    if (data.menuSectionId === "lunch" || data.menuSectionId === "breakfast") {

        menuContent = <LunchOrBreakfast lunch={data.menu.lunch} breakfast={data.menu.breakfast} activeSection={data.menuSectionId} windowSizeWidth={windowSize.width}/>
    } else {
        menuContent = <MenuItemsGrid menuItems={data.menu.menuItems}/>
    }

    if (windowSize.width < 1024 ) {
        return (
            <div className="px-7 pt-44 mb-36 min-h-full">
                <NavigationMobile menuSections={page.menuSections} activeSection={data.menuSectionId}/>
                {menuContent}
            </div>
        )
    }

    

    

    return(
        <div className="px-7 pt-44 mb-36 xsm:px-10 lg:flex  lg:px-0 lg:mb-0 lg:pb-44 lg:gap-4">
            <div className="lg:w-1/12"></div>
            <div className="lg:w-3/12 xl:w-3/12">
                <Navigation menuSections={page.menuSections} activeSection={data.menuSectionId}/>
            </div>
            <div className="lg:w-6/12 xl:w-6/12 2xl:w-7/12">{menuContent}</div>
            <div className="lg:w-1/12"></div>
        </div>
    )
}

export default MenuSection

export async function getStaticProps({params, preview = false }){
   
    const menuSectionId = params.sectionId 
  
     const menu = await getClient(preview).fetch(
        groq`{
            "menuItems": *[_type == 'menuItem' && references(*[_type=="menuSection" && slug.current == '${menuSectionId}']._id)]{
                _id,
                title,
                dishImage{
                    asset->{
                        url
                    }
                },
                price,
                new,
                vegeterian,
                ingredients
            },
            "menuSections": *[_type == 'menuSection']  | order(priority asc) 
            {
                _id,
                title,
                slug {
                    current
                }
            },
            "breakfast": *[_type == 'galleryPage' && galleryName == 'Breakfast images']{
                _id, 
                galleryDesktop{
                    images[]{_key, asset->{url}}
                },
                galleryTablet{
                    images[]{_key, asset->{url}}
                },
                galleryMobile{
                    images[]{_key, asset->{url}}
                }
            },
            "lunch": *[_type == 'galleryPage' && galleryName == 'Lunch images']{
                _id, 
                galleryDesktop{
                    images[]{_key, asset->{url}}
                    },
                galleryTablet{
                        images[]{_key, asset->{url}}
                    },
                galleryMobile{
                        images[]{_key, asset->{url}}
                    }
            }
        }`
    )

    if (!menu) return {notFound: true}

    const page = filterDataToSingleItem(menu.menuSections, preview)

    

    return {
       
        props: {  
            preview,
            data: { page, menu, menuSectionId }
        }
    }
}

export async function getStaticPaths() {
    const menuSectionsSlugs = await getClient().fetch(
        groq`*[_type == 'menuSection']{
                slug{
                    current
                }
        }`
    )

    const paths = menuSectionsSlugs.map(sectionSlug => (
        {
            params: {
                sectionId: sectionSlug.slug.current
            }
        }
    ))
    return {                   
      paths: paths,
      fallback: true,
    }
  }

