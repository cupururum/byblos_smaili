import { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import ArrowLeft from "./arrow-left"
import ArrowRight from "./arrow-right"
import WhiteCrossIcon from "./icon-cross-white"

function ViewMode(props){
    const [currentSlide, setCurrentSlide] = useState(2)
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        loop: true,
        slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
        },
    })
    return (
        <div className="fixed z-10 w-full h-full bg-black bg-opacity-80">
            <div className="absolute z-20 right-10 top-10 " onClick={props.crossOnClickViewMode}> <WhiteCrossIcon/> </div>
            <div className="md:flex md:justify-between w-full h-full">
                    {slider && (
                     
                            <div className="absolute z-20 left-0 bottom-112  xsm:bottom-88 md:static md:self-center">
                                <ArrowLeft
                                onClick={(e) => e.stopPropagation() || slider.prev()}
                                />
                            </div>
                  
                        )}
  
                    <div ref={sliderRef} className="keen-slider">
                        {props.images.map((image) => <div className="keen-slider__slide flex justify-center" key={image._key}><img className="self-center" src={image.asset.url} alt={image.alt}/></div>)}
                    </div>

                    {slider && (
               
                            <div className="absolute z-20 right-0 bottom-112   xsm:bottom-88 md:static md:self-center">
                                <ArrowRight
                                onClick={(e) => e.stopPropagation() || slider.next()}
                                />
                            </div>
                    
                        )}
          
            </div>
            
        </div>
    )
}

export default ViewMode