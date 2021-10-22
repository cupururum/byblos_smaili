import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'
import useWindowSize from '../api/useWindowSize'

import Navigation from '../../components/menu/navigation'
import MenuItemsGrid from '../../components/menu/menu-items-grid'
import NavigationMobile from '../../components/menu/navigation-mobile'


function MenuSection(props){

    if (!props.menu || !props.menuSectionId) {
        return (
          <div className="center">
            <p>Loading...</p>
          </div>
        );
      }

    const windowSize = useWindowSize()

    if (windowSize.width < 780 ) {
        return (
            <div className="px-7 pt-44 mb-36 min-h-full">
                <NavigationMobile menuSections={props.menu.menuSections} activeSection={props.menuSectionId}/>
                <MenuItemsGrid menuItems={props.menu.menuItems}/>
            </div>
        )
    }

    return(
        <div className="px-7 pt-44 mb-36 xsm:px-10 lg:flex lg:justify-between lg:px-0">
            <div className="lg:w-1/12"></div>
            <div className="lg:w-5/12 xl:w-3/12">
                <Navigation menuSections={props.menu.menuSections} activeSection={props.menuSectionId}/>
            </div>
            <div className="lg:w-5/12 xl:w-6/12 2xl:w-7/12"><MenuItemsGrid menuItems={props.menu.menuItems}/></div>
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
      fallback: false,
    }
  }

