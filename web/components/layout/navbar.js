import NavbarItems from './navbar-items'

function Navbar(){
 return(
        <nav className="hidden lg:flex lg:justify-between xl:space-x-6 dxl:space-x-12 lg:mt-2 ">
            <NavbarItems/>
        </nav>
 ) 
}

export default Navbar