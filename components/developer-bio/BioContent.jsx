import { AiOutlineRight } from 'react-icons/ai'


function BioContent({content}) {
  return (
    <article >
      <h2 className="text-base font-semibold tracking-tight text-zinc-800">
        {content}
      </h2>

      <p className=" mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      Eventually, you do plan to have dinosaurs on your dinosaur tour, right? I gave it a cold? I gave it a virus. A computer virus. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosa
      </p>
      <footer className="my-4 flex items-center text-sm font-medium text-teal-500">
        <h3>read more</h3>
         <AiOutlineRight className='text-base'/>
      </footer>
    </article>
  );
}

export default BioContent;