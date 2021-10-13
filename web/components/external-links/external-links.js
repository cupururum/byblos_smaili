import Card from './card'

function ExternalLinks(props){
 const {linksAndLogos} = props
    return (
        <div className="mt-32 mb-20 3xl:mt-64">
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8  xl:grid-cols-3 2xl:place-items-center 4xl:gap-12">
                {linksAndLogos.map((link) => 
                    <Card key={link._id}
                    logo={link.imgCards.asset.url}
                    alt={link.alt}
                    href={link.href}/>
                    
                )}
            </div>
        </div>
    )

}

export default ExternalLinks