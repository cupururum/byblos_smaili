import { useState } from 'react'
import Link from "next/link"


function AcceptCookies() {

    const [isCookieBannerVisible, setCookieBannerVisible] = useState(true)

    function acceptOnClick() {
        setCookieBannerVisible(!isCookieBannerVisible)
    }

    return (
    <div>
            {isCookieBannerVisible && 
                <div className="fixed inset-x-0 bottom-0 w-full h-92 px-7 pt-8 bg-black bg-opacity-90 text-textBreakfastAndLunch text-white xsm:px-10 lg:h-64 xl:h-52 xl:py-16 xl:flex xl:justify-between xl:px-24 2xl:px-36 4xl:py-20">

                    <p className="pt-3 xl:w-1/2 xl:pt-0 3xl:w-3/4 3xl:pt-3"> Hej! Korzystamy z plików cookies w celu świadczenia Państwu usług na najwyższym poziomie. </p>

                    <div className="mt-9 xl:mt-0">
                        <div className="text-nav text-btn-color-hover lg:inline-block  lg:mr-10"> <Link href="/cookies">Privacy Policy</Link></div> 
                        <button className="w-56 h-16 mt-9 text-buttonJumbotron font-bold bg-white text-black focus:outline-none lg:hover:bg-btn-color-hover xl:mt-0" onClick={acceptOnClick}>
                            Akceptuj
                        </button>  
                    </div>
                
                </div>
            }
    </div>        
    )
}

export default AcceptCookies
