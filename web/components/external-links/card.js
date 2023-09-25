import Link from 'next/link'

function Card(props) {


    return (
        <div  className="relative ">
            <div className="absolute left-0 top-0"> <img className="w-14 h-14 xsm:w-16 xsm:h-16" src={props.logo} alt={props.alt}/> </div>
            <div className="w-72 h-40 ml-8 pl-20 pt-10 shadow-socialCard xsm:w-76 lg:pl-16 dxl:w-84 dxl:h-44 dxl:pl-24 3xl:w-88 ">
                <div className="text-socialCardText"> 
                        <p> Byblos </p>
                       
                </div>
                <Link href={props.href}><div className="text-aboutText text-dusty-creme mt-8"> Przejdź &gt; </div></Link>
            </div>
        </div>  
    )
}

export default Card
