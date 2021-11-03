function GalleryTablet(props) {
   
    return(
   
        
            <div className="grid grid-cols-2  gap-2 px-10 pt-36 pb-24 ">
                {props.images.map((image, index) =>
                
                    <div className={`${image.display}`} key={image._key}>
                        <img className="w-full h-full" src={image.asset.url} alt={image.alt} index={index} onClick={props.clickOnImage}/>
                    </div>
                )}
            </div>
   
    )

}

export default GalleryTablet