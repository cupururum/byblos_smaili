import About from './about'
import Hero from './hero'
import Map from '../map/map'
import Logistics from '../logistics/logistics'
import ExternalLinks from '../external-links/external-links'

function LandingPage(props){
   const aboutImg = props.landingPageImgs.aboutImg
   const heroImg = props.landingPageImgs.heroImg


   return (
       <>
           <Hero images={heroImg}/>
           <div className="mt-44 px-7 xsm:px-10 md:mt-36 lg:px-20 lg:mt-32 lg:mb-20 xl:px-24 xl:mt-40 4xl:px-36 4xl:mt-60 ">
                <Logistics textStyle="text-bodytextAdress md:hidden"
                              extraText="Warsawa,"
                              logoStyle="hidden" 
                              addressStyle="flex space-x-2" />
                <div className="mt-10 md:flex md:flex-row-reverse lg:justify-between">
                        <Map
                            id="findByblos"
                            mapStyle="h-80 md:w-92 md:h-124 md:mx-0 lg:w-132 lg:h-144 xl:w-8/12 4xl:w-264 4xl:h-160"
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
                        <div >

                            <Logistics textStyle="hidden  text-bodytextAdress md:block"
                                extraText="Warszawa,  &nbsp; "
                                logoStyle="hidden"
                                addressStyle="flex space-x-0" />


                            <div className="mt-20 md:w-84 md:pr-5 md:mt-6" >
                                <h1 className="text-addressTextInContactUsMobile mb-10 lg:mb-0 xl:text-IntroTextDesk  4xl:mb-12"> Rezerwacja </h1>
                                <form  className="w-full max-w-sm text-formText" 
                                    name="booking" 
                                    method="post"
                                    action="/success"
                                    netlify-honeypot="bot-field"
                                    data-netlify-recaptcha="true"
                                    data-netlify="true">
                                
                                    <input type="hidden" name="form-name" value="booking"  />

                                    
                                    <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span> 
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="name" aria-label="Full name" placeholder="Imię i Nazwisko" required/>
                                    </div>
                                    <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span>
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" name="date" aria-label="date" placeholder="Dzień i godzina" required="required"/>
                                    </div>
                                    <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span> 
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" name="guests" aria-label="number" placeholder="Liczba gości" required/>
                                    </div>
                                    <div className="flex items-center border-b border-black py-2 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span>
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="phone" aria-label="phone" placeholder="Numer telefonu"  required/>
                                    </div>
                                
                                    <button className="w-56 h-16 mt-10 bg-white-coffee text-buttonJumbotron font-bold focus:outline-none lg:hover:bg-btn-color-hover" type="submit">
                                            Rezerwacja
                                    </button>
                                    <div data-netlify-recaptcha="true"></div>
                                </form>
                            </div>
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