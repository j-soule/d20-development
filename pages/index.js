import Head from "next/head";
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
      <header className="text-center py-[10rem]">
        <img className="w-[90px] mx-auto " src="d20icon.svg" alt="d20 icon"/>
        <h1 className="text-6xl">D20 Development</h1>
        <p>High initiative developers</p>
      </header>
    </>
  );
}
