
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
  } from "react-icons/ai";
  function BioHeader({ firstName, city, heading }) {
    return (
      <header className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold   text-zinc-800">
        I’m {firstName} I live in {city}, Where I'm The  {heading}
        </h1>
        <p className="mt-6 text-base text-zinc-600 ">
        Eventually, you do plan to have dinosaurs on your dinosaur tour, right? I gave it a cold? I gave it a virus. A computer virus. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosa
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