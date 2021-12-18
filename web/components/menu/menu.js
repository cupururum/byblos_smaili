import Link from 'next/link'

function Menu(props){
    return (
        <div className="pt-36 lg:mb-36"> 
            {props.menuSections.map(section => 
                            <div className="w-full h-40 bg-black bg-opacity-50 hover:bg-opacity-25 text-white text-openNavTextMobile text-center pt-16" key={section._id}>
                                <Link href={`/menu/${section.slug.current}`}>{section.title}</Link>
                            </div>
                )}
        </div>
    )
}

export default Menu