import Image from 'next/image';
import bannerImage from './../../public/banner.png'

function LandingPageHeader(){ return (
    <header>
        <figure>
            <figcaption>
                <h1>
                    D20 Development
                </h1>
                <p>
                    High inititive developers.
                </p>
            </figcaption>
            <Image
                src={bannerImage}
            />
        </figure>
    </header>
);

}

export default LandingPageHeader;