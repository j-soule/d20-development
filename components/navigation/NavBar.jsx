
import GitHubLink from './GitHubLink';
import GitHubButton from './GitHubLink';
import LoginButton from './LoginButton';
import MobileMenuButton from './MobileMenuButton' ;
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from './NavBarLinks';


function NavBar() {
    return (
        <nav className="p-2 shadow relative flex justify-between">
            <NavBarBranding/>
            <NavBarLinks/>
            <div>
            <GitHubLink className='md:flex '/>
            
            <LoginButton className='md:flex '/>
            
            </div>
            <MobileMenuButton className="md:hidden"/>
        </nav>
    );

}

export default NavBar;