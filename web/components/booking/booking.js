import Form from "../landing-page/form"
import WhiteCrossIcon from "../slider/icon-cross-white"

function BookTheTable(props) {
    return (
        <div className="w-full h-full fixed inset-x-0 top-0 z-20 bg-romance overflow-scroll px-10 md:flex md:px-0 md:pt-60">
            
            <div className='flex-1'></div>
            <div className="flex-none">
                <Form/>
                <p className="text-dark-grey mt-5 text-cookiesPolicyLink text-center md:w-80 4xl:w-100 4xl:mt-5 ">
                    Przez kliknecie przycisku “Rezerwacja” zgadzają się Państwo na przetwarzanie Państwa danych.
                </p>
            </div>
            <div className='flex-1 '>
                <button className="absolute top-10 right-10 focus:outline-none lg:static" onClick={props.crossOnClick} >
                    <WhiteCrossIcon/> 
                </button>   
            </div>    
        </div>
    )
}

export default BookTheTable
