import {groq} from 'next-sanity'
import {getClient} from '../lib/sanity.server'
import LandingPage from '../components/landing-page/landing-page'



function IndexPage(props) {

  if (!props.landingPageImgAssets) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="pb-32">
      <LandingPage linksAndLogos={ props.landingPageImgAssets.externalLink } landingPageImgs={ props.landingPageImgAssets.landingPageImg[0] } />
    </div>
  )
}

export default IndexPage;

export async function getStaticProps() {
  
  
    const landingPageImgAssets  = await getClient().fetch(groq`
    {
      'externalLink': *[_type == 'externalLink']{
      title,
      _id,
      href,
      alt,
      imgCards{
        asset->{
            url
        }
      }
    },
    'landingPageImg': *[_type == 'landingPageImg']{
      heroImg[]{_key, alt, asset->{url}},
      aboutImg[]{_key, alt, asset->{url}}
    }
  }
    `)
      

  return {
    props: { landingPageImgAssets }

  }
}


