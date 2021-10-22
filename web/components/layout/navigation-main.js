import Link from 'next/link'

import NavbarItems from './navbar-items'

import Cross from './svg/cross'
import ByblosLogo from './svg/byblos-logo.js'

function NavigationMain(props){

    const { linksAndLogos } = props

    const { navItems } = props

    return (
        <div className="w-full h-full fixed inset-x-0 top-0 z-20 bg-romance overflow-scroll lg:px-16 xl:pl-24 4xl:px-40">
           <div className="flex justify-between px-10 pt-20 mb-8 xl:px-0  ">
                <Link href="/"><a > <ByblosLogo/></a></Link>
               <button className="focus:outline-none" onClick={props.onClick}>
                    <Cross/>
               </button> 
           </div>
           <div className="flex flex-col  space-y-7 pt-8 px-10 text-openNavTextMobile  xsm:space-y-10 md:text-openNavTextDesktop lg:space-y-16  xl:space-y-0 xl:px-0 xl:grid xl:grid-cols-3 xl:grid-flow-row xl:place-items-start xl:w-full xl:h-60  4xl:mr-144 4xl:mt-36">
                {navItems.map((item) => 
                        <div className="text-center xl:hover:underline" key={item._id} onClick={props.onClick}> 
                            <Link href={`/${item.slug.current}`}>{item.title}</Link>
                        </div>
                    )}
           </div> 
           <div className="md:mt-48 lg:flex lg:flex-row-reverse lg:justify-between lg:mt-32 4xl:mt-60 "> 
               <div className="grid grid-cols-3 gap-3 text-menu text-center px-16 mt-10 md:flex md:justify-between lg:px-0 lg:mt-0 "> 
                   {linksAndLogos.map((link) => 
                       <div className="py-3 lg:w-24 4xl:w-36"  key={link._id}>
                           <a href={link.href}> {link.title} </a>
                       </div>
                   )}
               </div> 
               <div className="text-center text-menu text-dusty-creme mt-5 lg:flex lg:h-12 lg:mt-0 lg:py-3">
                   <p className="md:inline-block md:mr-10" >© 2021 Byblos</p> 
                   <p className="md:inline-block">Privacy Policy</p>  
               </div>
           </div>
           
       </div>
    )

}

export default NavigationMain