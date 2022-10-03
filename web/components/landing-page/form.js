function Form(){

    const currentDate = new Date()
 
    let month = currentDate.getMonth()
    let monthString
    if (month < 9) {
        month += 1
        monthString = "0" + month  
    } else {
        month += 1
        monthString = month.toString()
    }
    const minDate = `${currentDate.getFullYear()}-${monthString}-${currentDate.getDate()}`
    const maxDate = `${currentDate.getFullYear()}-${monthString}-${currentDate.getDate()+14}`
    return(
        <div className="mt-20 md:w-84 md:pr-5 md:mt-6" >
                                <h1 className="text-addressTextInContactUsMobile mb-10 lg:mb-0 xl:text-IntroTextDesk  4xl:mb-12"> Rezerwacja </h1>
                                <form  className="w-full max-w-sm text-formText" 
                                    name="booking" 
                                    method="POST"
                                    action="/success"
                                    netlify-honeypot="bot-field"
                                    data-netlify="true">
                                
                                    <input type="hidden" name="form-name" value="booking"  />

                                    
                                    <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span> 
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="name" aria-label="Full name" placeholder="Imię i Nazwisko" required/>
                                    </div>
                                    <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span>
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="date" aria-label="date" min={minDate} max={maxDate} placeholder="Dzień i godzina" onFocus={(e)=> (e.target.type = "date")} required="required"/>
                                    </div>
                                    <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span> 
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" name="guests" aria-label="number" placeholder="Liczba gości min 1 max 8" min="1" max="8" required/>
                                    </div>
                                    <div className="flex items-center border-b border-black py-2 lg:mb-5 xl:mb-10">
                                        <span className="text-red-500">*</span>
                                        <input className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name="phone" aria-label="phone" placeholder="Numer telefonu" pattern="/^+48\d{9}$/"  required  />
                                    </div>
                                
                                    <button className="w-56 h-16 mt-10 bg-white-coffee text-buttonJumbotron font-bold focus:outline-none lg:hover:bg-btn-color-hover" type="submit">
                                            Rezerwacja
                                    </button>
                                   
                                </form>
                            </div>
    )
}

export default Form