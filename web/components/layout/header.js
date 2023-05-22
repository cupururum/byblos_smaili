import Link from 'next/link'


import ByblosLogo from './svg/byblos-logo'



function Header(props){
    return(
    <header className="absolute w-full mt-20 mb-20 px-10  flex justify-start lg:px-0 lg:justify-between ">
        <div className="w-0 lg:w-1/12"></div>
        <div className="lg:flex lg:justify-between lg:w-10/12">
            <Link href="/"><ByblosLogo style={"w-60 h-10"}/></Link>
            <nav className="hidden lg:mr-10 xl:flex  dxl:space-x-12  ">
                {props.navItems.map((item) => 
                    <button className="px-4 pt-1 pb-1 hover:border-b hover:border-black active:border-b active:border-black" key={item._id}> 
                        <Link href={`/${item.slug.current}`}>{item.title}</Link>
                    </button>
                )}
            </nav>
        </div>
        <div className="w-0 lg:w-1/12"></div>
    </header>) 
}

export default Header