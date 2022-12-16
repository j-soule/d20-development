import Image from "next/image";

function BioNav({ avatar, firstName}) {
  return (
    <nav className="pointer-events-auto font-semibold flex items-center gap-12 mb-10">
    
      <Image
        src={avatar}
        width={128}
        height={128}
        className=" rounded-full "
        alt={firstName}
        priority
      />
      <ul className="flex bg-white/90 px-3 text-sm font-medium text-grey-500  ring-1 ring-zinc-900/5 backdrop-blur ">
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
          About
        </li>
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
          Education
        </li>
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
          Projects
        </li>
        <li className="relative block px-3 font-semibold py-2 transition hover:text-red-500">
          Experience
        </li>
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
          Background
        </li>
      </ul>
    </nav>
  );
}

export default BioNav;