import Link from 'next/link'

function NavigationMobileItem(props) {
    const {title, slug, activeSection} = props
    return (
        <div className="relative w-full"> 
            <button className="flex w-full h-16 text-menuGroups text-left" onClick={e => props.onClick(e)}>
                <p className="border-b w-full  h-16 ml-6 pt-1 border-white-coffee md:mr-6"><Link href={`/menu/${slug}`}>{title}</Link></p>
            </button>               
        </div>
    )
}

export default NavigationMobileItem