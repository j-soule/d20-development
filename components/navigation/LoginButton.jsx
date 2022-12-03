import Link from 'next/link'
function LoginButton({className, ...props}) {
    return ( 
        <Link href="/login" className={`hidden ${className} w-[130px]`}>
            login
        </Link>

     );
}

export default LoginButton; 