import VegIcon from './veg-icon'

function MenuItem(props){
    return(
        <div  className="flex w-86 h-36">
                <div className="relative bg-white-coffee bg-opacity-50 w-36 h-36 ">
                    <div className="absolute left-0 top-0 w-5 h-5 border-black border-t border-l"></div>
                    <div className="absolute top-0 right-0 w-5 h-5 border-black border-t border-r"></div>
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-black border-b border-l"></div>
                    <div className="absolute bottom-0 right-0  w-5 h-5 border-black border-b border-r"></div>
                    <img className={`object-fill w-36 h-36`} src={props.pic} alt={props.alt}/>
                </div>  

                <div className="relative ml-8 pl-1 w-32"> 
                        {props.vegeterian ? <VegIcon/> : <div className="w-5 h-5 mb-2"> </div> }    
                        <p className="w-36 text-socialCardText md:text-dxlAboutText xl:text-socialCardText xl:w-44"> {props.title} </p>
                        <div className="absolute  bottom-0 left-0  box-content w-12 h-8 px-1 pt-1 ml-1 border-l-2 border-r-2 border-black bg-black text-white text-socialCardText font-bold text-center ">{props.price}</div>
                        {props.new && <div className="absolute  bottom-0 right-0  box-content w-12 h-8 px-1 pt-1 ml-1 border-l-2 border-r-2 border-soft-amber bg-soft-amber text-white text-socialCardText font-bold text-center "> new </div>}                 
                </div>     
        </div>
    )
}

export default MenuItem