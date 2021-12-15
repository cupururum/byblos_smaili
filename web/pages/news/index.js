import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'

import AllNews from '../../components/news/all-news'

function News(props){

    if(!props.allNews) {
        return (<div> Loading... </div>)
    }

    console.log(props.allNews)

    const { allNews } = props
    return (
        <div className="pt-32 pb-32 px-32">
           <AllNews allNews={allNews}/>
        </div>
    )
}

export default News


export async function getStaticProps() {
    const allNews  = await getClient().fetch(groq`*[_type == 'article']{_id, title,  excerpt, mainImage{asset->{url}}, slug{current}}`)

    return{
        props: {allNews}
    }
}