import Image from "next/image";

function BioNav({ avatar, firstName}) {
  return (
    <nav className="pointer-events-auto flex items-center gap-12 mb-10">
    
      <Image
        src={avatar}
        width={96}
        height={96}
        className="w-[96px] h-[96px] rounded-full"
        alt={firstName}
        priority
      />
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-red-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90">
        <li className="relative block px-3 py-2 transition hover:text-red-500">
          About
        </li>
        <li className="relative block px-3 py-2 transition hover:text-red-500">
          Education
        </li>
        <li className="relative block px-3 py-2 transition hover:text-red-500">
          Projects
        </li>
        <li className="relative block px-3 py-2 transition hover:text-red-500">
          Experience
        </li>
        <li className="relative block px-3 py-2 transition hover:text-red-500">
          Background
        </li>
      </ul>
    </nav>
  );
}

export default BioNav;