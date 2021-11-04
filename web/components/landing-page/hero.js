import Link from 'next/link'

import Logistics from '../logistics/logistics';




function Hero(props) {
    const hummus = props.images[0]
    const centralPlate = props.images[1]
    const babaganush = props.images[2]
    return (
        <div className="bg-romance pt-28">
            
            <Logistics textStyle={"text-headerTextAdress font-bold mt-12 ml-10 lg:ml-20 lg:mt-16 lg:space-y- xl:ml-24 2xl:ml-36"}
                          logoStyle={"mr-2 mt-"}/>
           
            
            <div className="mt-32 mb-28 px-12 text-mobileIntroTextDesk text-center lg:mx-24 lg:mt-12  lg:text-dxlIntroTextDesk dxl:mx-80 dxl:mt-20 4xl:h-68 4xl:px-0 4xl:mx-108  4xl:mt-24 4xl:mb-52 4xl:text-introTextDesk  5xl:mx-172">
                <div className=" mb-20 lg:mb-5 xl:mb-6 dxl:mb-8 4xl:mb-16">
                    <p className="md:px-24 lg:px-0">Prawdziwa kuchnia libańska ma niepowtarzalny smak.</p>
                    <p className="hidden md:block md:px-12 lg:px-0">Kombinacje przypraw oraz duża ilość warzyw sprawiają, że dania kuchni libańskiej są niezwykle różnorodne zarówno pod względem smaku, jak i kolorystyki.</p>
                </div>
                <button className="w-56 h-16 mb-5 border-2 border-black text-buttonJumbotron font-bold focus:outline-none lg:hover:bg-btn-color-hover lg:hover:border-0 md:mr-5 4xl:mr-10">
                        Rezerwacja
                </button>
                <Link href='#orderOnline'><button className="w-56 h-16 text-buttonJumbotron font-bold bg-white focus:outline-none lg:hover:bg-btn-color-hover ">
                        Zamów online
                </button></Link>
            </div>
            <div className="flex justify-between h-132 lg:h-88 xl:h-132 dxl:h-136 2xl:h-148 3xl:h-152 4xl:h-196">
            
                <img className="hidden object-contain lg:block lg:w-72 lg:h-84 lg:mt-20 xl:w-88 xl:h-100 xl:mt-28 dxl:w-92 dxl:h-104 dxl:mt-28 2xl:w-100 2xl:h-116 2xl:mt-32 4xl:w-132 4xl:h-152 4xl:mt-40" src={hummus.asset.url} alt="hummus" width={653} height={600}/> 
                
                <img className="object-cover w-160 h-160 md:mx-16  lg:object-contain  lg:w-112 lg:h-108 lg:mt-12 lg:mx-0 xl:w-144 xl:h-144 xl:mt-16 dxl:w-148 dxl:h-148 2xl:w-160 2xl:h-160 2xl:mt-20 4xl:w-212 4xl:h-212 4xl:mt-24" src={centralPlate.asset.url} alt="centerPlate"/>
                
                <img className="hidden object-contain lg:block lg:w-72 lg:h-84 xl:w-88 xl:h-104 2xl:w-100 2xl:h-116 4xl:w-132 4xl:h-152" src={babaganush.asset.url} alt="rightPlate"/> 
            </div> 
        </div>

    )
}

export default Hero
