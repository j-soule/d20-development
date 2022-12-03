import {LogoSvg} from './../icons'
import Link from 'next/link'
function NavBarBranding ({className, ...props}){
    return (
        <Link href='/'>
            <figure className="flex items-center gap-2">
                <LogoSvg className="fill-red-500 w-6"/>
                <figcaption>
                <h1>D20 Developers</h1>
                </figcaption>
            </figure>
        </Link>
    );
}

export default NavBarBranding;