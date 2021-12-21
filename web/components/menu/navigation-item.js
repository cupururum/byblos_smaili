import Link from 'next/link'

function NavigationItem(props) {
    const {title, slug, activeSection} = props
    return (
                <>
                        { slug == activeSection ? 
                            <div className="relative w-84 "> 
                                <button className="group w-80 h-16 text-menuGroups text-left bg-romance outline-none font-bold text-soft-amber">
                                    <p className="border-b w-68 h-16 ml-6 pt-1 border-white-coffee">{title}</p>
                                    <div className="absolute right-0 top-0 mr-2 mt-6 w-4 h-4 transform rotate-45 bg-romance "></div>
                                </button>               
                            </div>
                        : 
                            <div className="w-84  "> 
                                <button className="w-80 h-16 text-menuGroups text-left hover:bg-romance">
                                    <p className="border-b w-68 h-16 ml-6 pt-1 border-white-coffee"><Link href={`/menu/${slug}`}>{title}</Link></p>
                                </button>               
                            </div>
                        
                        }
                </>
    )
}

export default NavigationItem