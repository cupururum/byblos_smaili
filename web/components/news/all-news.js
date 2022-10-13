import Link from 'next/link'
import Image from 'next/image'

function AllNews(props){

    console.log(props.allNews)


    return(
        <div className="pt-36 pb-36 divide-y divide-white-coffee divide-solid px-7 xsm:px-10 md:grid md:grid-cols-2  md:divide-none md:gap-5 lg:px-0 lg:block lg:divide-solid lg:mx-20 lg:pt-36 ">
                     {props.allNews.map((article) =>
                        <div className="py-16 xl:flex" key={article._id}>
                            <div className="hidden lg:block">
                                <Image 
                                    className="mb-3 md:mb-0" 
                                    src={article.mainImageDesktop.images[0].asset.url} 
                                    layout='fixed'
                                    width={514}
                                    height={300}
                                    alt={article.title}
                                    />
                            </div>
                            <div className="lg:hidden">
                                <Image 
                                    className="mb-3 md:mb-0" 
                                    src={article.mainImageTablet.images[0].asset.url} 
                                    layout='fixed'
                                    width={334}
                                    height={194}
                                    alt={article.title}
                                    />
                            </div>

                            <div className="md:mt-5 xl:mt-0 xl:ml-24"> 
                                <h1 className="text-introTextDesk md:text-addressTextInContactUsMobile">{article.title}</h1>
                                <div className="text-twoXlAboutText">{article.excerpt}</div>
                                <Link href={`/news/${article.slug.current}`}>
                                    <button className="w-56 h-16 mt-10 text-buttonJumbotron border-2 border-black focus:outline-none lg:hover:bg-btn-color-hover lg:hover:border-0">
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