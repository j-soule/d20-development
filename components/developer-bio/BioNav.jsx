import Image from "next/image";
import Link from 'next/link'
function BioNav({ avatar, firstName}) {
  return (
    <nav className="pointer-events-auto font-semibold flex items-center gap-12 mb-10">
    
      <Image
        src={avatar}
        width={96}
        height={96}
        className=" rounded-full "
        alt={firstName}
        priority
      />
      <ul className="flex bg-white/90 px-3 text-sm font-medium text-slate-600 shadow-inner ring-1 ring-zinc-900/5 backdrop-blur ">
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
        <Link href="#">About</Link>
        </li>
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
          <Link href="#">Education</Link>
        </li>
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
        <Link href="#">Projects</Link>
        </li>
        <li className="relative block px-3 font-semibold py-2 transition hover:text-red-500">
        <Link href="#">Experience</Link>
        </li>
        <li className="relative block font-semibold px-3 py-2 transition hover:text-red-500">
        <Link href="#">Background</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BioNav;