import React from 'react'

import Link from 'next/link'
import {PortableText} from '../../lib/sanity'


function Article(props) {
    return (
        <>
            <div className="text-left text-menu text-dusty-creme w-full pt-44 pl-10 lg:absolute lg:top-56 lg:left-16 lg:w-68 lg:pt-0 lg:pl-0 lg:text-center">
                        <Link href="/news"><p>&larr; Back to all</p></Link>  
            </div>
            <div className="w-full px-10 pt-5 xl:px-108 xl:pt-52">
                
                <div>
                    <PortableText blocks={props.article[0].body}/>
                </div>
                
                <div className="mt-10 mb-36">
                        <Link href="/news"><p className="text-center text-menu text-dusty-creme">&larr; Back to all</p></Link>  
                </div>
            </div>
        </>
    )
}

export default Article
