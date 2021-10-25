import { useState } from 'react'

import NavigationMobileItem from "./navigation-mobile-item"
import NavigationMobileActiveItem from "./navigation-mobile-active-item"

function NavigationMobile(props){
 
    const [navOpen, setNavOpen] = useState(false)

    function handleNavOnClick(e) {
        e.preventDefault()
        setNavOpen(!navOpen)
    }
    

    return(
            <div  className="relative mt-4 z-10 bg-white pb-4">
                <NavigationMobileActiveItem activeSection={props.activeSection} onClick={handleNavOnClick}/>
                { navOpen && 
                        <div className="abosute origin-top-right absolute right-0 w-full z-10 bg-white">
                           { props.menuSections.filter(section => section.title.toLowerCase() !== props.activeSection ).map((section) => 
                                    <NavigationMobileItem key={section._id}
                                                          title={section.title}
                                                          slug={section.slug.current}
                                                          activeSection={props.activeSection}
                                                          onClick={handleNavOnClick}/>
                                        )
                            } 
                        </div>
                }
            </div>       
    )
}

export default NavigationMobile