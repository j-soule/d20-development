import Image from 'next/image'

function DeveloperCard({fullName, avatar, jobTitle, experience, availability}){
    const variants = {
        available: 'bg-lime-400 rounded-md px-3 py-1 text-sm text-lime-800',
        unavailable: 'bg-red-400 rounded-md px-3 py-1 text-sm text-red-800'
    }
    return(
        <aside className='w-full m-4 sm:m-0 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33%_-_1rem)] py-10 border-gray-200/50 rounded-md shadow-md'>
            <header className='flex flex-col items-center'>
                <Image
                src={avatar}
                width={128}
                height={128}
                className="rounded-full border-gray-400/200 p-1 bg-gray-800"
                />
                <h2 className='text-2xl font-semibold text-gray-800'>{fullName}</h2>
             
            </header>
            <dl>
                <dt className='sr-only'>Job Title</dt>
                <dd>{jobTitle}</dd>
                <dt className='sr-only'>Experience</dt>
                <dd>{experience} years experience</dd>
                <dt className='sr-only'>Availability</dt>
                <dd className={`${availability? variants.available : variants.unavailable}`}>{availability? "not available": "available"}</dd>

            </dl>
          
        </aside>
    );
}

export default DeveloperCard;