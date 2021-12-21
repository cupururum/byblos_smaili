import Map from '../map/map'
import ExternalLinks from '../external-links/external-links'
import Logistics from '../logistics/logistics';


import EnvelopeIcon from './envelope-icon'

function ContactUs(props) {
      
    return (
        <div className="pb-36">
            <div className="pt-64 pb-24  bg-romance px-10  xl:flex xl:justify-between xl:px-20 2xl:px-36 ">
                <div className="text-addressTextInContactUsMobile  md:text-addressTextInContactUsDesktop xl:mt-20">
                    <Logistics textStyle={"space-y-10"}
                              color48={"text-btn-color-hover"}
                              extraText={"Warszawa, "}
                              logoStyle={"mr-8 mt-2 w-6 h-8 md:mt-3"}/>
                
                    <div className="flex mt-9 mb-24 pb-2 lg:pl-0">
                        <EnvelopeIcon/>
                        <p className="ml-5"> info@byblos-cafe.pl </p>
                    </div>
                </div>
                
                <Map
                    id="findByblos"
                    mapStyle="h-160 shadow-mapContactUs xl:w-3/5 2xl:w-8/12"
                    options={{
                        center: { lat: 52.244763, lng: 21.011318 },
                        zoom: 14
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
            
            <div className="mt-20 lg:flex lg:justify-center  " >
                <div className="px-7 ">
                    <h1 className="text-addressTextInContactUsMobile mb-10 xl:text-introTextDesk"> Questions? </h1>
                    <form className="w-full text-formText md:flex md:space-x-10" 
                        name="contact" 
                        method="POST"
                        action="/success"
                        netlify-honeypot="bot-field"
                        data-netlify="true">

                        <input type="hidden" name="form-name" value="contact"  />

                        <div className="md:w-1/2">

                            
                            <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                <span className="text-red-500">*</span> 
                                <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="name" aria-label="Full name" placeholder="Imię i Nazwisko" required/>
                            </div>

                            <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                <span className="text-red-500">*</span> 
                                <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" name="email" aria-label="E-mail" placeholder="E-mail" required/>
                            </div>

                            <div className="flex items-center border-b border-black py-2 lg:mb-5 xl:mb-10">
                                <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="phone" aria-label="phone" placeholder="Numer telefonu"  required/>
                            </div>
                        </div>
                        <div>
                            <textarea className="w-full h-52 mt-10 p-5 bg-textarea-contact placeholder-gray-300 focus:outline-none" placeholder="Potikay soobshenku pshu pshu pshu">
                            </textarea>
                        
                            <button className="w-56 h-16 mt-10 bg-white-coffee text-buttonJumbotron font-bold focus:outline-none lg:hover:bg-btn-color-hover" type="submit">
                                    Send
                            </button>
                            <p className="text-dark-grey mt-5 text-cookiesPolicyLink md:w-80 xl:mt-10 4xl:w-100 4xl:mt-5 ">
                                Przez kliknecie przycisku “Send” zgadzają się Państwo na przetwarzanie Państwa danych.
                            </p>
                        </div>
                    </form>
                </div>
               
            </div>
            <div className="px-7 xsm:px-10 lg:flex lg:justify-center">
                <ExternalLinks linksAndLogos={props.externalLinks}/>
            </div>
            
        </div>
    )
}

export default ContactUs

