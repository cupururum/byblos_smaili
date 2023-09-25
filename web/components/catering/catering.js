import Image from 'next/image'



function Catering() {

    return (
        <>
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
                        <div className="hidden  xl:grid xl:w-1/2 gap-10 grid-cols-3 grid-rows-2">
                                    <div className='col-span-2 bg-gray-200 '>1</div>
                                    <div className="bg-gray-200">2</div>
                                    <div className="bg-gray-200">3</div>
                                    <div className='col-span-2 bg-gray-200'>4</div>
                        </div>
                        <div className="hidden w-1/12 xl:block"></div>
                    </div>

                  
                    <div className="text-center mt-32 text-introTextDesk text-gray-200"> Ознакомьтесь с вариантами основных блюд для банкета </div>
                        <p className="text-center text-bodytextAdress">также мы можем приготовить различные блюдо по вашему желанию</p>
                    <div className="xl:flex">
                        <div className="hidden w-1/12 xl:block"></div>
                        <div classNmae="md:grid md:grid-col-2">

                        </div>
                        <div className="hidden w-1/12 xl:block"></div>
                    </div>
        </>
    )
}

export default Catering
