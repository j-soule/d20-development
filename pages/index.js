import Head from "next/head";
import {LandingPageHeader} from "../components/headers";
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Find the best devs with high initiative for your next project"
        />
        <title>D20 Development</title>
      </Head>
     
      
      <LandingPageHeader/>
      <main>
        
      </main>
    </>
  );
}
