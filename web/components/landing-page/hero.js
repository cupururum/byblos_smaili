import { useState } from 'react'
import Link from 'next/link'

import Logistics from '../logistics/logistics';
import BookTheTable from '../booking/booking';




function Hero(props) {
    const hummus = props.images[0]
    const centralPlate = props.images[1]
    const babaganush = props.images[2]

    const [isBookingFormVisible, setBookingFormVisible] = useState(false)

    function bookTheTableOnClick() {
        setBookingFormVisible(true) 
    }

    function bookTheTableCrossOnClick() {
        setBookingFormVisible(false) 
    }




    return (
        <div className="bg-romance pt-28">

            {isBookingFormVisible && <BookTheTable crossOnClick={bookTheTableCrossOnClick}/> }

            <div className='flex justify-start'>
                <div className="w-0 lg:w-1/12"></div>
                <div className="w-10/12">
                    <Logistics textStyle={"text-headerTextAdress font-bold mt-12 ml-10 lg:mt-16 lg:ml-0"}
                          logoStyle={"mr-1"}/>
                </div>
                <div className="w:0 lg:w-1/12"></div>
            </div>
           
           
            
            <div className="mt-32 mb-28 px-12 text-addressTextInContactUsMobile text-center lg:mx-24 lg:mt-5 lg:mb-10 xl:absolute xl:top-48 xl:mt-4 xl:px-0 xl:mx-76 3xl:static 4xl:mb-20 4xl:px-0 4xl:mx-108">
                <div className=" mb-20 lg:mb-5 xl:mb-6 dxl:mb-8 3xl:mb-16">
                    <p className="md:px-24 xl:mb-6  3xl:text-addressTextInContactUsDesktop 3xl:mb-8">Prawdziwa kuchnia libańska ma niepowtarzalny smak.</p>
                    <p className="hidden  xl:block xl:text-aboutText 3xl:px-12 3xl:px-24  3xl:text-bodytextAdress">Kombinacje przypraw oraz duża ilość warzyw sprawiają, że dania kuchni libańskiej są niezwykle różnorodne zarówno pod względem smaku, jak i kolorystyki.</p>
                </div>
                <button className="w-56 h-16 mb-5 border-2 border-black text-buttonJumbotron font-bold focus:outline-none lg:hover:bg-btn-color-hover lg:hover:border-0 md:mr-5 4xl:mr-10" onClick={bookTheTableOnClick}>
                        Rezerwacja
                </button>
                <Link href='#orderOnline'>
                    <button className="w-56 h-16 text-buttonJumbotron font-bold bg-white focus:outline-none lg:hover:bg-btn-color-hover ">
                        Zamów online
                    </button>
                </Link>
            </div>
            <div className="flex justify-between h-132 lg:h-88 xl:h-100 xl:mt-64 dxl:h-116 2xl:h-128 3xl:mt-0  4xl:h-180">
            
                <img className="hidden object-contain lg:block lg:w-72 lg:h-84 lg:mt-0 xl:w-88 xl:h-100 dxl:w-92 dxl:h-104 2xl:w-100 2xl:h-116 4xl:w-132 4xl:h-152" src={hummus.asset.url} alt="hummus" width={653} height={600}/> 
                
                <img className="object-cover w-160 h-160 md:mx-16  lg:object-contain  lg:w-112 lg:h-108 lg:mt-0 lg:mx-0 xl:w-144 xl:h-144 dxl:w-148 dxl:h-148 2xl:w-160 2xl:h-160 4xl:w-212 4xl:h-212 " src={centralPlate.asset.url} alt="centerPlate"/>
                
                <img className="hidden object-contain lg:block lg:w-72 lg:h-84 xl:w-88 xl:h-104 2xl:w-100 2xl:h-116 4xl:w-132 4xl:h-152" src={babaganush.asset.url} alt="rightPlate"/> 
            </div> 
        </div>

    )
}

export default Hero
