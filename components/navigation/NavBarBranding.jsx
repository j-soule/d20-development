import {LogoSvg} from './../icons'
function NavBarBranding ({className, ...props}){
    return (
        <figure className="flex items-center gap-2">
                <LogoSvg className="fill-red-500 w-6"/>
                <figcaption>
                    <h1>D20 Developers</h1>
                </figcaption>
            </figure>
    );
}

export default NavBarBranding;