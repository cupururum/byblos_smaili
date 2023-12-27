import Image from "next/image"
import kurchakiy from './kurchakiy.png'

function CateringItem(props) {

    return (
        <div className="xl:flex xl:items-center">
            <div className="relative mt-16 p-5 ">
                    <div className="absolute left-0 top-0 w-5 h-5 border-black border-t border-l"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 border-black border-t border-r"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-black border-b border-l"></div>
                    <div className="absolute bottom-0 right-0  w-5 h-5 border-black border-b border-r"></div>
                    <div className="border-black"> <Image src={props.image} width={473} height={340}  alt="Image of a dish for catering"/></div> 
                    
            </div> 
            <div className="px-7 w-60">
                <p className="mt-5 mb-1 text-dxlAboutText">{props.title}</p>
                <p className="mt-6 mb-6 text-lgSocialCardText" >{props.description}</p>
                <div className="w-24 h-10 bg-black text-socialCardText text-white pl-6 pt-1">{props.price}</div>
            </div>
            
        </div>
    )
}

export default CateringItem