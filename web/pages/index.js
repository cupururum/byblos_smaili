import {Fragment} from 'react'

import {sanityClient} from '../lib/sanity.server'
import LandingPage from '../components/landing-page/landing-page'

function IndexPage(props) {

  return (
    <div>
     <LandingPage linksAndLogos={props.linksAndLogos}/> 
    </div>
  )
}

export default IndexPage;

export async function getStaticProps() {
  const linksAndLogos = await sanityClient.fetch(`
  *[_type == "externalLink"]{
      title,
      _id,
      href,
      alt,
      imgCards{
         asset->{
            url
         }
      }
  }`)
  return {
    props: {linksAndLogos},

  }
}


