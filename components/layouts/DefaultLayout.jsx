import {NavBar} from "./../navigation"

function DefaultLayout({children, ...props }){
    return(
        <>
        <NavBar/>
        {children}
        
        </>
    );
}

export default DefaultLayout;

