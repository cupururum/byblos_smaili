import { useState, useEffect } from 'react'
import { sanityClient } from "../../lib/sanity.server";

import Header from './header'
import Footer from './footer'
import Sandwich from './sandwich'
import NavigationMain from './navigation-main';
import AcceptCookies from '../accept-cookies/accept-cookies';


function Layout(props) {

  const [isNavigationShouldBeVisible, setNavigationVisible] = useState(false)

  function showNavMain () {
    setNavigationVisible(true)
    
  }

  function hideNavMain () {
    setNavigationVisible(false)
  }


  const [ linksAndLogos, setlinksAndLogos ] = useState([]) 
  const [ navItems, setNavItems ] = useState([]) 

  if(!linksAndLogos){
      return <p>Loading</p>
  }

  useEffect(() => {
      sanityClient.fetch(`
      *[_type == "externalLink"]{
          title,
          _id,
          href,
          alt,
          imgFooter{
             asset->{
                url
             }
          }
      }`).then((data) => setlinksAndLogos(data)).catch(console.error)

      sanityClient.fetch(`
        *[_type == "navigation"]{
            title,
            _id,
            slug{
                current
            } 
        }`).then((data) => setNavItems(data)).catch(console.error)
      
  }, [])

    return (
      <div className='min-h-full font-serif '>
       
          {isNavigationShouldBeVisible && <NavigationMain linksAndLogos={linksAndLogos} navItems={navItems} onClick={hideNavMain}/>}
          { !isNavigationShouldBeVisible && <Sandwich onClick={showNavMain}/> }
          <Header navItems={navItems}/>
            <main>{props.children}</main>
          
            <Footer linksAndLogos={linksAndLogos}/>
            <AcceptCookies/>
          
      </div>
    ) 
    
}

export default Layout
