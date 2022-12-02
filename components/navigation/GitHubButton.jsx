import Link from 'next/link'
function GitHubButton({className, ...props}) {
    return ( 
        <Link href="signin" className={`hidden ${className} w-[130px]`}>
            GitHub
        </Link>

     );
}

export default GitHubButton; 