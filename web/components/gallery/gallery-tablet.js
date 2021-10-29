function GalleryTablet(props) {
    return(
        
            <div className="grid grid-cols-2  gap-2">
                {props.images.map((image) =>
                    <div className={`${image.display}`} key={image._key}>
                        <img className="w-full h-full" src={image.asset.url} alt={image.alt} onClick={props.clickOnImage}/>
                    </div>
                )}
            </div>
   
    )

}

export default GalleryTablet