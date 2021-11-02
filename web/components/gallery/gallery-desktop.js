function GalleryDesktop(props) {
    return(
        
            <div className="grid grid-cols-4  gap-4  px-32 pt-36 pb-52">
                {props.images.map((image) =>
                    <div className={`${image.display}`} key={image._key}>
                        <img className="w-full h-full" src={image.asset.url} alt={image.alt} onClick={props.clickOnImage}/>
                    </div>
                )}
            </div>
   
    )

}

export default GalleryDesktop