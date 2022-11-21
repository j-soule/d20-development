import Head from "next/head";
import {LandingPageHeader} from "../components/header/LandingPageHeader";
import {NavBar} from "../components/navigation/NavBar";


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
     
      <NavBar/>
      <LandingPageHeader/>
    </>
  );
}
