

import Image from 'next/image'

import CateringItem from "./catering-item"


function Catering(props) {
    console.log(props)

    return (
        <div className="pb-40">
                    <div className="pt-52 pb-32 mb-1 bg-romance px-10  xl:px-0 xl:flex xl:">
                        <div className="hidden xl:w-1/12 xl:block"></div>
                        <div className="pt-20 xl:w-1/2">
                            <div className="mb-1 text-introTextDesk font-normal">
                                Bankiety i Catering
                            </div>
                            <div className="mt-12 space-y-3 text-bodytextAdress">
                                <p>Uroczysty, wystawny obiad albo kolacja dla większej liczby osób, niezależnie od wybranego menu i formy bankietu. </p>
                                <p>W razie jakichkolwiek pytań lub dodatkowych informacji uprzejmie prosimy o kontakt telefoniczny: </p>
                                <p className="font-extrabold">+48 720 858 888 </p>
                                <p>Możecie być pewni, że zadbamy o wszystkie szczegóły przyjęcia. Na każdą okazję przygotowujemy indywudualne menu, uwzględniając gust i preferencje Gości.
                                Proponujemy tradycyjne dania kuchni libańskiej oraz specjały kuchni międzynarodowej, które na długo zapiszą się w pamięci doznań smakowych.</p>

                            </div>
                        </div>
                        <div className="hidden w-1/12 xl:block"></div>
                        <div className="hidden  xl:grid xl:w-1/2 gap-10 grid-cols-3 ">
                                    <div className="col-span-1 row-span-1"><Image src={props.catering.picturesOnTheTop[0].galleryDesktop.images[0].asset.url} width={237} height={280} alt="kanapki"/></div>
                                    <div className='col-span-2 row-span-1'><Image src={props.catering.cateringItems[1].dishImage.asset.url} width={513} height={280}/></div>                       
                                    <div className='col-span-2 row-span-1'><Image src={props.catering.cateringItems[4].dishImage.asset.url} width={513} height={280}/></div>
                                    <div className="col-span-1 row-span-1"><Image src={props.catering.picturesOnTheTop[0].galleryDesktop.images[1].asset.url}  width={237} height={280} alt="table"/></div>
                        </div>
                        <div className="hidden w-1/12 xl:block"></div>
                    </div>

                    <div className="px-10">
                        <div className="text-center mt-32  text-addressTextInContactUsMobile xl:text-introTextDesk"> Zapoznajcie się z opcjami dań głównych na bankiety i przyjęcia.</div>
                        <p className="mt-4 text-center text-aboutText xl:text-bodytextAdress">Jak również możemy przygotować różnego rodzaju dania według waszych życzeń.</p>
                    </div>

                    
                    <div className="px-10  xl:flex">
                        <div className="hidden w-1/12 xl:block"></div>
                        <div className="md:grid md:grid-cols-2 md:gap-4">
                                {props.catering.cateringItems.map(cateringItem => <CateringItem key={cateringItem._id}
                                                                                  title={cateringItem.title}
                                                                                  description={cateringItem.description} 
                                                                                  price={cateringItem.price}
                                                                                  image={cateringItem.dishImage.asset.url}/>)}
                        </div>
                        <div className="hidden w-1/12 xl:block"></div>
                    </div>
        </div>
    )
}

export default Catering
