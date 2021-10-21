import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'
import Link from 'next/link'

import Navigation from '../../components/menu/navigation'
import MenuItemsGrid from '../../components/menu/menu-items-grid'




function MenuSection(props){

    const { menu, menuSectionId } = props 
    const { menuItems, menuSections } = menu

    console.log(menuItems)

    return(
        <div className="px-7 pt-44 mb-36 xsm:px-10 lg:flex lg:justify-between lg:px-0">
            <div className="lg:w-1/12"></div>
            <div className="lg:w-4/12 xl:w-3/12">
                <Navigation menuSections={menuSections} activeSection={menuSectionId}/>
            </div>
            <div className="lg:w-6/12 xl:w-6/12 2xl:w-7/12"><MenuItemsGrid menuItems={menuItems}/></div>
            <div className="lg:w-1/12"></div>
        </div>
    )
}

export default MenuSection

export async function getStaticProps(context){
    const menuSectionId = context.params.sectionId
    const menu = await getClient().fetch(
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

    

    return {
        props: { menu, menuSectionId }
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

