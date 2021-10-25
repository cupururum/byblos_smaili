import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'
import {usePreviewSubscription} from '../../lib/sanity'
import useWindowSize from '../api/useWindowSize'

import Navigation from '../../components/menu/navigation'
import MenuItemsGrid from '../../components/menu/menu-items-grid'
import NavigationMobile from '../../components/menu/navigation-mobile'

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

    if (!data.menu || !data.menuSectionId) {
        return (
          <div className="center">
            <p>Loading...</p>
          </div>
        );
      }

    const {data: previewData} = usePreviewSubscription(data?.query, {
        params: data?.menuSectionId ?? {},
        // The hook will return this on first render
        // This is why it's important to fetch *draft* content server-side!
        initialData: data?.menu,
        // The passed-down preview context determines whether this function does anything
        enabled: preview,
      })

      const page = filterDataToSingleItem(previewData, preview)
      console.log(page)
    


    const windowSize = useWindowSize()

    if (windowSize.width < 780 ) {
        return (
            <div className="px-7 pt-44 mb-36 min-h-full">
                <NavigationMobile menuSections={page.menuSections} activeSection={data.menuSectionId}/>
                <MenuItemsGrid menuItems={data.menu.menuItems}/>
            </div>
        )
    }

    return(
        <div className="px-7 pt-44 mb-36 xsm:px-10 lg:flex lg:justify-between lg:px-0">
            <div className="lg:w-1/12"></div>
            <div className="lg:w-5/12 xl:w-3/12">
                <Navigation menuSections={page.menuSections} activeSection={data.menuSectionId}/>
            </div>
            <div className="lg:w-5/12 xl:w-6/12 2xl:w-7/12"><MenuItemsGrid menuItems={data.menu.menuItems}/></div>
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
            "menuSections": *[_type == 'menuSection']{
                _id,
                title,
                slug {
                    current
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

