import Link from 'next/link'
import Image from 'next/image'

import ByblosLogo from './svg/byblos-logo'



function Header(props){
    return(
    <header className="absolute w-full mt-20 mb-20 px-10  flex justify-start lg:px-0 lg:justify-between ">
        <div className="w-0 lg:w-1/12"></div>
        <div className="lg:flex lg:justify-between lg:w-10/12">
            <Link href="/"><a > <ByblosLogo/></a></Link>
            <nav className="hidden lg:flex lg:space-x-8 dxl:space-x-12 lg:mt-2 lg:mr-10 ">
                {props.navItems.map((item) => 
                    <button className="px-3 pt-1 hover:border-b hover:border-black active:border-b active:border-black" key={item._id}> 
                        <Link href={`/${item.slug.current}`}>{item.title}</Link>
                    </button>
                )}
            </nav>
        </div>
        <div className="w-0 lg:w-1/12"></div>
    </header>) 
}

export default Header