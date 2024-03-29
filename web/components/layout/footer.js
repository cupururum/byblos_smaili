import { useState } from 'react'

import Link from 'next/link'
import ByblosLogo from './svg/byblos-logo'
import Logistics from '../logistics/logistics'

import BookTheTable from '../booking/booking'

function Footer(props) {

   const { linksAndLogos} = props
  
    if(!linksAndLogos){
        return <p>Loading</p>
    }

    const [isBookingFormVisible, setBookingFormVisible] = useState(false)

    function bookTheTableOnClick() {
        setBookingFormVisible(true) 
    }

    function bookTheTableCrossOnClick() {
        setBookingFormVisible(false) 
    }

    

 return(
     <>
        {isBookingFormVisible && <BookTheTable crossOnClick={bookTheTableCrossOnClick}/> }
        <footer className="w-full px-16 pt-24 h-156  bg-romance xsm:px-24 sm:flex sm:justify-between  sm:h-116 sm:px-10 sm:pt-16 md:h-96   lg:absolute lg:bottom-0  lg:h-36 lg:py-8 lg:px-16  xl:h-28 xl:py-6 xl:px-20 2xl:px-36 ">
        
                <div className="xl:flex xl:space-x-5 ">
                        <Link href="/"> <ByblosLogo style={"w-40 h-7 lg:mt-5"}/></Link>
                        <div className="hidden text-dusty-creme text-nav sm:block sm:mt-80 md:mt-56 sm:pt-2 lg:mt-3 xl:mt-4 ">
                            <p className="inline-block mr-4 xsm:ml-2 lg:ml-0 3xl:mr-8">© 2023 Byblos</p>
                            <p className="inline-block"><Link href="/cookies">Privacy Policy</Link></p>
                </div>
                </div>



                <div className="lg:flex lg:space-x-10">   
                    <Logistics  textStyle={"text-headerTextAdress font-bold mt-24 ml-7 md:mt-0 md:ml-0 md:space-y-4 xl:space-y-2  xl:mt-2 xl:h-9 3xl:mt-5 3xl:space-y-0 3xl:flex "}
                                logoStyle={"mr-2 lg:h-6"}
                                addressStyle={"lg:pt-1 3xl:mr-6"}/>
                                    
                    <button className="w-56 h-16 mt-16  text-buttonJumbotron font-bold bg-white focus:outline-none md:w-84 lg:w-56 lg:hover:bg-btn-color-hover lg:mt-1" onClick={bookTheTableOnClick}>
                        Rezerwacja
                    </button>

                                    
                    
                    <div className="space-x-4 mt-16 ml-2 xsm:ml-5 md:space-x-7 md:ml-0 lg:grid lg:grid-cols-3 lg:space-x-0 lg:gap-2 lg:mt-0 lg:h-16  xl:grid-cols-6  xl:mt-6">
                        {
                            linksAndLogos.map(linkAndLogo => 
                                <div className="inline-block" key={linkAndLogo._id}>
                                    <a href={linkAndLogo.href}><img className="w-5 h-5 md:w-8 md:h-8 xl:w-5 xl:h-5" src={linkAndLogo.imgFooter.asset.url} alt={linkAndLogo.alt}/></a>
                                </div> 
                            )
                        }
                    </div>
                </div>
                <div className="mt-16  text-dusty-creme text-nav sm:hidden">
                        <p className="inline-block mr-2 xsm:mr-3 ">© 2023 Byblos</p>
                        <p className="inline-block"><Link href="/cookies">Privacy Policy</Link></p>
                </div>
        
        </footer>
    </>
 ) 
}

export default Footer