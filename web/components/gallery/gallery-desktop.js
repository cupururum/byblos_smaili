import EllipsIcon from "./ellips-icon"

function GalleryDesktop(props) {
    return(
        
            <div className="grid grid-cols-4  gap-4  px-32 pt-36 pb-52">
                {props.images.map((image, index) =>
                    <div className={`${image.display}`} key={image._key}>
                  
                            <div className="relative  w-full h-full group hover:opacity-75">
                                <img className="z-0 w-full h-full" src={image.asset.url} alt={image.alt} onClick={props.clickOnImage}/>
                                <div className="absolute inset-0 flex justify-center z-10 opacity-0 group-hover:opacity-100" index={index} onClick={props.clickOnImage}>
                                    <EllipsIcon index={index}/>
                                </div>
                            </div>
                    </div>
                )}
            </div>
   
    )

}

export default GalleryDesktop