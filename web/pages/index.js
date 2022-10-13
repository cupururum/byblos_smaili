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
      <LandingPage linksAndLogos={ props.landingPageImgAssets.externalLink } heroImgs={ props.landingPageImgAssets.mainPageHeroImg} aboutImg={props.landingPageImgAssets.mainPageAbtImg}/>
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
        'mainPageHeroImg': *[_type == 'galleryPage' && galleryName == 'landing page hero']{
                          _id, 
                          galleryDesktop{
                              images[]{_key, asset->{url}}
                          },
                          galleryMobile{
                            images[]{_key, asset->{url}}
                          }   
      },
        'mainPageAbtImg': *[_type == 'galleryPage' && galleryName == 'landing page about']{
                          _id, 
                          galleryDesktop{
                              images[]{_key, asset->{url}}
                          }
      }
    }
  `)
      

  return {
    props: { landingPageImgAssets }
  }
}


