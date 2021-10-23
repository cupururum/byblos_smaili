import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'

import ContactUs from '../../components/contact/contact-main'

function ContactPage(props){

    if (!props.externalLinks){
        return(
            <div> Loading... </div>
        )
    }

    return (
       <ContactUs externalLinks={props.externalLinks}/>
    )
}

export default ContactPage

export async function getStaticProps() {
  
  
    const externalLinks  = await getClient().fetch(groq`
                         *[_type == 'externalLink']{
                              title,
                              _id,
                              href,
                              alt,
                              imgCards{
                                asset->{
                                    url
                                }
                              }
                            }
                    `)
      

  return {
    props: { externalLinks }

  }
}