import Image from 'next/image';
import bannerImage from './../../public/d20developers.webp'

function LandingPageHeader(){ 
    return (
    <header className='p-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'>
        <figure className='flex flex-col justify-center items-center
        md:flex-row gap-8
        '>
            <figcaption >
                <h1 className='font-bold text-4xl text-stone-800 text-center
                md:text-3xl lg:text-5xl xl:text-6xl 
                '>
                    D20 Development
                </h1>
                <p>
                    High inititive developers.
                </p>
            </figcaption>
            <Image
                src={bannerImage}
                alt='d20 devleopers'
            />
        </figure>
    </header>
);

}

export default LandingPageHeader;