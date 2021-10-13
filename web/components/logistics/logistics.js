import PhoneIcon from "./icons/icon-phone"
import MarkerIcon from './icons/icon-marker'

function Logistics(props){

    const {textStyle, color48, extraText, logoStyle, addressStyle} = props


    return (   
                <div className={`${textStyle}`}>
                    <div className="flex"> 
                        <MarkerIcon logoStyle={logoStyle}/>
                        
                        <div className={addressStyle}>
                            <p> {extraText}</p> 
                            <p> Jana Moliera 8 </p>
                        </div>
                    </div>
                    <div className="flex mt-5 lg:mt-4"> 
                        <PhoneIcon logoStyle={logoStyle} />
                          
                        <div className="flex py-1 dxl:pt-1"><p className={`mr-2 ${color48}`}>+48</p>  <p>720  858  888</p> </div>
                    </div>
                </div>
    )
}

export default Logistics