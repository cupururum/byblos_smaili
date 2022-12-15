import About from './about'
import Hero from './hero'
import Map from '../map/map'
import Logistics from '../logistics/logistics'
import ExternalLinks from '../external-links/external-links'
import Form from './form'

function LandingPage(props){
   const aboutImg = props.aboutImg[0].galleryDesktop.images
   const heroImg = props.heroImgs[0].galleryDesktop.images

   return (
       <>
           <Hero images={heroImg}/>
           <div className="mt-44 px-7 xsm:px-10 md:mt-36 lg:px-20 lg:mt-32 lg:mb-20 xl:px-24  xl:mt-36 4xl:px-36 4xl:mt-60 ">
                <Logistics textStyle="text-bodytextAdress md:hidden"
                              extraText="Warsawa,"
                              logoStyle="hidden" 
                              addressStyle="flex space-x-2" />
                <div className="mt-10 md:flex md:flex-row-reverse lg:gap-5 3xl:gap-0">
                    <div className="md:w-1/2 lg:w-2/3 lg:pl-5 3xl:pl-0">
                        <Map
                            id="findByblos"
                            mapStyle="h-80 md:w-92 md:h-full md:mx-0 lg:w-full lg:h-full"
                            options={{
                                    center: { lat: 52.244763, lng: 21.011318 },
                                    zoom: 19
                            }}
                            onMapLoad={map => {
                                    new window.google.maps.Marker({
                                    position: { lat: 52.244763, lng: 21.011318 },
                                    map: map,
                                    title: 'Byblos Cafe'
                                });
                            }}
                        />
                    </div>
                    <div className="md:w-1/2 lg:w-1/3">

                            <Logistics textStyle="hidden  text-bodytextAdress md:block"
                                extraText="Warszawa,  &nbsp; "
                                logoStyle="hidden"
                                addressStyle="flex space-x-0" />

                            <Form/>
                           
                    </div>
                </div>
                <p className="text-dark-grey mt-5 text-cookiesPolicyLink md:w-80 xl:mt-10 4xl:w-100 4xl:mt-5 ">
                    Przez kliknecie przycisku “Rezerwacja” zgadzają się Państwo na przetwarzanie Państwa danych.
                </p>
                <About aboutImgs={aboutImg}/>
                <ExternalLinks linksAndLogos={props.linksAndLogos}/>
           </div>
       </>
   )
}

export default LandingPage