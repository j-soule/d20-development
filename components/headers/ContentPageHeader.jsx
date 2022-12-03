import { LogoSvg } from "../icons";

function ContentPageHeader({title, tagline, type}) {
    return (
      <>
        <header className=" text-center mt-20">
        
          <h1 className="flex flex-col text-lg font-semibold text-red-600">
          {type}
          
          </h1>
          <div></div>
          <LogoSvg className="fill-red-600 w-16 mx-auto "/>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            
           {title}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-red-500">
          {tagline}
          </p>
        </header>
      </>
    );
  }
  
  export default ContentPageHeader;