
import {sanityClient} from '../lib/sanity.server'
import LandingPage from '../components/landing-page/landing-page'


function IndexPage(props) {
  return (
    <div>
      <LandingPage linksAndLogos={props.linksAndLogos} aboutPics={props.aboutPic}/> 
    </div>
  )
}

export default IndexPage;

export async function getStaticProps() {
  
  
    const [ aboutPic, linksAndLogos ] = await Promise.all([
      sanityClient.fetch(`
                          *[_type == "imageAboutSection"]{
                            alt,
                            imageAbt{
                              asset->{
                                  url
                              }
                            }
                        }`),
       sanityClient.fetch(`
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
    ])

  return {
    props: { aboutPic, linksAndLogos },

  }
}


