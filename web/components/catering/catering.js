import Image from 'next/image'

import cateringPlates from '/public/cateringPlates.png'
import privateParty from '/public/privateParty.png'

function Catering() {

    return (
        <div className="pt-52 pb-32 mb-1 bg-romance px-10 md:pb-28 xl:pb-32 4xl:px-36">
            <div className="xl:flex xl:justify-between xl:space-x-4">
                <div className="xl:w-128 xl:pt-28">
                    <h1 className="text-addressTextInContactUsMobile mb-16 md:text-introTextDesk xl:mb-32 xl:pr-8 ">
                        Uroczysty, wystawny obiad albo kolacja dla większej liczby osób, 
                        niezależnie od wybranego menu i formy bankietu.
                    </h1>
                    <p className="text-aboutText mb-10 md:text-bodytextAdress">
                        W razie jakichkolwiek pytań lub dodatkowych informacji uprzejmie prosimy o kontakt telefoniczny
                    </p>
                    <p className="text-addressTextInContactUsMobile mb-16 md:text-introTextDesk">
                        +48 720 858 888
                    </p>
                </div>
                <div  className="mb-16 md:inline-block md:h-144 md:w-96 md:mr-5  xl:block  xl:mr-0">
                    <Image  layout='responsive' width='514' height='780'  src={cateringPlates} alt="catering"/>
                </div>
                <div className="hidden w-96 h-128 md:inline-block md:w-68 md:h-96 xl:mt-28 xl:block">
                    <Image layout='responsive' width='374' height='520' src={privateParty} alt="private party and catering"/>
                </div>
                
                
            </div>
            <div className="md:w-104 xl:flex xl:justify-between xl:w-auto">
                <div className="mb-16 flex  ">
                    <span className="text-addressTextInContactUsDesktop">👌🏻</span>
                    <p className="px-5 text-aboutText md:text-bodytextAdress xl:w-84 ">
                        Możecie być pewni, 
                        że zadbamy o wszystkie szczegóły przyjęcia.
                    </p>
                </div>
                <div className="mb-16 flex ">
                    <span className="text-addressTextInContactUsDesktop">🔥</span>
                    <p className="px-5 text-aboutText md:text-bodytextAdress xl:w-84 "> 
                        Na każdą okazję przygotowujemy indywudualne menu, uwzględniając 
                        gust i preferencje Gości.
                    </p>
                </div>
                <div className="mb-16 flex ">
                    <span className="text-addressTextInContactUsDesktop">🌳</span>
                    <p className="px-5 text-aboutText md:text-bodytextAdress xl:w-84 ">
                        Proponujemy tradycyjne dania kuchni 
                        libańskiej oraz specjały kuchni międzynarodowej, 
                        które na długo zapiszą się w pamięci doznań smakowych.
                    </p>
                </div>
            </div>

            <img className="md:hidden" src={privateParty} alt="private party and catering"/>

        </div>
    )
}

export default Catering
