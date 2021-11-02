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
        <div className="fixed z-20 w-full h-full bg-black bg-opacity-80">
            <div className="absolute z-20 right-10 top-10 " onClick={props.crossOnClickViewMode}> <WhiteCrossIcon/> </div>
            <div className="md:grid md:grid-cols-6 lg:grid-cols-5 md:place-items-center  mt-28 xsm:mt-5  md:mt-40">
                    {slider && (
                     
                            <div className="absolute z-20 left-0 bottom-88  xsm:bottom-88 md:static">
                                <ArrowLeft
                                onClick={(e) => e.stopPropagation() || slider.prev()}
                                />
                            </div>
                  
                        )}
                    <div className="md:col-span-4 lg:col-span-3  ">
                        <div ref={sliderRef} className="keen-slider place-self-center">
                            {props.images.map((image) => <div className="keen-slider__slide  flex items-center md:justify-center " key={image._key}><img className="" src={image.asset.url} alt={image.alt}/></div>)}
                        </div>
                    </div>

                    {slider && (
               
                            <div className="absolute z-20 right-0 bottom-88   xsm:bottom-88 md:static ">
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