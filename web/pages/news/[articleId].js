import Article from "../../components/news/article"
import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'




function SingleArticle(props){
    if(!props.article) {
        return (<div> Loading... </div>)
    }

    return(
        <Article article={props.article}/>
    )
}

export default SingleArticle

export async function getStaticProps({params, preview=false}) {
    const articleSlug = params.articleId
    const article  = await getClient(preview).fetch(groq`*[_type == 'article' && slug.current == '${articleSlug}']{_id, title,  excerpt, mainImage{asset->{url}}, body}`, articleSlug)

    return{
        props: {article}
    }
}

export async function getStaticPaths() {
    const articlesSlugs = await getClient().fetch(
        groq`*[_type == 'article']{
                slug{
                    current
                }
        }`
    )

    const paths = articlesSlugs.map(articleSlug => (
        {
            params: {
                articleId: articleSlug.slug.current
            }
        }
    ))
    return {                   
      paths: paths,
      fallback: true,
    }
  }
