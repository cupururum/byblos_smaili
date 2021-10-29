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
            <div className="md:grid md:grid-cols-3 md:place-items-center mt-64">
                    {slider && (
                     
                            <div className="absolute z-20 left-0 bottom-112  xsm:bottom-88 md:static md:place-self-start">
                                <ArrowLeft
                                onClick={(e) => e.stopPropagation() || slider.prev()}
                                />
                            </div>
                  
                        )}
  
                    <div ref={sliderRef} className="keen-slider h-auto w-auto place-self-center">
                        {props.images.map((image) => <div className="keen-slider__slide  " key={image._key}><img className="w-full h-full" src={image.asset.url} alt={image.alt}/></div>)}
                    </div>

                    {slider && (
               
                            <div className="absolute z-20 right-0 bottom-112   xsm:bottom-88 md:static md:place-self-end">
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