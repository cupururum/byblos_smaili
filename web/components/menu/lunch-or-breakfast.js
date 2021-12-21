import Image from 'next/image'

import useWindowSize from '../../hooks/useWindowSize'

function LunchOrBreakfast(props) {

    const { lunch, breakfast, activeSection} = props

   const windowSize = useWindowSize()
   

    let {
        imageUrlDesktop,
        imageUrlTablet,
        imageUrlMobile,
        alt,
        time,
        textOne,
        textTwo,
        header,
        listOfMenuItems
    } = ""

    if (activeSection === 'breakfast') {
        imageUrlDesktop = breakfast[0].galleryDesktop.images[0].asset.url
        imageUrlTablet = breakfast[0].galleryTablet.images[0].asset.url
        imageUrlMobile = breakfast[0].galleryMobile.images[0].asset.url
        alt = breakfast[0].galleryDesktop.images[0].alt
        time = "8:00 — 11:00"
        textOne = "Menu zmienia się każdego dnia."
        textTwo = "Zestaw na dzisiaj możesz sprawdzić na naszym Facebooku oraz Instagramie."
        header = "Śniadanie"
        listOfMenuItems = [
            {
                id: "543e",
                menuItem: "Breakfast Buritto"
            }, 
            {
                id: "654r",
                menuItem: "Egg and Ham English Muffin",
            }, 
            {
                id: "765t",
                menuItem: "Old Fashioned Oats "
            }
        ]
    } else {

        imageUrlDesktop = lunch[0].galleryDesktop.images[0].asset.url
        imageUrlTablet = lunch[0].galleryTablet.images[0].asset.url
        imageUrlMobile = lunch[0].galleryMobile.images[0].asset.url
        alt = lunch[0].galleryDesktop.images[0].alt
        time = "12:00 — 16:00"
        textOne = "Menu zmienia się każdego dnia."
        textTwo = "Zestaw na dzisiaj możesz sprawdzić na naszym Facebooku oraz Instagramie."
        header = "Lunch"
        listOfMenuItems = [
                {
                    id: "5431e",
                    menuItem: "Zupa"
                }, 
                {
                    id: "6542r",
                    menuItem: "Drugie danie",
                }, 
                {
                    id: "7653t",
                    menuItem: "Sałatka"
                }
            ]

    }


    let imageUrl
    
    if (windowSize.width >= 1440) {
        imageUrl = imageUrlDesktop
    }

    if (windowSize.width < 1440) {
        imageUrl = imageUrlTablet
    }

    if (windowSize.width < 701) {
        imageUrl = imageUrlMobile
    }

    return (
        <div>
            <div className="relative lg:px-0 2xl:ml-10">
                <img className="md:object-cover md:w-full md:h-152 4xl:object-fill" src={imageUrl} alt={alt}/>
                <div className="md:absolute md:top-20 lg:px-10  xl:w-full xl:top-10 xl:px-5 2xl:flex 2xl:justify-between 2xl:top-40 2xl:px-10">
                    <div className="absolute top-0 px-10 md:relative lg:w-1/2 lg:px-0 xl:w-auto">
                        <h1 className="text-headerForBreakfastAndLunch">{header}</h1>
                        <div className="w-full text-textBreakfastAndLunch">
                            <p>{time}</p> 
                            <p>{textOne}</p>
                        </div>
                    </div>
                    <div className="mt-10 text-textBreakfastAndLunch md:px-10 lg:px-0">
                        <ul className="px-5 list-disc">
                        {listOfMenuItems.map(menuItem => 
                                <li key={menuItem.id}> {menuItem.menuItem} </li>
                            )}
                        </ul> 
                    </div>
                </div>
                <p className="mt-5 text-textBreakfastAndLunch">{textTwo}</p>
            </div>
        </div>
    )
}

export default LunchOrBreakfast
