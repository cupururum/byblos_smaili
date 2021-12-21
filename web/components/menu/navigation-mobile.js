import { useState } from 'react'
import 'animate.css'

import NavigationMobileItem from "./navigation-mobile-item"
import NavigationMobileActiveItem from "./navigation-mobile-active-item"

function NavigationMobile(props){
 
    const [navOpen, setNavOpen] = useState(false)

    function handleNavOnClick(e) {
        e.preventDefault()
        setNavOpen(!navOpen)
    }
    

    return(
            <div  className="relative mt-4 z-10 bg-white pb-4 ">
                <NavigationMobileActiveItem activeSection={props.activeSection} onClick={handleNavOnClick}/>
                { navOpen && 
                        <div className="absolute right-0 w-full z-10  overflow-hidden  ">
                            <div className="bg-white animate__animated animate__slideInDown">
                           { props.menuSections.filter(section => section.title.toLowerCase() !== props.activeSection ).map((section) => 
                                    <NavigationMobileItem key={section._id}
                                                          title={section.title}
                                                          slug={section.slug.current}
                                                          activeSection={props.activeSection}
                                                          onClick={handleNavOnClick}/>
                                        )
                            } 
                            </div>
                        </div>
                }
            </div>       
    )
}

export default NavigationMobile