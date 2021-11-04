import Link from 'next/link'
import Image from 'next/image'

import successImage from "/public/successImage.png"
import MarkerIcon from '../logistics/icons/icon-marker';
import WhiteCrossIcon from "../slider/icon-cross-white"

function SuccessSubmit() {
    return (
            <div className="fixed z-20 inset-0 flex flex-col pt-40 bg-romance md:pt-52 xl:pt-60  ">
                <button className="absolute top-10 right-10 focus:outline-none lg:static" >
                    <Link href="/"><WhiteCrossIcon/></Link>
                </button>   
                <h1 className="w-full text-center text-introTextDesk"> See you! </h1>
                <h2 className="w-full text-center text-socialCardText"> Your form submission has been received </h2>
                <p className="w-full text-center text-dusty-creme text-lg">
                    <Link  href="/"> &lt; Back to the site </Link>
                </p>
                
                <div className="flex justify-center">
                    
                    <div className="self-center w-full xl:w-10/12">
                        <Image className="object-contain" layout='responsive' width="1734" height="488" src={successImage} alt="successFormSubmitImage" />
                    </div>
                    
                </div>
                <div className="flex w-full justify-center"> 
                        <MarkerIcon/>
                        <p className="mt-1 text-headerTextAdress font-bold "> Jana Moliera 8 </p>
                </div>
                <p className="w-full text-center text-dusty-creme mt-2">
                    <Link  href="https://www.google.com/maps?ll=52.244763,21.011318&z=19&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=10245437596016278220">  Open in maps &gt;</Link>
                </p>
            </div>
    )
}

export default SuccessSubmit
