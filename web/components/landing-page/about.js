import Image from 'next/image'
import Link from 'next/link'


function About(props) {


    return (
        <div className="mt-24 lg:flex lg:justify-between lg:mt-16 lg:mb-32 lg:px-0 xl:mb-40 ">
            <div className="lg:w-108 lg:mr-10 iPadPro11:w-88 xl:w-5/12 xl:mr-10 4xl:mr-20 ">
                <h1 className="text-addressTextInContactUsMobile md:text-introTextDesk"> O nas </h1>
                <p className="text-aboutText mt-5 lg:mt-3 xl:mt-5 2xl:mt-6 3xl:mt-8 4xl:mt-16">
                    Restauracja Byblos powstała z miłości do prawdziwej kuchni libańskiej. 
                    Od początku naszym głównym celem jest stworzenie miejsca, 
                    gdzie każdy gość będzie miał możliwość spróbować niesamowicie pyszne 
                    tradycyjne dania libańskie. 
                    Serwujemy dania wegetariańskie oraz mięsne, przygotowane z wielką 
                    starannością przez naszego kucharza z Libanu wyłącznie z naturalnych 
                    oraz najświeższych produktów.
                    Niezależnie od tego, czy świętujecie wyjątkowy dzień, czy po prostu 
                    chcecie spróbować dania kuchni libańskiej razem ze znajomymi, 
                    jesteśmy przekonani, że będą Państwo zadowoleni z wizyty w naszej 
                    restauracji i będziecie chcieli jeszcze nie raz wrócić, aby spróbować 
                    innych pozycji z karty.
                    Z kolei personel restauracji zawsze obsłuży Państwa w wyjątkowy sposób.
                    Serdecznie zapraszamy!
                </p>
                <Link href="/galeria">
                    <a>
                        <button className="w-56 h-16 mt-10 lg:mt-5 text-buttonJumbotron border-2 border-black focus:outline-none lg:hover:bg-btn-color-hover lg:hover:border-0">
                            Galeria  &gt; 
                        </button>
                    </a>
                </Link>
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:overflow-hidden lg:gap-8 lg:w-124 lg:h-152 lg:mt-12 xl:h-100 xl:grid-cols-2 xl:w-7/12 xl:gap-6 xl:mt-20 dxl:h-auto 3xl:mt-10">
                {props.aboutImgs.map(image => <div key={image._key}><img src={image.asset.url} alt={image.alt}/></div>)}
            </div>
           
        </div>
    )
}

export default About
