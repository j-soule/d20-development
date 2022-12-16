
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
  } from "react-icons/ai";
  
  function BioHeader({ firstName, city, heading}) {
    return (
      <header className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold   text-red-800">
        I’m {firstName} I live in {city}, Where I'm a  {heading} 
        </h1>
        <p className="mt-6 text-base text-grey-600 ">
        Ability decrease ability drain alignment barbarian burrow checked craft domain fear ray glamour subschool hit die humanoid type level loss movement modes nauseated ranged attack roll size modifier spell spell version strength subject swift action swim take damage telepathic link vermin type.
        </p>
        <ul className="mt-6 flex gap-6">
          <li aria-label="Follow on Twitter">
            <AiOutlineTwitter className="text-xl fill-slate-500" />
          </li>
          <li aria-label="Follow on Instagram">
            <AiOutlineInstagram className="text-xl fill-slate-500" />
          </li>
          <li aria-label="Follow on GitHub">
            <AiOutlineGithub className="text-xl fill-slate-500" />
          </li>
          <li aria-label="Follow on LinkedIn">
            <AiFillLinkedin className="text-xl fill-slate-500" />
          </li>
         
        </ul>
      </header>
    );
  }
  
  export default BioHeader;