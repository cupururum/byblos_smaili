function Form(){
    return(
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
    )
}

export default Form