import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'


import Catering from '../../components/catering/catering'

function CateringPage(props) {

    if (!props.catering){
        return(
            <div> Loading... </div>
        )
    }


    return(
        <>
            <Catering catering={props.catering}/>
        </>

    )

}

export default CateringPage

export async function getStaticProps() {
    const catering  = await getClient().fetch(groq`{
                                                    "cateringItems":*[_type == 'cateringItem']{
                                                              _id, price, title, description, 
                                                              dishImage{
                                                                asset->{ url }
                                                            }
                                                        },
                                                    "picturesOnTheTop":*[_type == 'galleryPage' && galleryName == 'Catering']{
                                                        _id, 
                                                        galleryDesktop{images[]{_key, display, asset->{url}}}
                                                    }
                                                }`)

    return{
        props: {catering}
    }
}