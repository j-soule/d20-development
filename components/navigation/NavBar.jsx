
import LoginButton from './LoginButton';
import MobileMenuButton from './MobileMenuButton' ;
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from './NavBarLinks';


function NavBar() {
    return (
        <nav className="p-2 shadow relative flex justify-between">
            <NavBarBranding/>
            <NavBarLinks/>
            <LoginButton className='md:flex md:justify-end'/>
            <MobileMenuButton className="md:hidden"/>
        </nav>
    );

}

export default NavBar;