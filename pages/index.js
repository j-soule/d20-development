import Head from "next/head";
import {LandingPageHeader} from "../components/headers";
import {NavBar} from "./../components/navigation";


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
      <ContentPageHeader type='d20 developers' title='the next big thing' tagline='Makes the last big thing useable'/>
    </>
  );
}
