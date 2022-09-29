import { useState, useEffect } from 'react'

import Link from 'next/link'
import {Fragment} from 'react'
import { sanityClient } from "../../lib/sanity.server";



function NavbarItems() {

    const [ navItems, setNavItems ] = useState([]) 

    if(!navItems){
        return <p>Loading</p>
    }

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "navigation"]{
            title,
            _id,
            slug{
                current
            } 
        }`).then((data) => setNavItems(data)).catch(console.error)
    }, [])
    
    return(
       <Fragment>

            {navItems.map((item) => 
                <div className="active:undeline xl:hover:underline" key={item._id}> 
                    <Link href={`/${item.slug.current}`}>{item.title}</Link>
                </div>
            )}
        </Fragment>

    )
}
export default NavbarItems

