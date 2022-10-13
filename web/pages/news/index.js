import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'

import AllNews from '../../components/news/all-news'

function News(props){

    if(!props.allNews) {
        return (<div> Loading... </div>)
    }

    const { allNews } = props
    return (
        <div className="">
           <AllNews allNews={allNews}/>
        </div>
    )
}

export default News


export async function getStaticProps() {
    const allNews  = await getClient().fetch(groq`*[_type == 'article']{
                                                            _id, 
                                                            title,
                                                            excerpt, 
                                                            mainImageDesktop{
                                                                images[]{_key, asset->{url}}
                                                            },
                                                            mainImageTablet{
                                                                images[]{_key, asset->{url}}
                                                            },
                                                            mainImageMobile{
                                                                images[]{_key, asset->{url}}
                                                            },    
                                                            slug{current}}`)

    return{
        props: {allNews}
    }
}