import image from "next/image"

function GalleryMobile(props) {
    return (
        <div className="px-10 py-32">
            {props.images.map((image, index) => 
                <img className="pb-5 w-full" key={image._key} src={image.asset.url}  alt={image.alt} index={index} onClick={props.clickOnImage}/>
            )}
        </div>
    )
}

export default GalleryMobile
