import Image from 'next/image'
import Link from 'next/link'


function About(props) {


    return (
        <div className="mt-24 lg:flex lg:justify-between lg:mt-16 lg:mb-32 xl:mb-40 ">
            <div className="xl:w-1/3 3xl:w-1/3 ">
                <h1 className="text-addressTextInContactUsMobile md:text-introTextDesk 3xl:mb-16"> O nas </h1>
                <p className="text-aboutText mt-5 lg:mt-1 xl:text-twoXlAboutText 3xl:text-aboutText 3xl:mb-20 3xl:pr-5">
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
                        <button className="w-56 h-16 mt-10 lg:mt-5 text-buttonJumbotron border-2 border-black focus:outline-none lg:hover:bg-btn-color-hover lg:hover:border-0 3xl:mt-6">
                            Galeria  &gt; 
                        </button>
                    </a>
                </Link>
            </div>
            <div className="xl:w-2/3 3xl:w-2/3">
                <div className="hidden justify-items-stretch lg:mt-12 xl:grid  xl:grid-cols-2 xl:gap-5 xl:mt-20 3xl:gap-10 3xl:mt-5">
                    {props.aboutImgs.map(image => <img key={image._key} src={image.asset.url} alt={image.alt}/>)}
                </div>
            </div>
           
        </div>
    )
}

export default About
