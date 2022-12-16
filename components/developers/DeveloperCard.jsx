import Image from "next/image";
import Link from "next/link";
function DeveloperCard({
  firstName,
  lastName,
  avatar,
  email,
  phoneNumber,
  experience,
  active,
  type,
  uid,
  city
}) {
  const variants = {
    inactive: " text-sm font-bold text-lime-800",
    active: " text-sm font-bold text-red-800",
  };
  return (
    
    <aside className="w-full m-4 sm:m-0 sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33%_-_1rem)] py-10 border-gray-200/50 rounded-md shadow-md">
      <Link href={`/developer/${uid}`}>
        <header className="flex flex-col items-center">
          <Image
            src={avatar}
            width={128}
            height={128}
            className="rounded-full border-gray-400/200 p-1 bg-gray-800"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {firstName} {lastName}
          </h2>
        </header>
        <dl className="text-navy-400 text-center items-center">
          
          <dt className="sr-only">Email</dt>
          <dd>{email}</dd>
          <dt className="sr-only">Phone</dt>
          <dd>{phoneNumber}</dd>
          <dt className="sr-only">City</dt>
          <dd>{city}</dd>
          <dt className="sr-only">Role</dt>
          <dd>{type}</dd>
          <dt className="sr-only">Experience</dt>
          <dd>{experience} years experience</dd>
          <dt className="sr-only">Availability</dt>
          <dd className={`${active ? variants.active : variants.inactive}`}>
            {active ? "not available" : "available"}
          </dd>
        </dl>
      </Link>
    </aside>
  );
}

export default DeveloperCard;
