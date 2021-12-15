import Link from 'next/link'

function AllNews(props){
    return(
        <div className="pt-36 divide-y divide-white-coffee divide-solid md:grid md:grid-cols-2 md:divide-none xl:block xl:divide-solid xl:mx-36 xl:pt-52 ">
                     {props.allNews.map((article) =>
                        <div className="px-10 py-16 lg:flex 4xl:py-24 4xl:px-36" key={article._id}>
                            <img className="mb-3 md:mb-0 md:w-72 md:h-112 " src={article.mainImage.asset.url} alt={article.title}/>
                            <div className="md:relative md:mt-5 md:h-84 xl:static xl:ml-24"> 
                                <h1 className="text-introTextDesk md:text-addressTextInContactUsMobile">{article.title}</h1>
                                <div className="text-twoXlAboutText">{article.excerpt}</div>
                                <Link href={`/news/${article.slug.current}`}>
                                    <button className="w-56 h-16 mt-10 text-buttonJumbotron border-2 border-black focus:outline-none md:absolute md:left-0 md:bottom-0 xl:static lg:hover:bg-btn-color-hover lg:hover:border-0">
                                       Learn more 
                                    </button> 
                                </Link>
                            </div>
                        </div>
                        )}     
                    </div>

    )
}

export default AllNews